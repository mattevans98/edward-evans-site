import { makeStyles } from '@material-ui/core/styles';
import colors from "../colors";

export const useHomeStyles = makeStyles({
    underConstructionBox: {
        border: `2px solid ${ colors.accents.primary }`,
        padding: '1rem',
        margin: '2rem',
        ['@media (min-width:600px)']: {
            padding: '3rem'
        }
    }
});
