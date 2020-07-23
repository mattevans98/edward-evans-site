import { ThemeOptions } from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';

export const colorPalette = (colorTheme): ThemeOptions => {
	const isDark = colorTheme === 'dark';
	const gradientColor1 = isDark ? deepPurple[900] : deepPurple[300];
	const gradientColor2 = isDark ? indigo[400] : indigo[200];

	return {
		palette: {
			type: colorTheme,
			primary: {
				main: isDark ? deepPurple[700] : deepPurple[300],
				light: isDark ? deepPurple[500] : deepPurple[100],
				dark: isDark ? deepPurple[900] : deepPurple[500]
			},
			secondary: {
				main: isDark ? indigo[700] : indigo[300],
				light: isDark ? indigo[500] : indigo[100],
				dark: isDark ? indigo[900] : indigo[500]
			},
			background: {
				default: `linear-gradient(30deg, ${gradientColor1} 20%, ${gradientColor2} 90%)`,
				paper: `linear-gradient(90deg, ${gradientColor2} 30%, ${gradientColor1} 90%)`
			}
		}
	};
};
