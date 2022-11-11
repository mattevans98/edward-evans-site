import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from "../colors";

export const useButtonOverrides = makeStyles(
    {
        label: {
            color: colors.text.primary
        },
        outlined: {
            border: '1px solid rgba(255, 255, 255, 0.5)'
        }
    },
    { name: 'MuiButton' }
);

export const useTabsOverrides = makeStyles(
    {
        flexContainer: {
            justifyContent: 'space-between'
        }
    },
    { name: 'MuiTabs' }
);

export const useNavButtonOverrides = makeStyles(
    {
        root: {
            fontWeight: 700
        }
    },
    { name: 'MuiButtonBase' }
);

export const useIconButtonOverrides = makeStyles(
    {
        root: {
            color: colors.text.primary
        }
    },
    {
        name: 'MuiIconButton'
    }
);

export const useMenuOverrides = makeStyles(
    {
        paper: {
            background: colors.background.secondary
        }
    },
    { name: 'MuiMenu' }
);

export const useToolbarOverrides = makeStyles(
    {
        root: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    },
    { name: 'MuiToolbar' }
);
