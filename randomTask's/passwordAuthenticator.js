/**
 * 
 * @param {string} str 
 * @returns 
 */



function password(str) {
    const password = str;
    let upperCase = false;
    let lowerCase = false;
    let number = false;
    let length = false;
    if (password.length >= 8) {
        length = true;
        for (let i = 0; i < password.length; i++) {
            let charCode = password[i].charCodeAt();
            if (97 <= charCode && charCode <= 122) {
                lowerCase = true;
            }
            if (65 <= charCode && charCode <= 90) {
                upperCase = true;
            }
            if (!isNaN(Number(password[i]))) {
                number = true;
            }
        }
    }


    if (upperCase && lowerCase && number && length) {
        return true;
    } else {
        return false;
    }
}


console.log(password("abcd1234"))