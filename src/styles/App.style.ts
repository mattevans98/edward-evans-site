import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	rootContainer: {
		background: (props: Theme) => props.palette.background.default,
		color: (props: Theme) => (props.palette.type === 'dark' ? '#fff' : '#000'),
		minHeight: '100vh',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	}
});
