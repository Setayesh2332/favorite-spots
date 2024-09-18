document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeLabel = themeToggle.querySelector('.theme-switch-label');

    function toggleTheme() {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update the label text to represent the current mode
        themeLabel.textContent = newTheme.charAt(0).toUpperCase() + newTheme.slice(1) + " mode";
    }

    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const root = document.documentElement;
        root.setAttribute('data-theme', savedTheme);

        const checkbox = themeToggle.querySelector('.theme-switch-checkbox');
        checkbox.checked = savedTheme === 'dark';

        // Set the initial label text to represent the current mode
        themeLabel.textContent = savedTheme.charAt(0).toUpperCase() + savedTheme.slice(1) + " mode";
    }

    applySavedTheme();

    themeToggle.addEventListener('click', function() {
        const checkbox = this.querySelector('.theme-switch-checkbox');
        checkbox.checked = !checkbox.checked;
        toggleTheme();
    });
});
