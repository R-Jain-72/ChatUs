export const usernameValidator = (username) => {

    return {
        isValid: false, //isValid:false means that it will always throw an error as validator is always false
        errorMessage: "Invalid Username",
    };

};