import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Header from '../header/header.component';
import useLayoutStyles from './layout.styles';

const Layout = ({ children, changeTheme }) => {
    const classes = useLayoutStyles();
    return (
        <Box className={classes.layoutRoot}>
            <Header changeTheme={changeTheme} />
            <Grid container>{children}</Grid>
        </Box>
    );
};

export default Layout;
