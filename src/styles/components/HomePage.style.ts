import { makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles({
	homeBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: '100vh',
		marginLeft: '5%',
		marginRight: '5%',
		['@media (min-width:960px)']: {
			marginLeft: '10%',
			marginRight: '10%'
		}
	},
	homeH1: {
		textAlign: 'center',
		marginBottom: '0.5rem',
		marginTop: 0,
		fontSize: '1.75rem',
		['@media (min-width:960px)']: {
			fontSize: '2rem'
		},
		['@media (min-width:1280px)']: {
			fontSize: '3rem'
		}
	},
	homeP: {
		textAlign: 'center',
		fontSize: '1.125rem',
		marginTop: '0',
		marginBottom: '1rem',
		['@media (min-width:600px)']: {
			fontSize: '1.25rem',
			marginTop: '1rem',
		},
		['@media (min-width:1280px)']: {
			fontSize: '1.375rem'
		}
	},
	underConstructionBox: {
		border: '2px solid white',
		padding: '1rem',
		margin: '2rem',
		['@media (min-width:600px)']: {
			padding: '3rem'
		}
	},
	homeFooter: {
		textAlign: 'center',
		fontStyle: 'italic',
		fontSize: '0.75rem',
		marginTop: '1.5rem',
		marginBottom: '0.75rem',
		['@media (min-width:600px)']: {
			fontSize: '1rem',
			marginBottom: '2rem'
		}
	}
});
