import navbar from"../components/navbar.js";
document.getElementById('addProductForm').addEventListener('submit', handleData = (e) => {
    e.preventDefault();

    if (!isLoggedIn()) {
        window.location.href = 'Final-Project/html/signup.html';
        return;
    }

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: productName,
            price: productPrice
        })
    }).then(response => response.json())
        .then(data => {
            alert('Product added successfully!');
            document.getElementById('addProductForm').reset();
        })
        .catch(error => console.error('Error:', error));
});

const isLoggedIn = () => {
    return !!localStorage.getItem('loggedInUser');
}
