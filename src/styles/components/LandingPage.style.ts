import { makeStyles } from '@material-ui/core/styles';

export const useLandingStyles = makeStyles({
	landingBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh'
	},
	landingHeader: {
		textAlign: 'center',
		marginBottom: '2rem'
	},
	landingButton: {
		textAlign: 'center'
	}
});
