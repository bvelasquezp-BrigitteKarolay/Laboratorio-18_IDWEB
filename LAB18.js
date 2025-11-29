/* Autora: Brigitte Karolay Velasquez Puma*/

/* EJERCICIO 3 */
document.getElementById("btn-ej3").addEventListener("click", function () {
  const out = document.getElementById("out-ej3");
  out.textContent = "CARGANDO...";
  fetch("https://jsonplaceholder.typicode.com/users/10")
    .then(function (res) { return res.json(); })
    .then(function (data) {
      const texto = "NAME: " + data.name + "\nUSERNAME: " + data.username + "\nEMAIL: " + data.email;
      console.log(texto);
      out.textContent = texto;
    })
    .catch(function (err) {
      console.error(err);
      out.textContent = "ERROR: " + err.message;
    });
});


/* EJERCICIO 4 */
document.getElementById("btn-ej4").addEventListener("click", async function () {
  const out = document.getElementById("out-ej4");
  out.textContent = "CARGANDO...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const data = await res.json();
    const texto = "NAME: " + data.name + "\nUSERNAME: " + data.username + "\nEMAIL: " + data.email;
    console.log(texto);
    out.textContent = texto;
  } catch (err) {
    console.error(err);
    out.textContent = "ERROR: " + err.message;
  }
});


/* EJERCICIO 5 */
document.getElementById("btn-ej5").addEventListener("click", function () {
  const out = document.getElementById("out-ej5");
  out.textContent = "CARGANDO...";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) { return res.json(); })
    .then(function (data) {
      const nombres = [];
      data.forEach(function (u) {
        nombres.push(u.name);
      });
      console.log("NOMBRES:", nombres);
      out.textContent = nombres.join("\n");
    })
    .catch(function (err) {
      console.error(err);
      out.textContent = "ERROR: " + err.message;
    });
});


/* EJERCICIO 6*/
document.getElementById("btn-ej6").addEventListener("click", async function () {
  const out = document.getElementById("out-ej6");
  out.textContent = "CARGANDO...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const nombres = data.map(function (u) { return u.name; });
    console.log("NOMBRES:", nombres);
    out.textContent = nombres.join("\n");
  } catch (err) {
    console.error(err);
    out.textContent = "ERROR: " + err.message;
  }
});


/* EJERCICIO 7 */
document.getElementById("btn-ej7").addEventListener("click", function () {
  const out = document.getElementById("out-ej7");
  out.textContent = "CARGANDO...";
  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(function (res) { return res.json(); })
    .then(function (u) {
      document.getElementById("ej7-name").textContent = u.name;
      document.getElementById("ej7-email").textContent = u.email;
      document.getElementById("ej7-city").textContent = (u.address && u.address.city) ? u.address.city : "-";
      const texto = "NAME: " + u.name + " | EMAIL: " + u.email + " | CITY: " + (u.address ? u.address.city : "-");
      console.log(texto);
      out.textContent = "DOM ACTUALIZADO";
    })
    .catch(function (err) {
      console.error(err);
      out.textContent = "ERROR: " + err.message;
    });
});


/* EJERCICIO 8*/
document.getElementById("btn-ej8").addEventListener("click", async function () {
  const out = document.getElementById("out-ej8");
  out.textContent = "CARGANDO...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const u = await res.json();
    document.getElementById("ej8-name").textContent = u.name;
    document.getElementById("ej8-email").textContent = u.email;
    document.getElementById("ej8-city").textContent = (u.address && u.address.city) ? u.address.city : "-";
    console.log("NAME:", u.name, "EMAIL:", u.email, "CITY:", u.address ? u.address.city : "-");
    out.textContent = "DOM ACTUALIZADO";
  } catch (err) {
    console.error(err);
    out.textContent = "ERROR: " + err.message;
  }
});


/* EJERCICIO 10 */
document.getElementById("btn-ej10").addEventListener("click", function () {
  const out = document.getElementById("out-ej10");
  const texto = document.getElementById("inp-ej10").value || "";
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  if (regex.test(texto)) {
    out.textContent = "CONTRASENA VALIDA";
  } else {
    out.textContent = "CONTRASENA NO VALIDA";
  }
});


/* EJERCICIO 11 */
document.getElementById("btn-ej11").addEventListener("click", function () {
  const out = document.getElementById("out-ej11");
  const texto = document.getElementById("inp-ej11").value || "";
  const regex = /https:\/\/[^\s"']+/g;
  const matches = texto.match(regex);
  if (matches && matches.length) {
    out.textContent = matches.join("\n");
    console.log("URLS ENCONTRADAS:", matches);
  } else {
    out.textContent = "NO SE ENCONTRARON URLS HTTPS";
  }
});


/* EJERCICIO 12 */
document.getElementById("btn-ej12").addEventListener("click", function () {
  const out = document.getElementById("out-ej12");
  const texto = document.getElementById("inp-ej12").value || "";
  const limpio = texto.replace(/<[^>]*>/g, "");
  out.textContent = limpio;
});


/* EJERCICIO 13 */
document.getElementById("btn-ej13").addEventListener("click", function () {
  const out = document.getElementById("out-ej13");
  const texto = document.getElementById("inp-ej13").value || "";
  const matches = texto.match(/[^.!?]+[.!?]?/g) || [];
  const oraciones = matches.map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
  out.textContent = oraciones.join("\n");
});


/* EJERCICIO 14 */
document.getElementById("btn-ej14").addEventListener("click", function () {
  const out = document.getElementById("out-ej14");
  const texto = document.getElementById("inp-ej14").value || "";
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (regex.test(texto)) out.textContent = "FORMATO VALIDO";
  else out.textContent = "FORMATO NO VALIDO";
});


