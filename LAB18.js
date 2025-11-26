/* EJERCICIO 3  */
document.getElementById("btn-ej3").addEventListener("click", function () {
  const out = document.getElementById("out-ej3");
  out.textContent = "CARGANDO....";
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
  out.textContent = "CARGANDO....";
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


/* EJERCICIO 6  */
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


/* EJERCICIO 7  */
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


/* EJERCICIO 8 */
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


