const input = document.getElementById('email');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');

// Resets the form validation. Removes the 'invalid' class and hides the message.
function resetValidation() {
    input.classList.remove('invalid');
    msg.hidden = true;
}

// Handles invalid inputs.
function handleInvalidInput(errorMessage) {
    input.value = "";
    input.placeholder = "example@email.com";
    input.classList.add('invalid');
    msg.hidden = false;
    msg.style.color = "hsl(354, 100%, 66%)";
    msg.innerText = errorMessage;
}

// Handles successful validation.
function validationSuccess() {
    input.value = "";
    input.placeholder = "Your email address...";
    input.classList.remove('invalid');
    msg.hidden = false;
    msg.style.color = "hsl(223, 87%, 63%)"
    msg.innerText = "Subscribed successfully!"
}

// Checks the input value with a validation function and then calls the appropriate function based on whether the email is valid or not.
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = input.value;
    const isValid = validateEmail(email);

    if(email === ""){
        handleInvalidInput("Whoops! It looks like you forgot to add your email");
    }
    else if(!isValid) {
        handleInvalidInput("Please provide a valid email address");
    }
    else {
       validationSuccess();
    }
})

// On input, it calls the function to reset the validation.
input.addEventListener('input', resetValidation);

// Validates the email format using regex. It tests the email against a regular expression pattern and returns a boolean based on whether the pattern matches or not.
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}