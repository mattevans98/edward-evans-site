import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	rootContainer: {
		background: (props: Theme) => props.palette.background.default,
		color: 'rgba(255, 255, 255, 0.85)',
		minHeight: '100vh',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	}
});
