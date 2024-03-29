import { makeStyles } from '@material-ui/core/styles';
import { colors } from './colors';

export const useStyles = makeStyles({
    rootContainer: {
        background: colors.background.primary,
        color: colors.text.primary,
        minHeight: '100vh',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
});
