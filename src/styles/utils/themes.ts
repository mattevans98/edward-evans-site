import { ThemeOptions } from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';

export const colorPalette = (): ThemeOptions => {
	return {
		overrides: {
			MuiSwitch: {
				track: {
					backgroundColor: '#fff'
				}
			}
		},
		palette: {
			primary: {
				main: deepPurple[700],
				light: deepPurple[500],
				dark: deepPurple[900]
			},
			secondary: {
				main: indigo[700],
				light: indigo[500],
				dark: indigo[900]
			},
			background: {
				default: `linear-gradient(30deg, ${deepPurple[900]} 40%, ${indigo[300]} 90%)`,
				paper: `linear-gradient(90deg, ${indigo[300]} 30%, ${deepPurple[900]} 90%)`
			}
		}
	};
};
