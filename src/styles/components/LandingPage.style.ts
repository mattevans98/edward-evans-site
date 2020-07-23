import { makeStyles } from '@material-ui/core/styles';

export const useLandingStyles = makeStyles({
	landingBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		marginLeft: '5%',
		marginRight: '5%',
		// eslint-disable-next-line
		['@media (min-width:760px)']: {
			marginLeft: '10%',
			marginRight: '10%'
		}
	},
	landingHeader1: {
		textAlign: 'center',
		marginBottom: '0.5rem',
		marginTop: 0,
		fontSize: '1.75rem',
		// eslint-disable-next-line
		['@media (min-width:760px)']: {
			fontSize: '3.5rem'
		}
	},
	landingHeader2: {
		textAlign: 'center',
		marginBottom: '1.5rem',
		marginTop: 0,
		fontSize: '1.25rem',
		// eslint-disable-next-line
		['@media (min-width:760px)']: {
			fontSize: '2rem'
		}
	},
	landingButton: {
		textAlign: 'center'
	},
	landingLinkRoute: {
		color: 'inherit',
		textDecoration: 'none'
	}
});
