function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Validar el formulario (puedes agregar lógica más compleja aquí)
    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, complete todos los campos.";
        return;
    }

    // Verificar credenciales (simulación simple)
    if (username === "usuario" && password === "contraseña") {
        errorMessage.textContent = ""; // Limpiar mensaje de error
        alert("Inicio de sesión exitoso");
        // Aquí puedes redirigir a otra página o realizar otras acciones después del inicio de sesión.
    } else {
        errorMessage.textContent = "Credenciales incorrectas. Inténtelo de nuevo.";
    }
}
