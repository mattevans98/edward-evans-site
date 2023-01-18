import { makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles({
    underConstructionBox: {
        border: '2px solid white',
        padding: '1rem',
        margin: '2rem',
        ['@media (min-width:600px)']: {
            padding: '3rem'
        }
    }
});
