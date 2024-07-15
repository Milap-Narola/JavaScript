document.getElementById('loginForm').addEventListener('submit', loadLogin = (e) => {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:3000/user')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert('Login successful!');
                localStorage.setItem('loggedInUser', username);
                window.location.href = 'addproduct.html'; 
            } else {
                alert('Invalid credentials');
            }
        })
        .catch(error => console.error('Error:', error));
});
