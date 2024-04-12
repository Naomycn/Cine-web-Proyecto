const container = document.querySelector('.container'); //Selecciona un elemento por clase 
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); //Toma todos los tipos de elemento en una node list
const count = document.getElementById('count'); // Selecciona elemento por id 

// Actualiza la cuenta al hacer clic en un asiento
function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll('.row .seat.selected');
      const selectedSeatsCount = selectedSeats.length;
      count.innerText = selectedSeatsCount;
    }

    // Maneja el evento de clic en los asientos
    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
      }
    });

    // Actualiza la cuenta al cargar la página
    updateSelectedCount();