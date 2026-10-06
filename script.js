console.log("JavaScript conectado correctamente");

const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const personas = document.getElementById("personas").value;
    const telefono = document.getElementById("telefono").value;

    const datos = new URLSearchParams();

    datos.append("nombre", nombre);
    datos.append("personas", personas);
    datos.append("telefono", telefono);

    fetch("https://script.google.com/macros/s/AKfycbwPxhqpxwA7ElDDcLysp2YSjGTM9wjZ0i4u_DMWqD7_W9ytvDR1jwLtNXenkxrDKWZN/exec", {
        method: "POST",
        mode: "no-cors",
        body: datos
    })
    .then(function() {
        respuesta.textContent = "✅ Asistencia confirmada";
        formulario.reset();
    })
    .catch(function(error) {
        console.error("Error:", error);
        respuesta.textContent = "❌ Ocurrió un error al enviar la información.";
    });
});
