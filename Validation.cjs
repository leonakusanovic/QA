function generateRandomEmail() {
    const randomNumber = Math.floor(Math.random() * 999) + 1;
    return `mail${randomNumber}@email.com`;
}

function validateName(name) {
    const regex = /^[A-Z][a-zA-Z]*$/;
    return regex.test(name);
}

function validateDateFormat(birthday) {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2}$/;
    return regex.test(birthday);
}

function validateAge(birthday) {
    const birthdayDate = new Date(birthday);
    const today = new Date();
    const age = today.getFullYear() - birthdayDate.getFullYear();
    const monthDiff = today.getMonth() - birthdayDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age >= 18;
}

function validateCountry(country) {
    const regex = /^[A-Z][a-zA-Z]*$/;
    return regex.test(country);
}

function validatePhoneNumber(phoneNumber) {
    const regex = /^\d{9,}$/;
    return regex.test(phoneNumber);
}

function validateAddress(address) {
    const regex = /^[a-zA-Z\s]+ \d+$/;
    return regex.test(address);
}

function validateGender(gender) {
    return ['female', 'male', 'other'].includes(gender);
}

function validateZip(zip) {
    const regex = /^\d{5}$/;
    return regex.test(zip);
}

function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

function validateRepeatedPassword(password, repeatedPassword) {
    return password === repeatedPassword;
}

function validateTerms(terms) {
    return terms === true;
}

module.exports = {
    generateRandomEmail: generateRandomEmail,
    validateName: validateName,
    validateDateFormat: validateDateFormat,
    validateAge: validateAge,
    validateCountry: validateCountry,
    validatePhoneNumber: validatePhoneNumber,
    validateAddress: validateAddress,
    validateGender: validateGender,
    validateZip: validateZip,
    validatePassword: validatePassword,
    validateRepeatedPassword: validateRepeatedPassword,
    validateTerms: validateTerms
};
