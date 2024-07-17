
const scriptURL = 'https://script.google.com/macros/s/AKfycbw-EwVXVzTqTms-DNYvTpdrAGrG-t0g8UunIPyualm8Ty0yZjFRLYiR-fRCwL-7qwG9AQ/exec';

document.getElementById('FormData').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = document.getElementById('FormData');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.text())  // convert response to text
        .then(responseText => {
            alert('Your form has been submitted successfully: ' + responseText);
            window.location.reload();
        })
        .catch(error => console.error('Error!', error));
});








