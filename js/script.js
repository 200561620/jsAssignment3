// Event listener to JavaScript
document.getElementById('display-student-info').addEventListener('click', (event) => {
    document.getElementById('student-info').textContent = ' Name: ADITHYA KIRAN      Student ID: 200561620 ';
});


// Define a Pizza class to represent a pizza order
class Pizza {
    constructor(size, crust, sauce, cheeses, meats, veggies, drink, specialInstructions) {
        // Assign properties to the pizza object
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheeses = cheeses;
        this.meats = meats;
        this.veggies = veggies;
        this.drink = drink;
        this.specialInstructions = specialInstructions;
    }

    // Method to describe the pizza order
    describe() {
        // Return a string describing the pizza with all selected options
        return `A ${this.size} ${this.crust} crust pizza with ${this.sauce} sauce, ${this.cheeses.join(', ')}, ${this.meats.join(', ')}, ${this.veggies.join(', ')}${this.drink ? ' and a ' + this.drink : ''}. Special instructions: ${this.specialInstructions}`;
    }
}

// Function to check if the form is filled out correctly
function validateForm() {
    // Get values from the form
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const sauce = document.querySelector('input[name="sauce"]:checked');
    const cheeses = document.querySelectorAll('input[name="cheese"]:checked');
    const meats = document.querySelectorAll('input[name="meat"]:checked');
    const veggies = document.querySelectorAll('input[name="veggie"]:checked');
    const drink = document.getElementById('drink').value;
    const specialInstructions = document.getElementById('comments').value;

    // Array to keep track of missing fields
    let missingFields = [];
    // Check each field and add to the array if it's missing
    if (!size) missingFields.push('pizza size');
    if (!crust) missingFields.push('crust type');
    if (!sauce) missingFields.push('sauce');
    if (cheeses.length === 0) missingFields.push('cheese');
    if (meats.length === 0) missingFields.push('meat toppings');
    if (veggies.length === 0) missingFields.push('vegetable toppings');

    // If there are missing fields, alert the user and prevent form submission
    if (missingFields.length > 0) {
        alert('Please select one for each of the following: ' + missingFields.join(', ') + '.');
        return false;
    }
    // If all fields are filled, return true
    return true;
}

// Add an event listener to the order button to create and describe the pizza order
document.getElementById('order-button').addEventListener('click', function() {
    // Validate the form before creating the pizza
    if (validateForm()) {
        // Get values from the form
        const size = document.getElementById('size').value;
        const crust = document.getElementById('crust').value;
        const sauce = document.querySelector('input[name="sauce"]:checked').value;
        const cheeses = Array.from(document.querySelectorAll('input[name="cheese"]:checked')).map(el => el.value);
        const meats = Array.from(document.querySelectorAll('input[name="meat"]:checked')).map(el => el.value);
        const veggies = Array.from(document.querySelectorAll('input[name="veggie"]:checked')).map(el => el.value);
        const drink = document.getElementById('drink').value;
        const specialInstructions = document.getElementById('comments').value;

        // Create a new pizza object with the form values
        const pizza = new Pizza(size, crust, sauce, cheeses, meats, veggies, drink, specialInstructions);
        // Display the description of the pizza order on the page
        document.getElementById('pizza-output').textContent = pizza.describe();
    }
});
