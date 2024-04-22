// API Docs: https://documenter.getpostman.com/view/1134062/T1LJjU52#2e131a94-a28e-4cfe-95fe-d10c0e40eae7



const axios = require('axios');




async function fetchRandomCity(country) {
  try {
    // Define the payload for the POST request
    const postData = {
      country: country
    };

    // Make a POST request to fetch cities based on the provided country
    const postResponse = await axios.post(
      'https://countriesnow.space/api/v0.1/countries/cities',
      postData
    );

    // Extract the cities data from the POST response
    const citiesData = postResponse.data.data;

    // Pick a random index within the range of the cities array
    const randomIndex = Math.floor(Math.random() * citiesData.length);

    // Get the random city using the random index
    const randomCity = citiesData[randomIndex];

    // Log the random city
    console.log("Random City:", randomCity);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example usage: specify the country as an argument
//fetchRandomCity('Nigeria'); // Change 'Nigeria' to the desired country
