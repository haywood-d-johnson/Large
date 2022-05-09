const express = require("express");
const asyncHandler = require("express-async-handler");

// reviews needed for business by reviews?
const { Business, Review } = require("../../db/models");
const { businessValidator, reviewValidator } = require("../utils/validators");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const businesses = await Business.findAll();
        return res.json({
            businesses,
        });
    })
);

router.get(
    "/:id(\\d+)",
    asyncHandler(async (req, res) => {
        const id = parseInt(req.params.id, 10);
        const business = await Business.findByPk(id);

        return res.json({
            business,
        });
    })
);

router.post(
    "/",
    businessValidator,
    asyncHandler(async (req, res, next) => {
        const { userId, title, description, address, city, state, zip } =
            req.body;
        const newBusiness = {
            userId,
            title,
            description,
            address,
            city,
            state,
            zip,
            lat: 0,
            lng: 0,
        };
        let business = null;
        const check = await Business.findOne({
            where: {
                address: req.body.address,
            },
        });

        // the only constant
        if (check) {
            const err = new Error("Update failed");
            err.status = 401;
            err.title = "Update failed";
            err.errors = ["The adress provided already exists."];
            return next(err);
        } else {
            business = await Business.create(newBusiness);

            if (!business) {
                const err = new Error("Sign Up failed");
                err.status = 401;
                err.title = "Failed";
                err.errors = ["There was a problem. Please try again."];
                return next(err);
            }
        }

        return res.json({
            business,
        });
    })
);

router.patch("/:id(\\d+)", businessValidator, async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    try {
        const business = await Business.findByPk(id);

        business.description = req.body.description;
        business.address = req.body.address;
        business.city = req.body.city;
        business.state = req.body.state;
        business.zip = req.body.zip;

        await business.save();

        return true;
    } catch (error) {
        res.json({ message: "There was a problem. Please try again." });
    }
});

router.delete("/:id(\\d+)", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const business = await Business.findByPk(id);

    if (business) {
        await business.destroy();
    } else {
        errors.push("Business not found");
    }
});

module.exports = router;
