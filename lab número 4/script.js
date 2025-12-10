document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let motivo = document.getElementById("motivo").value;

    if (nombre === "" || correo === "" || motivo === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!correo.includes("@")) {
        alert("Ingrese un correo válido.");
        return;
    }

    alert("Formulario enviado correctamente.");
});
