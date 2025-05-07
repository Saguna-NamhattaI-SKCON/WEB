document.addEventListener("DOMContentLoaded", function () {

    // 1. **Form Validation**
    const form = document.querySelector("#contact-form");  // Adjust this to match your form's ID

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();  // Prevent form submission

            // Get form fields
            const name = form.querySelector("#name");
            const email = form.querySelector("#email");
            const message = form.querySelector("#message");

            let valid = true;

            // 2. **Name Validation**
            if (name.value.trim() === "") {
                name.classList.add("error");
                valid = false;
            } else {
                name.classList.remove("error");
            }

            // 3. **Email Validation**
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email.value.trim())) {
                email.classList.add("error");
                valid = false;
            } else {
                email.classList.remove("error");
            }

            // 4. **Message Validation**
            if (message.value.trim() === "") {
                message.classList.add("error");
                valid = false;
            } else {
                message.classList.remove("error");
            }

            // 5. **Form Submission**
            if (valid) {
                form.submit();  // Or handle with AJAX if you don't want page reload
                alert("Form submitted successfully!");
            } else {
                alert("Please fill in all fields correctly.");
            }
        });
    }
});
