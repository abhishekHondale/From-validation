document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("firstNameError").innerText = "";
    document.getElementById("lastNameError").innerText = "";
    document.getElementById("dobError").innerText = "";
    document.getElementById("genderError").innerText = "";
    document.getElementById("addressError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    let valid = true;

    // Validate first name
    if (firstName === "") {
        document.getElementById("firstNameError").innerText = "First name is required";
        document.getElementById("firstNameError").style.display = "block";
        valid = false;
    }

    // Validate last name
    if (lastName === "") {
        document.getElementById("lastNameError").innerText = "Last name is required";
        document.getElementById("lastNameError").style.display = "block";
        valid = false;
    }

    // Validate date of birth
    if (dob === "") {
        document.getElementById("dobError").innerText = "Date of birth is required";
        document.getElementById("dobError").style.display = "block";
        valid = false;
    }

    // Validate gender
    if (!gender) {
        document.getElementById("genderError").innerText = "Gender is required";
        document.getElementById("genderError").style.display = "block";
        valid = false;
    }

    // Validate address
    if (address === "") {
        document.getElementById("addressError").innerText = "Address is required";
        document.getElementById("addressError").style.display = "block";
        valid = false;
    }

    // Validate phone number (simple pattern for demonstration)
    const phonePattern = /^[0-9]{10}$/;  // Only allow 10-digit numbers
    if (phone === "" || !phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Please enter a valid 10-digit phone number";
        document.getElementById("phoneError").style.display = "block";
        valid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    // Validate password (at least 8 characters, must contain letters and numbers)
    const passwordPattern = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long, with at least one letter, one number, and one special character.";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    }

    // Validate confirm password (must match password)
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
    }

    // If valid, submit the form (you can replace this with an actual form submission)
    if (valid) {
        alert("Form submitted successfully!");
        // Form can be submitted to the backend here.
    }
});