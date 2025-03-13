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

// met behulp van deze code kan je de data van de input velden opslaan in de local storage
// als je de pagina ververst blijft de data in de input velden staan
// de data wordt opgeslagen in de local storage en wordt weer opgehaald als de pagina geladen wordt
// de data wordt opgeslagen met de key van het input veld en de value van de input veld
// de data wordt opgeslagen als de input veld veranderd
// de data wordt opgehaald als de pagina geladen wordt
// gebruik querySelectorAll om alle input velden te selecteren
// gebruik addEventListener om een event listener toe te voegen aan de input velden
// gebruik localStorage.setItem om de data op te slaan in de local storage
// gebruik localStorage.getItem om de data op te halen uit de local storage
//Opgezet met behulp van Copilot

