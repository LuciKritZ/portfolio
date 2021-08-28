const isCurrentThemeDark = () => {
    if (typeof window !== 'undefined') {
        const isDarkTheme = localStorage.getItem('dark-theme');
        return isDarkTheme === 'true';
    }
};

export { isCurrentThemeDark };
