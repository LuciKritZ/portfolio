import { makeStyles } from '@material-ui/core';
import { CURRENT_THEME } from '../../utils/variables.utils';

const useHomepageStyles = makeStyles({
    homepageRoot: {
        width: '100%',
        '& .intro-container': {
            minHeight: '680px !important',
            display: 'flex !important',
            width: '100%',
            '& .links-container': {
                display: 'flex !important',
                margin: '0px auto',
                flexDirection: 'column !important',
                alignItems: 'flex-start',
                height: '100%',
                justifyContent: 'center',
                width: '15%',
                '& .platform-link': {
                    margin: '15px 0px !important',
                    fontSize: '1.5rem !important',
                    cursor: 'pointer',
                },
            },
            '& .info-container': {
                width: '85%',
                display: 'flex',
                '& .hello-container, & .image-container': {
                    width: '50% !important',
                },
                '& .hello-container': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    '& .intro-heading': {
                        fontWeight: 'bold',
                        fontSize: '5rem',
                        margin: '10px 0px',
                    },
                    '& .intro-designation': {
                        fontSize: '1.5rem',
                        color: '#757575',
                        margin: '10px 0px',
                        fontWeight: 'bold',
                    },
                    '& .intro-about-me': {
                        margin: '10px 0px',
                        color: '#757575',
                    },
                    '& .intro-contact-me-btn': {
                        margin: '30px 0px',
                        background: CURRENT_THEME,
                        padding: '15px',
                        color: '#fff',
                    },
                },
                '& .image-container': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& .image-avatar': {
                        width: '350px',
                        height: '350px',
                    },
                },
            },
        },
    },
});

export default useHomepageStyles;
