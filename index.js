document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactBtn");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("contactForm");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    form.onsubmit = function(event) {
        event.preventDefault();

        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const phoneRegex = /^\+94\d{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;
        if (!name) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }
        if (!address) {
            document.getElementById('addressError').textContent = 'Address is required';
            isValid = false;
        }

        if (!phoneRegex.test(phone)) {
            document.getElementById('phoneError').textContent = 'Phone number must start with +94 and be followed by exactly 9 digits';
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format';
            isValid = false;
        }
        if (message.length < 10) {
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters long';
            isValid = false;
        }

        if (!name && !address && !phone && !email && !message) {
            alert('Please fill out all fields.');
        }

        if (isValid) {
            const contactData = {
                name: name,
                address: address,
                phone: phone,
                email: email,
                message: message
            };

            localStorage.setItem('contactData', JSON.stringify(contactData));

            alert('Your message has been sent successfully!');

            modal.style.display = "none";
            form.reset();
        }
    }


    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    nameInput.addEventListener('input', function() {
        nameInput.style.backgroundColor = 'white';
        nameInput.style.color = 'black';
    });

    emailInput.addEventListener('input', function() {
        emailInput.style.backgroundColor = 'white';
        emailInput.style.color = 'black';
    });
});
