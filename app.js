let nombre = "Isabella";
let ciudad = "Sevilla";
let edad = "19";

let saludo =
  "Hola, mi nombre es " +
  nombre +
  " y vivo en " +
  ciudad +
  ". Tengo " +
  edad +
  " años.";
console.log(saludo);

// Usamos comillas invertidas para insertar variables
let saludo2 = `Hola mi nombre es ${nombre} y vivo en ${ciudad}. Tengo ${edad} años.`;
console.log(saludo2);

//cambiamos el valor de las variables pidiendo al usuario que las instroduzca mediante prompt

nombre = prompt("Introduce tu nombre: ");
ciudad = prompt("Introduce tu ciudad: ");
edad = prompt("Introduce tu edad: ");
// Creamos un saludo en mayusculas usando template literals
saludo2 = `Hola mi nombre es ${nombre} y vivo en ${ciudad}. Tengo ${edad} años.`;
console.log(saludo2); // Mostramos el valor de la variable saludo2 en la consola

document.getElementById("hola").textContent = saludo;
