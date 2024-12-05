// Simple form submission script
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you, ${name}! Your message has been received.`);
    console.log({ name, email, message });
  
    // Clear form
    this.reset();
  });
  