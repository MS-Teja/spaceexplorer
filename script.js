// Add click event listeners to the planet, moon, and other object cards
const cards = document.querySelectorAll('.planet, .moon, .solar-system-objects article');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent.trim();
        let nasaURL;

        // Define Wikipedia URLs for each celestial object
        switch (title) {
            case 'Mercury':
                nasaURL = 'https://science.nasa.gov/mercury/';
                break;
            case 'Venus':
                nasaURL = 'https://science.nasa.gov/venus/';
                break;
            case 'Earth':
                nasaURL = 'https://science.nasa.gov/earth/facts/';
                break;
            case 'Mars':
                nasaURL = 'https://science.nasa.gov/mars/';
                break;
            case 'Jupiter':
                nasaURL = 'https://science.nasa.gov/jupiter/';
                break;
            case 'Saturn':
                nasaURL = 'https://science.nasa.gov/saturn/';
                break;
            case 'Uranus':
                nasaURL = 'https://science.nasa.gov/uranus/';
                break;
            case 'Neptune':
                nasaURL = 'https://science.nasa.gov/neptune/';
                break;
            case 'The Moon (Earth)':
                nasaURL = 'https://science.nasa.gov/moon/';
                break;
            case 'Titan (Saturn)':
                nasaURL = 'https://science.nasa.gov/saturn/moons/titan/';
                break;
            case 'Europa (Jupiter)':
                nasaURL = 'https://science.nasa.gov/jupiter/moons/europa/';
                break;
            case 'The Asteroid Belt':
                nasaURL = 'https://science.nasa.gov/solar-system/asteroids/';
                break;
            case 'Comets':
                nasaURL = 'https://science.nasa.gov/solar-system/comets/';
                break;
            case 'The Kuiper Belt':
                nasaURL = 'https://science.nasa.gov/solar-system/kuiper-belt/';
                break;
            default:
                nasaURL = 'https://science.nasa.gov/solar-system/'; // Default to a placeholder URL
        }

        // Redirect to the respective Wikipedia page
        window.location.href = nasaURL;
    });
});
