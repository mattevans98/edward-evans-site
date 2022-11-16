import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../colors';

export const useNavStyles = makeStyles({
    navMenuLink: {
        color: colors.text.primary,
        textDecoration: 'none'
    },
    navAppBar: {
        width: '100vw',
        marginBottom: '0',
        background: colors.background.secondary,
        boxShadow: '0px 0px 1em 0.125em rgba(0, 0, 0, 0.8)',
        color: colors.text.primary
    },
    mobileTitle: {
        textAlign: 'center',
        fontSize: '1.5rem'
    },
    mobileMenuButton: {
        color: colors.text.primary,
    }
});
