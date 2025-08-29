import React from 'react'

function DarkModeToggoler() {
    // Helper to get initial theme from localStorage or system
    const getInitialTheme = () => {
        // Check localStorage first
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') return true;
        if (stored === 'light') return false;
        // Fallback to system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const [isDark, setIsDark] = React.useState(getInitialTheme);

    // On mount, sync the DOM and state with the correct theme
    React.useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDark]);

    // Listen to storage/theme changes (for multi-tab sync)
    React.useEffect(() => {
        const handler = () => {
            // Re-read from localStorage
            const stored = localStorage.getItem('theme');
            if (stored === 'dark') setIsDark(true);
            else if (stored === 'light') setIsDark(false);
            else setIsDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
        };
        window.addEventListener('storage', handler);
        return () => window.removeEventListener('storage', handler);
    }, []);

    const handleToggle = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button
            style={{
                background: isDark
                    ? 'linear-gradient(135deg, #23272f 60%, #7c3aed 100%)'
                    : 'linear-gradient(135deg, #faf9fc 60%, #a78bfa 100%)',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                // margin: '0 1rem',
                padding: 0,
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isDark
                    ? '0 2px 8px rgba(124,58,237,0.18)'
                    : '0 2px 8px rgba(124,58,237,0.10)',
                transition: 'background 0.25s, box-shadow 0.25s, transform 0.18s',
                outline: 'none',
                position: 'relative'
            }}
            aria-label="Toggle dark mode"
            onClick={handleToggle}
            onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.boxShadow = isDark
                    ? '0 4px 16px rgba(124,58,237,0.28)'
                    : '0 4px 16px rgba(124,58,237,0.18)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = isDark
                    ? '0 2px 8px rgba(124,58,237,0.18)'
                    : '0 2px 8px rgba(124,58,237,0.10)';
            }}
        >
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24 }}>
                {/* Sun icon (show when not dark) */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isDark ? "#a78bfa" : "#7c3aed"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        display: isDark ? 'none' : 'block',
                        filter: isDark ? 'none' : 'drop-shadow(0 1px 2px #a78bfa33)'
                    }}
                >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2" />
                    <path d="M12 21v2" />
                    <path d="M4.22 4.22l1.42 1.42" />
                    <path d="M18.36 18.36l1.42 1.42" />
                    <path d="M1 12h2" />
                    <path d="M21 12h2" />
                    <path d="M4.22 19.78l1.42-1.42" />
                    <path d="M18.36 5.64l1.42-1.42" />
                </svg>
                {/* Moon icon (show when dark) */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isDark ? "#a78bfa" : "#7c3aed"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        display: isDark ? 'block' : 'none',
                        filter: isDark ? 'drop-shadow(0 1px 2px #7c3aed33)' : 'none'
                    }}
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
                </svg>
            </span>
        </button>
    );
}

export default DarkModeToggoler