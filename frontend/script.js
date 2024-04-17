document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('nameForm');
    const resultDiv = document.getElementById('result');
    const babyNamePara = document.getElementById('babyName');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        
        const yourName = document.getElementById('yourName').value.trim();
        const partnerName = document.getElementById('partnerName').value.trim();
        const location = document.getElementById('location').value.trim();

        if (yourName === '' || partnerName === '' || location === '') {
            alert('Please fill in all fields.'); // Display an alert if any field is empty
            return;
        }

        // Call the function to fetch suggested baby name
        getSuggestedBabyName(yourName, partnerName, location);
    });

    async function getSuggestedBabyName(yourName, partnerName, location) {
        const url = `https://api.example.com/suggest-name?yourName=${yourName}&partnerName=${partnerName}&location=${location}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                const suggestedName = data.suggestedName;
                displaySuggestedName(suggestedName);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            alert('An error occurred while fetching data: ' + error.message);
        }
    }

    function displaySuggestedName(name) {
        babyNamePara.textContent = name;
        resultDiv.style.display = 'block'; // Show the result section
    }
});
