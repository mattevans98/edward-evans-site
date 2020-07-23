import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	rootContainer: {
		background: (props: Theme) => props.palette.background.default,
		color: '#fff',
		minHeight: '100vh',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	}
});
