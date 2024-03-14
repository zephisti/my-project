// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate name field
        const nameInput = document.getElementById('name');
        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return;
        }

        // If all validations pass, you can proceed with form submission or further processing
        submitForm();
    });

    function submitForm() {
        // You can perform additional actions here, such as storing the form data or displaying a thank you message
        alert('Thank you for completing the survey!');
        // For now, let's reset the form
        form.reset();
    }
});



