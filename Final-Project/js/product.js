document.addEventListener('DOMContentLoaded', loadProducts = () => {

    if (!isLoggedIn()) {
        window.location.href = 'Final-Project/html/signup.html';
        return;
    }
});
const loadProducts = () => {
    fetchProducts();
};

const fetchProducts = () => {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('productList');
            productList.innerHTML = '';
            products.forEach(product => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.innerHTML = `
                    <span>${product.name} - $${product.price}</span>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
                `;
                productList.append(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

const deleteProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            fetchProducts(); // Refresh the product list after deletion
        } else {
            console.error('Failed to delete the product');
        }
    }).catch(error => console.error('Error:', error));
}

const isLoggedIn = () => {
    return !!localStorage.getItem('loggedInUser');
}
