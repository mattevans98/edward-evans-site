import { makeStyles } from '@material-ui/core/styles';

export const useLandingStyles = makeStyles({
	landingBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		marginLeft: '7.5%',
		marginRight: '7.5%',
		// eslint-disable-next-line
		['@media (min-width:600px)']: {
			marginLeft: '10%',
			marginRight: '10%'
		},
		// eslint-disable-next-line
		['@media (min-width:960px)']: {
			marginLeft: '12.5%',
			marginRight: '12.5%'
		},
		// eslint-disable-next-line
		['@media (min-width:1280px)']: {
			marginLeft: '15%',
			marginRight: '15%'
		}
	},
	landingHeader1: {
		textAlign: 'center',
		marginBottom: '0.5rem',
		marginTop: 0,
		fontSize: '1.5rem',
		// eslint-disable-next-line
		['@media (min-width:600px)']: {
			fontSize: '2rem'
		},
		// eslint-disable-next-line
		['@media (min-width:960px)']: {
			fontSize: '2.5rem'
		},
		// eslint-disable-next-line
		['@media (min-width:1280px)']: {
			fontSize: '3rem'
		}
	},
	landingHeader2: {
		textAlign: 'center',
		marginBottom: '1.5rem',
		marginTop: 0,
		fontSize: '1.125rem',
		// eslint-disable-next-line
		['@media (min-width:600px)']: {
			fontSize: '1.5rem'
		},
		// eslint-disable-next-line
		['@media (min-width:960px)']: {
			fontSize: '2rem'
		},
		// eslint-disable-next-line
		['@media (min-width:1280px)']: {
			fontSize: '2.5rem'
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
