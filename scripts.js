document.addEventListener('DOMContentLoaded', () => {
    const formElements = document.querySelectorAll('input, select, textarea');

    // Load saved data from local storage
    formElements.forEach(element => {
        const savedValue = localStorage.getItem(element.id);
        if (savedValue) {
            element.value = savedValue;
        }

        // Save data to local storage on input change
        element.addEventListener('input', () => {
            localStorage.setItem(element.id, element.value);
        });
    });
});


