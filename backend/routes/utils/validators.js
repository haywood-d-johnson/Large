import { handleValidationErrors } from "../../utils/validation";

const validateLogin = [
    check("credential")
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Please provide a valid email or username."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password."),
    handleValidationErrors,
];

const businessValidator = [
    check("title")
        .exists({ checkFalsy: true })
        .withMessage("Please provide the business title.")
        .isLength({ max: 50 })
        .withMessage("Business title should be no more than 50 characters."),
    check("description")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a description of this business."),
    check("address")
        .exists({ checkFalsy: true })
        .withMessage("Please provide the address of this business."),
    check("city")
        .exists({ checkFalsy: true })
        .withMessage("Please provide the city this business is located."),
    check("state")
        .exists({ checkFalsy: true })
        .withMessage("Please provide the state this business is located."),
    check("zip")
        .exists({ checkFalsy: true })
        .withMessage("Please provide the zip code of this business."),
    handleValidationErrors,
];

const validateSignup = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("username")
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage("Please provide a username with at least 4 characters."),
    check("username")
        .not()
        .isEmail()
        .withMessage("Username cannot be an email."),
    check("password")
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage("Password must be 6 characters or more."),
    handleValidationErrors,
];

const reviewValidator = [
    check("rating")
        .exists({ checkFalsy: true })
        .withMessage("Be sure to rate this business"),
    check("answer")
        .exists({ checkFalsy: true })
        .withMessage(
            "We appreciate your feedback. Leave a review about your experience"
        ),
    handleValidationErrors,
];

module.exports = {
    validateLogin,
    businessValidator,
    validateSignup,
    reviewValidator,
};
