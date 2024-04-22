import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index'
import Select from 'react-select'

export default function Country(){
    const [cities, setcities] = useState([]);
    const [countryName, setCountryName] = useState('');

    const countryOptions = [
      { value: 'Aboriginal', label: 'Aboriginal' },
      { value: 'African', label: 'African' },
      { value: 'Albanian', label: 'Albanian' },
      { value: 'American', label: 'American' },
      { value: 'Arabic', label: 'Arabic' },
      { value: 'Aramaic', label: 'Aramaic' },
      { value: 'Armenian', label: 'Armenian' },
      { value: 'Aztec', label: 'Aztec' },
      { value: 'Basque', label: 'Basque' },
      { value: 'Bulgarian', label: 'Bulgarian' },
      { value: 'Cambodian', label: 'Cambodian' },
      { value: 'Chinese', label: 'Chinese' },
      { value: 'Dutch', label: 'Dutch' },
      { value: 'Egyptian', label: 'Egyptian' },
      { value: 'English', label: 'English' },
      { value: 'Estonian', label: 'Estonian' },
      { value: 'Filipino', label: 'Filipino' },
      { value: 'French', label: 'French' },
      { value: 'German', label: 'German' },
      { value: 'Greek', label: 'Greek' },
      { value: 'Haitian', label: 'Haitian' },
      { value: 'Hawaiian', label: 'Hawaiian' },
      { value: 'Hebrew', label: 'Hebrew' },
      { value: 'Hungarian', label: 'Hungarian' },
      { value: 'Incan', label: 'Incan' },
      { value: 'Indian', label: 'Indian' },
      { value: 'Indonesian', label: 'Indonesian' },
      { value: 'Irish', label: 'Irish' },
      { value: 'Italian', label: 'Italian' },
      { value: 'Japonese', label: 'Japonese' },
      { value: 'Korean', label: 'Korean' },
      { value: 'Latin', label: 'Latin' },
      { value: 'Lithuanian', label: 'Lithuanian' },
      { value: 'Malaysian', label: 'Malaysian' },
      { value: 'Maori', label: 'Maori' },
      { value: 'Mongolian', label: 'Mongolian' },
      { value: 'Native American', label: 'Native American' },
      { value: 'Malaysian', label: 'Malaysian' },
      { value: 'Persian', label: 'Persian' },
      { value: 'Polish', label: 'Polish' },
      { value: 'Polynesian', label: 'Polynesian' },
      { value: 'Portuguese', label: 'Portuguese' },
      { value: 'Romanian', label: 'Romanian' },
      { value: 'Romansh', label: 'Romansh' },
      { value: 'Russian', label: 'Russian' },
      { value: 'Scandinavian', label: 'Scandinavian' },
      { value: 'Slavic', label: 'Slavic' },
      { value: 'Scottish', label: 'Scottish' },
      { value: 'Spanish', label: 'Spanish' },
      { value: 'Swahili', label: 'Swahili' },
      { value: 'Thai', label: 'Thai' },
      { value: 'Turkish', label: 'Turkish' },
      { value: 'Vietnamese', label: 'Vietnamese' },
      { value: 'Welsh', label: 'Welsh' },
    ];
    
    const handleStoringCountryName = (selectedOption) => {
      if (selectedOption) {
        setCountryName(selectedOption.value);
      }
    };
  
    const getCountries = async () => {
      try {
        const postResponse = await axios.post(
          'https://countriesnow.space/api/v0.1/countries/cities',
          { country: countryName }
        );
        const response = postResponse.data;
        if (response && response.data) {
          setcities(response.data);
        }
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
  
    useEffect(() => {
      if (countryName) {
        getCountries();
      }
    }, [countryName]);
  
    return (
      <div>
        <Select options={countryOptions} onChange={handleStoringCountryName} />
        <button onClick={getCountries}>Get Cities</button>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
    );
  }