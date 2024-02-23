const axios = require('axios');
const {
  generateRandomEmail,
  validateName,
  validateDateFormat,
  validateAge,
  validateCountry,
  validatePhoneNumber,
  validateAddress,
  validateGender,
  validateZip,
  validatePassword,
  validateRepeatedPassword,
  validateTerms
} = require('./Validation.cjs');

async function registerUser(payload) {
  const validateField = (field, validator, errorMsg) => {
    if (!validator(field)) {
      throw new Error(errorMsg);
    }
  };

  validateField(payload.firstName, validateName, 'Invalid first name. First name must start with a capital letter and contain only letters.');
  validateField(payload.lastName, validateName, 'Invalid last name. Last name must start with a capital letter and contain only letters.');
  validateField(payload.birthday, validateDateFormat, 'Invalid birthday format.');
  validateField(payload.birthday, validateAge, 'The person must be at least 18 years old.');
  validateField(payload.country, validateCountry, 'Invalid country. Country must start with a capital letter and contain only letters.');
  validateField(payload.phoneNumber, validatePhoneNumber, 'Invalid phone number. Phone number must contain only digits and have at least 9 digits.');
  validateField(payload.address, validateAddress, 'Invalid address format. Address must contain letters, spaces, and end with a number.');
  validateField(payload.gender, validateGender, 'Invalid gender. Gender must be "female", "male", or "other".');
  validateField(payload.zip, validateZip, 'Invalid zip code. Zip code must be a combination of 5 digits.');
  validateField(payload.plainPassword, validatePassword, 'Invalid password. Password must contain at least 8 characters, at least one uppercase letter, and at least one special character.');
  if (!validateRepeatedPassword(payload.plainPassword, payload.repeatPassword)) {
    throw new Error('Passwords do not match.');
  }
  validateField(payload.terms, validateTerms, 'Terms must be accepted.');

  try {
    const response = await axios.post('https://qa-task-api.locastic.com/api/register', payload);
    return response.data;
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
}

// Testiranje funkcije
const payload = {
  email: generateRandomEmail(),
  firstName: 'Leona',
  lastName: 'Kusanovic',
  birthday: '1995-02-20T23:00:00+01:00',
  country: 'Croatia',
  phoneNumber: '0955783064',
  address: 'Split 3',
  gender: 'female',
  zip: '21000',
  plainPassword: 'Split123!',
  repeatPassword: 'Split123!',
  terms: true
};

registerUser(payload)
  .then(data => {
    console.log('User registered successfully:', data);
  })
  .catch(error => {
    console.error('Error registering user:', error);
  });


