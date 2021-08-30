import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../src/components/layout/layout.component';
import { createTheme } from '@material-ui/core';

export default function MyApp(props) {
    const { Component, pageProps } = props;
    const [darkTheme, setDarkTheme] = useState(
        createTheme({
            palette: {
                type: 'light',
            },
        }),
    );

    //
    const onChange = (type = 'light') => {
        setDarkTheme(
            createTheme({
                palette: {
                    type,
                },
            }),
        );
    };

    const changeTheme = () => {
        if (typeof window !== 'undefined') {
            const darkTheme = localStorage.getItem('dark-theme');
            const darkThemeType = darkTheme === 'true' ? 'false' : 'true';
            const currentPalletType = darkTheme === 'false' ? 'dark' : 'light';
            localStorage.setItem('dark-theme', darkThemeType);
            onChange(currentPalletType);
        }
    };

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
        if (typeof window !== 'undefined') {
            const isDarkTheme = localStorage.getItem('dark-theme');
            const currentPalletType = isDarkTheme === 'true' ? 'dark' : 'light';
            onChange(currentPalletType);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Krishal Shah</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,300&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ThemeProvider theme={darkTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Layout changeTheme={changeTheme}>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
