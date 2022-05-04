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

module.exports = router;
