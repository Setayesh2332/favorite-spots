import './style.css';
import { setupNavbar } from './navbar.js';
import { setupHome } from './home.js';
import { setupFood } from './food.js';
import { setupNature } from './nature.js';
import { setupAboutMe } from './aboutme.js';
import { setupFooter } from './footer.js';

// Function to render the content based on selection
function renderContent(content) {
    document.querySelector('#content').innerHTML = content;

    // Initialize dropdown functionality for food section
    if (document.querySelector('.dropdown-button')) {
        document.querySelectorAll('.dropdown-button').forEach(button => {
            button.addEventListener('click', () => {
                const dropdown = button.parentElement;
                dropdown.classList.toggle('active');
            });
        });
    }
}

// Initial page setup
document.querySelector('#app').innerHTML = `
    ${setupNavbar()}
    <div id="content">
        ${setupHome()}
    </div>
    ${setupFooter()}
`;

// Event listeners for navigation links
document.getElementById('home-link').addEventListener('click', () => renderContent(setupHome()));
document.getElementById('food-link').addEventListener('click', () => renderContent(setupFood()));
document.getElementById('nature-link').addEventListener('click', () => renderContent(setupNature()));
document.getElementById('aboutme-link').addEventListener('click', () => renderContent(setupAboutMe()));
