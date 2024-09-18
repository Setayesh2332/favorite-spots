document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const checkbox = this.querySelector('.theme-switch-checkbox');
            checkbox.checked = !checkbox.checked;
            toggleTheme(); // Call the existing function to handle theme toggling
        });
    }

    function toggleTheme() {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const root = document.documentElement;
        root.setAttribute('data-theme', savedTheme);

        const checkbox = document.querySelector('.theme-switch-checkbox');
        if (checkbox) {
            checkbox.checked = savedTheme === 'dark';
        }
    }

    applySavedTheme();
});
