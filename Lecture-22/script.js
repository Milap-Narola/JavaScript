document.addEventListener('DOMContentLoaded', handleData = () => {
  let form = document.getElementById('emailForm');
  let emailsList = document.getElementById('emailsList');


  const fetchEmails = () => {
    fetch('http://localhost:3000/email')
      .then(response => response.json())
      .then(emails => {
        emailsList.innerHTML = '';
        emails.forEach(email => {
          let emailDiv = document.createElement('div');
          emailDiv.classList.add('email');
          emailDiv.innerHTML = `
              <h3>${email.subject}</h3>
              <p><strong>To:</strong> ${email.recipient}</p>
              <p>${email.body}</p>
            `;
          emailsList.append(emailDiv);
        });
      });
  }


  fetchEmails();


  form.addEventListener('submit', handleData = (event) => {
    event.preventDefault();

    let recipient = document.getElementById('recipient').value;
    let subject = document.getElementById('subject').value;
    let body = document.getElementById('body').value;


    fetch('http://localhost:3000/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipient, subject, body })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        fetchEmails(); 
        form.reset(); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});
