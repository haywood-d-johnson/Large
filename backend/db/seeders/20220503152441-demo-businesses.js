"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Businesses",
            [
                {
                    userId: 1,
                    title: "Franklin Ave Mac House",
                    description: "Comfort eats.",
                    address: "3428 Franklin Ave.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76710,
                    lat: 31.56911793159148,
                    lng: -97.11934940187948,
                },
                {
                    userId: 2,
                    title: "Tru Jamaica Restaurant",
                    description:
                        "Tru Jamaica is the home of Jamaican food in the Waco area.",
                    address: "937 Taylor St.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76704,
                    lat: 31.531741010383733,
                    lng: -97.15813007304372,
                },
                {
                    userId: 5,
                    title: "Po' Boy Place",
                    description:
                        "New Orleans style primo sandwiches and sides.",
                    address: "720 Franklin Ave.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76710,
                    lat: 31.553899803031275,
                    lng: -97.1329173865342,
                },
                {
                    userId: 3,
                    title: "Oh My Juice!",
                    description: "Making Healthy Food Taste Good.",
                    address: "201 S. Second St.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76701,
                    lat: 31.5580259776792,
                    lng: -97.12749893071607,
                },
                {
                    userId: 2,
                    title: "R&S BBQ",
                    description: "Premium quality smoked slow & low.",
                    address: "1101 Richland Dr.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76710,
                    lat: 31.529646449971334,
                    lng: -97.19229520188011,
                },
                {
                    userId: 4,
                    title: "Mo Cookies",
                    description:
                        "We bake cookies the old fashion way, by hand and in small batches. We use real butter, cane sugar and lots of love.",
                    address: "914 Lake Air Dr Ste G.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76710,
                    lat: 31.52979161477497,
                    lng: -97.18716251537097,
                },
                {
                    userId: 1,
                    title: "Whodaq? Daiquiris",
                    description:
                        "Authentic New Orleans Style Daiquiris and Cuisine here in the DFW. Po-boys, Gumbo, Elmer's Cheewees and Big Shot soda and a more...",
                    address: "921 S 9th St Ste 310.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76706,
                    lat: 31.546603890308727,
                    lng: -97.12728401722546,
                },
                {
                    userId: 4,
                    title: "The Eatery",
                    description:
                        "The Eatery is a taste of good old southern cuisine. We take pride in doing it the way grandma did it. We Take the time to make sure we only serve the best.",
                    address: "821 Clifton St.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76704,
                    lat: 31.58028798959026,
                    lng: -97.12023592876888,
                },
                {
                    userId: 4,
                    title: "Papa Jack's BBQ",
                    description:
                        "Unpretentious outpost furnishing grilled meats by the pound along with BBQ plates & sides.",
                    address: "700 E Waco Dr suite A.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76704,
                    lat: 31.571221984929533,
                    lng: -97.12886848653388,
                },
                {
                    userId: 1,
                    title: "Dos Mundos Spud Shack",
                    description:
                        "Dos Mundos also translated in English as Two Worlds. Our Family owned business brings a combination of American & Mexican Style Spuds to life.",
                    address: "2515 Clay Ave.",
                    city: "Waco",
                    state: "Texas",
                    zip: 76706,
                    lat: 31.536618022314173,
                    lng: -97.14563308467977,
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
