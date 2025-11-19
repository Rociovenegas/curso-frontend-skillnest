document.addEventListener("DOMContentLoaded", function () {
    // Manos a la masa
    setTimeout(() => {
        console.log("Waited for 1 second");
    }, 1000); // 1000 milliseconds = 1 seconds

    console.log("Manos a la masa");

    function pizzaOven(dough, sauce, cheeses, toppings) {
        return {
            dough: dough,
            sauce: sauce,
            cheeses: cheeses,
            toppings: toppings
        };
    }

    const pizza1 = pizzaOven(
        "estilo Chicago",
        "tradicional",
        ["mozzarella"],
        ["pepperoni", "salchicha"]
    );
    console.log(pizza1);

    const pizza2 = pizzaOven(
        "lanzada a mano",
        "marinara",
        ["mozzarella", "feta"],
        ["champiñones", "aceitunas", "cebollas"]
    );
    console.log(pizza2);


});



