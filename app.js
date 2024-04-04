/**
 * Added API for https://random-name-and-gender-generator.p.rapidapi.com/
 * 
 * Inputs:
 * Gender
 * 
 * Outputs
 * First Name
 * Last Name 
 * 
 */
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://random-name-and-gender-generator.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'c7b1e7049fmshbb9e2a30a0241d7p17f765jsn8a681bb98066',
    'X-RapidAPI-Host': 'random-name-and-gender-generator.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}