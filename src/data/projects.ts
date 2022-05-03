import mathDepartmentLogo from '../components/logos/mathdepartment.png';
import bankOfReactLogo from '../components/logos/bankofreact.png';
import pokemonSearchLogo from '../components/logos/pokemonsearch.png';

const projects = [
    {
        id: 'mathdept',
        name: 'Hunter College Math Department',
        logo: mathDepartmentLogo,
        description: 'A better looking website for the Hunter Mathematics and Statistics Department.',
        skills: ['React', 'TypeScript', 'React-Router'],
        liveLink: 'https://seamus2002.github.io/math-department',
        repoLink: 'https://github.com/seamus2002/math-department'
    },
    {
        id: 'bankofreact',
        name: 'Bank of React',
        logo: bankOfReactLogo,
        description: 'A basic banking user interface that uses an API to display sample debits and credits. Also has a customize feature to change text and background.',
        skills: ['React', 'APIs', 'JavaScript'],
        liveLink: 'https://seamus2002.github.io/bank-of-react',
        repoLink: 'https://github.com/seamus2002/bank-of-react'
    },
    {
        id: 'pokemonsearch',
        name: 'Pokémon Search',
        logo: pokemonSearchLogo,
        description: 'Allows the user to search up facts about Pokémon. This site fetches data from the PokéAPI using a JavaScript library called Axios.',
        skills: ['APIs', 'Axios', 'React'],
        liveLink: 'https://seamus2002.github.io/pokemon-search/',
        repoLink: 'https://github.com/seamus2002/pokemon-search'
    }
];

export default projects;