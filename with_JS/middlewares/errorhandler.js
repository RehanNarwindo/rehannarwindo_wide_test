const errorHandler = (err, req, res, next) => {
    let status = 500;
    let message = "Internal Server Error";

    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        status = 400;
        message = err.errors[0].message;
    } else if (err.name === "NameRequired") {
        status = 400;
        message = "Name is required";
    } else if (err.name === "PasswordRequired") {
        status = 400;
        message = "Password is required";
    } else if (err.name === "NameOrPasswordInvalid") {
        status = 401;
        message = "Invalid Name/password";
    } else if (err.name === "InvalidToken") {
        status = 401;
        message = "Invalid token";
    } else if (err.name === "ProductNotFound") {
        status = 404;
        message = "Product not found";
    } else if (err.name === "ProductIdRequired") {
        status = 400;
        message = "ProductId is required";
    }
    res.status(status).json({ message });
};

module.exports = errorHandler;
