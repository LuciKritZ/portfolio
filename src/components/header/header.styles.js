import { makeStyles } from '@material-ui/core';

const useHeaderStyles = makeStyles({
    headerRoot: {
        margin: '15px 0px',
        height: '66px',
        display: 'flex !important',
        alignItems: 'center !important',
        '& .logo-image': {
            height: '50px',
            width: '200px',
        },
        '& .header-links-container': {
            width: 'calc(100% - 200px)',
            display: 'flex !important',
            alignItems: 'center',
            justifyContent: 'flex-end',
            '& .option-link': {
                color: '#2d6b8e !important',
                margin: '0px 0px 0px 25px !important',
                fontSize: '0.875rem !important',
                textDecoration: 'none !important',
                display: 'flex !important',
                justifyContent: 'center !important',
                alignItems: 'center !important',
            },
            '& .option-link-dark': {
                color: '#fff !important',
            },
        },
    },
});

export default useHeaderStyles;
