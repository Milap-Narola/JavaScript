document.addEventListener('DOMContentLoaded', handleCart = () => {

    if (!isLoggedIn()) {
        window.location.href = 'Final-Project/html/signup.html';
        return;
    }

    fetch('http://localhost:3000/cart')
        .then(response => response.json())
        .then(cartItems => {
            const cartList = document.getElementById('cartList');
            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.innerHTML = `
                    <span>${item.name} - $${item.price}</span>
                    <div>
                        <button class="btn btn-secondary btn-sm" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span id="quantity-${item.id}">${item.quantity}</span>
                        <button class="btn btn-secondary btn-sm" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                `;
                cartList.append(li);
            });
        })
        .catch(error => console.error('Error:', error));
});

const updateQuantity = (id, change) => {
    const quantityElement = document.getElementById(`quantity-${id}`);
    let newQuantity = parseInt(quantityElement.textContent) + change;

    if (newQuantity < 1) return;

    fetch(`http://localhost:3000/cart/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            quantity: newQuantity
        })
    }).then(response => response.json())
        .then(data => {
            quantityElement.textContent = data.quantity;
        })
        .catch(error => console.error('Error:', error));
}

const isLoggedIn = () => {
    return !!localStorage.getItem('loggedInUser');
}
