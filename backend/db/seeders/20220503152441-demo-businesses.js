"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Businesses",
            [
                {
                    name: "Franklin Ave Mac House",
                    description: "Comfort eats.",
                    address: "3428 Franklin Ave.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76710,
                    userId: 1,
                },
                {
                    name: "Tru Jamaica Restaurant",
                    description:
                        "Tru Jamaica is the home of Jamaican food in the Waco area.",
                    address: "937 Taylor St.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76704,
                    userId: 2,
                },
                {
                    name: "Po' Boy Place",
                    description:
                        "New Orleans style primo sandwiches and sides.",
                    address: "720 Franklin Ave.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76710,
                    userId: 5,
                },
                {
                    name: "Oh My Juice!",
                    description: "Making Healthy Food Taste Good.",
                    address: "201 S. Second St.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76701,
                    userId: 3,
                },
                {
                    name: "R&S BBQ",
                    description: "Premium quality smoked slow & low.",
                    address: "1101 Richland Dr.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76710,
                    userId: 2,
                },
                {
                    name: "Mo Cookies",
                    description:
                        "We bake cookies the old fashion way, by hand and in small batches. We use real butter, cane sugar and lots of love.",
                    address: "914 Lake Air Dr Ste G.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76710,
                    userId: 2,
                },
                {
                    name: "Whodaq? Daiquiris",
                    description:
                        "Authentic New Orleans Style Daiquiris and Cuisine here in the DFW. Po-boys, Gumbo, Elmer's Cheewees and Big Shot soda and a more...",
                    address: "921 S 9th St Ste 310.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76706,
                    userId: 1,
                },
                {
                    name: "The Eatery",
                    description:
                        "The Eatery is a taste of good old southern cuisine. We take pride in doing it the way grandma did it. We Take the time to make sure we only serve the best.",
                    address: "821 Clifton St.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76704,
                    userId: 4,
                },
                {
                    name: "Papa Jack's BBQ",
                    description:
                        "Unpretentious outpost furnishing grilled meats by the pound along with BBQ plates & sides.",
                    address: "700 E Waco Dr suite A.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76704,
                    userId: 4,
                },
                {
                    name: "Dos Mundos Spud Shack",
                    description:
                        "Dos Mundos also translated in English as Two Worlds. Our Family owned business brings a combination of American & Mexican Style Spuds to life.",
                    address: "2515 Clay Ave.",
                    city: "Waco",
                    state: "Texas",
                    zip_code: 76706,
                    userId: 1,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    },
};
