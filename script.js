// Theme Configurations
const themes = {
    light: {
        // Sincere Blue (Day Mode)
        '--bg-main': '#f8fafc',
        '--bg-card': '#ffffff',
        '--text-main': '#0f172a',
        '--text-muted': '#64748b',
        '--primary': '#0866ff',       // Facebook Blue
        '--primary-light': '#e0f2fe',
        '--accent': '#fbbf24',        // Amber (Yellow)
        '--accent-light': '#fffbeb',
        '--border': '#e2e8f0'
    },
    dark: {
        // Friendly Dark (Night Mode)
        '--bg-main': '#0f172a',       // Slate-900 
        '--bg-card': '#1e293b',       // Slate-800
        '--text-main': '#f1f5f9',     // Slate-100
        '--text-muted': '#94a3b8',    // Slate-400
        '--primary': '#8b5cf6',       // Violet
        '--primary-light': 'rgba(139, 92, 246, 0.2)',
        '--accent': '#34d399',        // Mint Green
        '--accent-light': 'rgba(52, 211, 153, 0.1)',
        '--border': '#334155'
    }
};

let currentMode = 'light';

function toggleTheme() {
    const root = document.documentElement;
    const sunIcon = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');

    // Switch Mode
    currentMode = currentMode === 'light' ? 'dark' : 'light';

    // Apply Colors
    const theme = themes[currentMode];
    for (const [property, value] of Object.entries(theme)) {
        root.style.setProperty(property, value);
    }

    // Animate Icon
    if (currentMode === 'dark') {
        // Show Sun, Hide Moon
        sunIcon.classList.remove('opacity-0', 'rotate-90', 'scale-0');
        sunIcon.classList.add('opacity-100', 'rotate-0', 'scale-100');

        moonIcon.classList.add('opacity-0', '-rotate-90', 'scale-0');
        moonIcon.classList.remove('opacity-100', 'rotate-0', 'scale-100');
    } else {
        // Show Moon, Hide Sun
        moonIcon.classList.remove('opacity-0', '-rotate-90', 'scale-0');
        moonIcon.classList.add('opacity-100', 'rotate-0', 'scale-100');

        sunIcon.classList.add('opacity-0', 'rotate-90', 'scale-0');
        sunIcon.classList.remove('opacity-100', 'rotate-0', 'scale-100');
    }
}

// Initialize
// (Default is light in CSS, so no need to force set unless logic requires)