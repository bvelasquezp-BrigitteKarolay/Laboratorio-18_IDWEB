import multiplicar from "./multiplicacionDivision.js"; 
import { dividir } from "./multiplicacionDivision.js";  
import { suma, resta } from "./sumaResta.js";       

const input = document.getElementById("op-ej9");
const btn = document.getElementById("btn-ej9");
const out = document.getElementById("resultado");


function procesarOperacion(texto) {
 
  const match = texto.trim().match(/^(-?\d+(\.\d+)?)\s*([+\-*\/])\s*(-?\d+(\.\d+)?)$/);
  if (!match) {
    return { error: true, mensaje: "ERROR: operacion invalida" };
  }

  const a = parseFloat(match[1]);
  const operador = match[3];
  const b = parseFloat(match[4]);

  try {
    let resultado;
    switch (operador) {
      case "+":
        resultado = suma(a, b);
        break;
      case "-":
        resultado = resta(a, b);
        break;
      case "*":
        resultado = multiplicar(a, b);
        break;
      case "/":
        
        resultado = dividir(a, b);
        break;
      default:
        return { error: true, mensaje: "ERROR" };
    }

    return { error: false, mensaje: "Resultado: " + resultado };
  } catch (err) {
    
    return { error: true, mensaje: "Error en división: " + err.message };
  }
}

btn.addEventListener("click", () => {
  const texto = input.value || "";
  const res = procesarOperacion(texto);
  out.textContent = res.mensaje;
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") btn.click();
});
