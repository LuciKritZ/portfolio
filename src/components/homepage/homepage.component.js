import React from 'react';
import Layout from '../layout/layout.component';
import { Avatar, Box, Button, Grid, Link, Typography } from '@material-ui/core';
import { LinkedIn, GitHub, AlternateEmail, SendOutlined } from '@material-ui/icons';
import useHomepageStyles from './homepage.styles';

const Homepage = () => {
    const classes = useHomepageStyles();
    const links = [
        {
            name: 'GitHub',
            icon: GitHub,
            link: 'https://github.com/LuciKritZ',
        },
        {
            name: 'LinkedIn',
            icon: LinkedIn,
            link: 'https://www.linkedin.com/in/krishal-shah/',
        },
        {
            name: 'Mail',
            icon: AlternateEmail,
            link: 'mailto:krishals.001@gmail.com',
        },
    ];

    return (
        <Grid container className={classes.homepageRoot}>
            <Grid xs={12} className="intro-container">
                <div className="links-container">
                    {links.map((individualLink) => (
                        <Link component="a" href={individualLink.link} target="_blank">
                            {<individualLink.icon className="platform-link" />}
                        </Link>
                    ))}
                </div>
                <div className="info-container">
                    <div className="hello-container">
                        <div className="center-aligned">
                            <Typography className="intro-heading" variant="h2">
                                Hi, I'm Krishal
                            </Typography>
                            <Typography className="intro-designation" variant="subtitle1">
                                Front End Developer
                            </Typography>
                            <Typography className="intro-about-me" variant="body1">
                                Experienced Software Engineer skilled in JavaScript and Python,
                                mainly working on the frontend javascript based technologies like
                                React, Vue and React Native.
                            </Typography>
                            <Button endIcon={<SendOutlined />} className="intro-contact-me-btn">
                                Contact Me
                            </Button>
                        </div>
                    </div>
                    <div className="image-container">
                        <Avatar
                            className="image-avatar"
                            src="https://avatars.githubusercontent.com/u/26204432?v=4"
                        />
                    </div>
                </div>
            </Grid>
            <Grid xs={12} className="about-me-container">
                <Grid xs={12}>About Me</Grid>
                <Grid xs={12}>My Introduction</Grid>
                <Grid xs={12}>
                    <div>Photo</div>
                    <div>Detailed about me</div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Homepage;
