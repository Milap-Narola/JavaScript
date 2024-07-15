document.getElementById('signupForm').addEventListener('submit', loadSignup = (e) => {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => response.json())
        .then(data => {
            alert('Sign up successful!');
            localStorage.setItem('loggedInUser', username);
            window.location.href = 'addproduct.html';
        })
        .catch(error => console.error('Error:', error));
});
