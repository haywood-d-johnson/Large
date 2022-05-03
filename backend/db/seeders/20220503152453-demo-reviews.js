"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Reviews",
            [
                {
                    userId: 3,
                    businessId: 2,
                    rating: 5,
                    answer: "Amazing food and a pleasant Cultural immersion / experience located just 5 minutes from the heart of (Downtown) Waco.",
                },
                {
                    userId: 1,
                    businessId: 2,
                    rating: 5,
                    answer: "This was a nice experience. I will say, this is a nice place to come to if you'd like to try Jamaican flavors.",
                },
                {
                    userId: 2,
                    businessId: 6,
                    rating: 5,
                    answer: "Locally owned business, great people, and the cookies we tried were SO delicious! Also, the strawberry lemonade is the best ever. Seriously.",
                },
                {
                    userId: 5,
                    businessId: 6,
                    rating: 4,
                    answer: "Soft, moist, tender cookies!! I got an espresso chocolate chip cookie and one called Oh Lord!",
                },
                {
                    userId: 4,
                    businessId: 5,
                    rating: 5,
                    answer: "Back for more and they continue to knock it out of the park. Since last review I have had ribs, turkey sandwich, chili beans and cowboy pack. Everything is delicious, well priced and comes out quick.",
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
