import { makeStyles } from '@material-ui/core/styles';
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";

export const useStyles = makeStyles({
	rootContainer: {
		background: `linear-gradient(45deg, ${ deepPurple[900] } 30%, ${ indigo[400] } 90%)`,
		color: 'rgba(255, 255, 255, 0.85)',
		minHeight: '100vh',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	}
});
