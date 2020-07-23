import { makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles({
	homeBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: '100vh',
		marginLeft: '5%',
		marginRight: '5%',
		// eslint-disable-next-line
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
		// eslint-disable-next-line
		['@media (min-width:960px)']: {
			fontSize: '2rem'
		},
		// eslint-disable-next-line
		['@media (min-width:1280px)']: {
			fontSize: '3rem'
		}
	}
});
