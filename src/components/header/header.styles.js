import { makeStyles } from '@material-ui/core';
import { CURRENT_THEME } from '../../utils/variables.utils';

const useHeaderStyles = makeStyles({
    headerRoot: {
        fontFamily: '"Source Sans Pro", sans-serif',
        margin: '15px 0px',
        height: '66px',
        display: 'flex !important',
        alignItems: 'center !important',
        '& .logo-image': {
            height: '50px',
            width: '200px',
        },
        '& .header-logo-container': {
            width: '200px',
            fontSize: '1.875rem',
            fontWeight: 'bolder',
        },
        '& .header-links-container': {
            width: 'calc(100% - 200px)',
            display: 'flex !important',
            alignItems: 'center',
            justifyContent: 'flex-end',
            '& .option-link': {
                color: '#000 !important',
                margin: '0px 0px 0px 25px !important',
                fontSize: '1rem !important',
                textDecoration: 'none !important',
                display: 'flex !important',
                justifyContent: 'center !important',
                alignItems: 'center !important',
                '&:hover': {
                    color: CURRENT_THEME,
                },
            },
            '& .option-link-dark': {
                color: '#fff !important',
            },
        },
    },
});

export default useHeaderStyles;
