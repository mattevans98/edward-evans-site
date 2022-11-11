import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../colors';

export const useNavStyles = makeStyles({
    navMenuLink: {
        color: colors.text.primary,
        textDecoration: 'none'
    },
    navAppBar: {
        width: '100vw',
        marginBottom: '3vh',
        background: colors.background.secondary,
        boxShadow: '0px 0px 15px 2px rgba(0, 0, 0, 0.8)',
    },
    mobileTitle: {
        textAlign: 'center',
        fontSize: '1.5rem'
    },
    mobileMenuButton: {}
});
