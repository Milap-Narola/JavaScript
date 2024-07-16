document.getElementById('Userdata').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
    }).then(response => response.json())
        .then(data => {
            alert('Sign up successful!');
            localStorage.setItem('loggedInUser', data);
            window.location.href = '/Final-Project/html/addProduct.html';
        })
        .catch(error => console.error('Error:', error));
});
