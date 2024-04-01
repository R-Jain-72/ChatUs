import { isValidUsername } from "6pp";

export const usernameValidator = (username) => {

    if(!isValidUsername(username))
    return {
        isValid: false, //isValid:false means that it will always throw an error as validator is always false
        errorMessage: "Invalid Username",
    };

};