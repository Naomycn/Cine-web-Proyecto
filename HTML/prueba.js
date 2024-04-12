document.getElementById('card-number').addEventListener('input', function () {
    var cardNumber = this.value.replace(/\s/g, '');
    var cardType = '';
    if (/^4/.test(cardNumber)) {
        cardType = 'visa';
    } else if (/^5[1-5]/.test(cardNumber)) {
        cardType = 'mastercard';
    } // Add more card types if needed

    var cardTypeElement = document.getElementById('card-type');
    if (cardType === 'visa') {
        cardTypeElement.innerHTML = '<img src="Imagenes/visa.png" alt="Visa">';
    } else if (cardType === 'mastercard') {
        cardTypeElement.innerHTML = '<img src="Imagenes/mastercard.png" alt="Mastercard">';
    } else {
        cardTypeElement.innerHTML = '';
    }
});
