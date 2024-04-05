// Function to fetch profile based on the dynamic location and gender
function fetchProfile() {
    let location = document.getElementById('Location.name').value.toLowerCase(); // Get the value from the location input field and convert to lowercase
    
    /* If we add a gender button
    let gender = document.querySelector('input[name="gender"]:checked'); // Get the selected gender radio button
  
    if (!gender) {
      console.log('Please select a gender.'); // Handle case where no gender is selected
      return;
    }
    let selectedGender = gender.value; // Get the value of the selected gender
    */

    let apiLocations = ["random", "arabic-jordan", "bulgarian-bulgaria", "bengali-bangladesh", 
    "czech-czech-republic", "danish-denmark", "german-austria", "german_germany","greek-greece",
    "english-australia", "english-canada", "english-united-kingdom", "english-new-zealand", 
    "english-philippines","english-uganda", "english-united-states", "english-south-africa",
    "spanish-argentina", "spanish-spain", "spanish-peru", "spanish-venezuela", "persian-Iran", 
    "finnish-finland","french-belgium", "french-canada", "french-france", "hungarian-hungary", 
    "armenian-armenia","indonesian-indonesia", "icelandic-iceland","italian-italy", "japanese-japan",
    "georgian-georgia", "kazakh-kazakhstan", "korean-south-korea", "latvian-latvia", "montenegro-montenegrin",
    "nepali-nepal", "dutch-belgium", "dutch-netherlands", "norwegian-norway", "polish-poland",
    "portuguese-brazil", "portuguese-portugal", "romanian-moldova", "romanian-romania", "russian-russia",
    "slovak-slovakia", "slovenian-slovenia", "serbian-cyrillic-serbia", "serbian-latin-serbia", "serbian-serbia",
    "swedish-sweden","turkish-turkey", "ukrainian-ukraine", "vietnamese-vietnam", "chinese-china", "chinese-taiwan"];
  
    let foundLocation = apiLocations.find(location => location.includes(location));
    if (foundLocation == null) {
      console.log('Country not supported');
      foundLocation = "random"; // Set to a default location
    }
  
    let url = 'https://api.namefake.com/' + foundLocation + '/random'; //+gender
  
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
  
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.firstname));
        // Handle the response as needed (e.g., display the profile details on the page)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  