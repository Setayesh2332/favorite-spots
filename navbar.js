export function setupNavbar() {
    return `
        <nav>
            <ul>
                <li><a href="#" id="home-link">Home</a></li>
                <li><a href="#" id="food-link">Food</a></li>
                <li><a href="#" id="nature-link">Nature</a></li>
                <li><a href="#" id="aboutme-link">About Me</a></li>
            </ul>
            <button id="theme-toggle" class="theme-switch">
                <span class="theme-switch-label">Dark mode</span>
                <input type="checkbox" class="theme-switch-checkbox">
                <span class="theme-switch-slider"></span>
            </button>
        </nav>
    `;
}
