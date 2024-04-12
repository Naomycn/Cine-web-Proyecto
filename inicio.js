function toggleMenu() {
    var navMenu = document.getElementById("mainNav");
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}

// Función para simular la visualización de la cartelera
function verCartelera() {
    var movieList = document.getElementById("movieList");
    movieList.innerHTML = `
        <div class="movie-item">
            <h3>La Primera Profecía</h3>
            <img src="Imagenes/Peli1.jpeg" alt="Película 1">
            <p>Es una película de terror sobrenatural estadounidense de 2024</p>
            <a href="detalles-1.html">Ver Detalles</a>
        </div>
        <div class="movie-item">
            <h3>Chostbusters</h3>
            <img src="Imagenes/Peli2.jpeg" alt="Película 2">
            <p>La familia Spengler regresa a la famosa estación de bomberos de la ciudad de Nueva York con los cazafantasmas originales</p>
            <a href="detalles-2.html">Ver Detalles</a>
        </div>
        <div class="movie-item">
            <h3>Título de la Película 3</h3>
            <img src="Imagenes/Peli3.jpg" alt="Película 3">
            <p>Descripción de la película 3.</p>
            <a href="detalles-3.html">Ver Detalles</a>
        </div>
        <div class="movie-item">
            <h3>Título de la Película 4</h3>
            <img src="Imagenes/Peli4.jpeg" alt="Película 4">
            <p>Descripción de la película 4.</p>
            <a href="detalles-4.html">Ver Detalles</a>
        </div>
        <!-- Agregar más películas según sea necesario -->
    `;
}