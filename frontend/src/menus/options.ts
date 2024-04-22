//https://react-select.com/home


export interface CountryOption {
    readonly value: string;
    readonly label: string;
  }
export const country: readonly CountryOption[] = [
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

export interface GenderOption{
    readonly value: string;
    readonly label: string;
  }

export const Genders: readonly GenderOption[] = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'all', label: 'All' },
];

export interface LetterOption{
    readonly value: string;
    readonly label: string;
}

export const letters: readonly LetterOption[] = [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
    { value: 'd', label: 'D' },
    { value: 'e', label: 'E' },
    { value: 'f', label: 'F' },
    { value: 'g', label: 'G' },
    { value: 'h', label: 'H' },
    { value: 'i', label: 'I' },
    { value: 'j', label: 'J' },
    { value: 'k', label: 'K' },
    { value: 'l', label: 'L' },
    { value: 'm', label: 'M' },
    { value: 'n', label: 'N' },
    { value: 'o', label: 'O' },
    { value: 'p', label: 'P' },
    { value: 'q', label: 'Q' },
    { value: 'r', label: 'R' },
    { value: 's', label: 'S' },
    { value: 't', label: 'T' },
    { value: 'u', label: 'U' },
    { value: 'v', label: 'V' },
    { value: 'w', label: 'W' },
    { value: 'x', label: 'X' },
    { value: 'y', label: 'Y' },
    { value: 'z', label: 'Z' },
];
