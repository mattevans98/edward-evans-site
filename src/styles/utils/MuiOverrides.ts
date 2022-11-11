import makeStyles from '@material-ui/core/styles/makeStyles';

export const useButtonOverrides = makeStyles(
    {
        label: {
            color: 'rgba(255, 255, 255, 0.95)'
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
            color: 'rgba(255, 255, 255, 0.85)'
        }
    },
    {
        name: 'MuiIconButton'
    }
);

export const useMenuOverrides = makeStyles(
    {
        paper: {
            backgroundColor: 'rgba(40, 53, 147, 0.95)'
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
