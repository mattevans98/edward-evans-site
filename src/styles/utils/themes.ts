import { ThemeOptions } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import deepPurple from '@material-ui/core/colors/deepPurple';

export const colorPalette = (): ThemeOptions => {
	return {
		palette: {
			primary: {
				main: indigo[700],
				light: indigo[500],
				dark: indigo[900],
				contrastText: 'rgba(255, 255, 255, 0.85)'
			},
			secondary: {
				main: deepPurple[700],
				light: deepPurple[500],
				dark: deepPurple[900],
				contrastText: 'rgba(255, 255, 255, 0.85)'
			},
			background: {
				default: `linear-gradient(45deg, ${deepPurple[900]} 30%, ${indigo[400]} 90%)`,
				paper: `linear-gradient(90deg, ${indigo[300]} 30%, ${deepPurple[900]} 90%)`
			},
			text: {
				primary: 'rgba(255, 255, 255, 0.85)'
			}
		}
	};
};
