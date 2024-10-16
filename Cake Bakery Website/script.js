function openRegistrationForm() {
    document.getElementById("registrationModal").style.display = "flex"; // Show the registration modal
}

function closeRegistrationForm() {
    document.getElementById("registrationModal").style.display = "none"; // Hide the registration modal
}

function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    // Get the values from the input fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate name
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        return;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        return;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        return;
    }

    // If all validations pass
    document.getElementById("successMessage").textContent = "Registration successful!";
}

function openModal() {
    document.getElementById("resetModal").style.display = "flex"; // Display the reset modal
}

function closeModal() {
    document.getElementById("resetModal").style.display = "none"; // Hide the reset modal
}

function resetForm() {
    document.getElementById("registrationForm").reset(); // Reset the form
    closeModal(); // Close the reset modal
    document.getElementById("successMessage").textContent = ""; // Clear success message
    document.getElementById("nameError").textContent = ""; // Clear name error
    document.getElementById("emailError").textContent = ""; // Clear email error
    document.getElementById("passwordError").textContent = ""; // Clear password error
}