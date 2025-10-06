document.addEventListener('DOMContentLoaded', () => {

    //Form from HTML
    const form = document.getElementById("registration-form");
    form.addEventListener('submit', ((event) => {
        event.preventDefault();

        //Screen FeedBack
        const feedbackDiv = document.getElementById("form-feedback");
        const messages = [];

        // User validation
        let username = document.getElementById('username');

        let isValid = true; //validate checker
        if (username.value.trim().length < 3) {
            messages.push('Username be  at least 3 character long.')
            isValid = false;
        }

        const email = document.getElementById('email');
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value.trim())) {
            messages.push('Please enter a valid email address.')
            isValid = false;
        }

        // Password Validation
        const password = document.getElementById('password');
        if (password.value.length < 8) {
            messages.push('Password must be at least 8 chaactor long.')
            isValid = false;
        }

        // isValid = true;
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.textContent = 'Registration successful!';
            form.submit();

        } else {
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.textContent = messages.join(" ");
            // return;
        }
        // messeges.push()
    }));

})
