const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.blocked)');
const count = document.getElementById('count');
const backButton = document.getElementById('backButton');
const total = document.getElementById('total');
const selectedSeatText = document.getElementById('selectedSeat');
const selectedRowText = document.getElementById('selectedRow');
const continueButton = document.getElementById('continueButton');

// No se necesita la función populateUI ya que no hay selección de película

let ticketPrice = 10; // Precio del boleto fijo, puedes ajustarlo según sea necesario

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  
  // Calcular la cantidad de asientos disponibles
  const availableSeatsCount = seats.length - document.querySelectorAll('.row .seat.occupied').length - selectedSeatsCount;
  remaining.innerText = availableSeatsCount;

}

container.addEventListener('click', e => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('blocked')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();

    // Obtener el número de asiento y la fila
    const selectedSeatNumber = [...e.target.parentNode.children].indexOf(e.target) + 1;
    const selectedRowNumber = [...container.children].indexOf(e.target.parentNode) + 1;

    selectedSeatText.innerText = selectedSeatNumber;
    selectedRowText.innerText = selectedRowNumber;
  }
})
// Evento de selecion de asiento 
container.addEventListener('click', (e) => {
    // console.log(e.target); .target muestra el elemento que se seleciona
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        //e.target.classList.add = agrega clase especificada
        //e.target.classList.remove = remueve clase especificada
        e.target.classList.toggle('selected'); //alterna la clase especificada

        updateSelectedCount();
    }

    const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const selectedSeat = document.getElementById('selectedSeat');
const selectedRow = document.getElementById('selectedRow');

let ticketPrice = 10;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    // Si hay un asiento seleccionado, mostrar su número y fila
    if (selectedSeatsCount === 1) {
        const seatNumber = Array.from(seats).indexOf(selectedSeats[0]) + 1;
        const rowNumber = Math.ceil(seatNumber / 8); // Suponiendo 8 asientos por fila
        selectedSeat.innerText = seatNumber;
        selectedRow.innerText = String.fromCharCode(65 + rowNumber - 1); // Convertir número de fila a letra (A, B, C, ...)
    } else {
        selectedSeat.innerText = '-';
        selectedRow.innerText = '-';
    }
}

// Evento de clic en el asiento
document.querySelectorAll('.row .seat').forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSelectedCount();
    });
});

// Funcionalidad de los botones
backButton.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para regresar a la página anterior o a otra sección de tu aplicación
    console.log('Botón de Regresar clickeado');
});

});

updateSelectedCount();
