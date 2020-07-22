import React, { useState } from 'react';
// import './styles/App.css';
import HomePage from './components/homepage/HomePage';
import LandingPage from './components/landing-page/LandingPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeChangeProps } from './utils/App.model';
import { colorPalette } from './styles/utils/themes';

const App = (): React.ReactElement => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [isLanding, setIsLanding] = useState(true);
	const paletteType = isDarkMode ? 'dark' : 'light';
	const palette = colorPalette(paletteType);
	const themeWithColors = createMuiTheme(palette);

	const handleThemeChange = (): void => {
		setIsDarkMode(!isDarkMode);
	};

	const themeChangeProps: ThemeChangeProps = {
		isDarkMode,
		handleThemeChange
	};

	const handleLandingButton = (): void => {
		setIsLanding(false);
	};

	return (
		<ThemeProvider theme={themeWithColors}>
			{isLanding ? <LandingPage {...{ handleLandingButton }} /> : <HomePage {...themeChangeProps} />}
		</ThemeProvider>
	);
};

export default App;
