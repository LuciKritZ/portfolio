import React from 'react';
import { Grid, Link } from '@material-ui/core';
import { NightsStay } from '@material-ui/icons';
import { isCurrentThemeDark } from '../../utils/variables.utils';
import useHeaderStyles from './header.styles';
import clsx from 'clsx';

const Header = ({ changeTheme }) => {
    const classes = useHeaderStyles();
    const isDarkTheme = isCurrentThemeDark();

    const generatedClassesAndResources = {
        menuOptions: {
            className: clsx('option-link', isDarkTheme && 'option-link-dark'),
        },
    };

    const menuOptions = [
        {
            title: 'Home',
            id: 'home',
        },
        {
            title: 'About',
            id: 'about',
        },
        {
            title: 'Portfolio',
            id: 'portfolio',
        },
        {
            title: 'Contact Me',
            id: 'contact-me',
        },
        {
            title: '',
            id: 'dark-mode',
            element: (
                <NightsStay
                    onClick={changeTheme}
                    className={isDarkTheme ? 'light-mode-icon' : 'dark-mode-icon'}
                />
            ),
        },
    ];

    return (
        <Grid container className={classes.headerRoot}>
            <div className="header-logo-container">{`<LuciKritZ />`}</div>
            <div className="header-links-container">
                {menuOptions.map((option) => (
                    <Link
                        className={generatedClassesAndResources.menuOptions.className}
                        component="button"
                        variant="body2"
                    >
                        {option.title || option.element}
                    </Link>
                ))}
            </div>
        </Grid>
    );
};

export default Header;
