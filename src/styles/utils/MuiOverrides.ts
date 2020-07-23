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
