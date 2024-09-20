document.getElementById('form-button').addEventListener('click', function() {

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let description = document.getElementById('description').value;
    let inquiryNature = document.querySelector('input[name="inquiryNature"]:checked');

    let messages = [];

    // Check if fields are empty
    if (!firstName) {
        messages.push("First name is required.");
    }
    if (!lastName) {
        messages.push("Last name is required.");
    }
    if (!email) {
        messages.push("Email is required.");
    }
    if (!phone) {
        messages.push("Phone number is required.");
    } else if (phone.length !== 11) {
        messages.push("Phone number must be 11 characters long."); //Ensure phone number is 11 characters
    }
    if (!description) {
        messages.push("Message is required.");
    }

    // Validate email contains "@" and "."
    if (email) {
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            messages.push("Please enter a valid email address.");
        }
    }

    // Ensure phone number is numeric
    if (phone) {
        if (isNaN(phone)) {
            messages.push("Phone number must be numeric.");
        }
    }

    // Ensure an inquiry nature is selected
    if (!inquiryNature) {
        messages.push("Please select the nature of your inquiry.");
    }

    // Show validation messages or submit the form
    if (messages.length > 0) {
        alert(messages.join("\n"));
    } else {
        window.location.href = "contact.html";
    }
});
