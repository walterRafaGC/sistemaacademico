document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aquí puedes agregar la lógica de verificación del usuario y contraseña
    // Por ejemplo, enviar datos al servidor para la autenticación
    
    // Después de la verificación, puedes redirigir a otra página si es exitosa
    // Ejemplo: window.location.href = 'dashboard.html';
  });
  