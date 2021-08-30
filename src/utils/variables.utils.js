const isCurrentThemeDark = () => {
    if (typeof window !== 'undefined') {
        const isDarkTheme = localStorage.getItem('dark-theme');
        return isDarkTheme === 'true';
    }
};

const CURRENT_THEME = '#3f51b5 !important';

export { isCurrentThemeDark, CURRENT_THEME };
