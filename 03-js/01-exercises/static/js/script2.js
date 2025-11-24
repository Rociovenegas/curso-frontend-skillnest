/**
 * Pizza Oven Exercise - Hands-on Practice
 * This script demonstrates object creation and manipulation in JavaScript
 */

document.addEventListener("DOMContentLoaded", function () {
    // Asynchronous operation: Wait for 1 second and log a message
    setTimeout(() => {
        console.log("Waited for 1 second");
    }, 1000); // 1000 milliseconds = 1 second

    console.log("Hands-on Practice");

    /**
     * Pizza Oven Function
     * Creates a pizza object with the specified ingredients
     * @param {string} dough - Type of dough used for the pizza
     * @param {string} sauce - Type of sauce used
     * @param {array} cheeses - Array of cheese types
     * @param {array} toppings - Array of pizza toppings
     * @returns {object} Pizza object with all ingredients
     */
    function pizzaOven(dough, sauce, cheeses, toppings) {
        return {
            dough: dough,
            sauce: sauce,
            cheeses: cheeses,
            toppings: toppings
        };
    }

    // Pizza 1: Chicago style with pepperoni and sausage
    const pizza1 = pizzaOven(
        "Chicago style",
        "traditional",
        ["mozzarella"],
        ["pepperoni", "sausage"]
    );
    console.log(pizza1);

    // Pizza 2: Hand-tossed with marinara sauce and vegetables
    const pizza2 = pizzaOven(
        "hand-tossed",
        "marinara",
        ["mozzarella", "feta"],
        ["mushrooms", "olives", "onions"]
    );
    console.log(pizza2);


});



