import React, { useState } from 'react';
import './styles/App.css';
import HomePage from './components/homepage/HomePage';
import LandingPage from './components/landing-page/LandingPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeChangeProps } from './utils/App.model';

const App: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const paletteType = isDarkMode ? 'dark' : 'light';
	const themeWithColors = createMuiTheme({
		palette: {
			type: paletteType
		}
	});

	const handleThemeChange = () => {
		setIsDarkMode(!isDarkMode);
	};

	const themeChangeProps: ThemeChangeProps = {
		isDarkMode,
		handleThemeChange
	};

	return (
		<ThemeProvider theme={themeWithColors}>
			<LandingPage />
			<HomePage {...themeChangeProps} />
		</ThemeProvider>
	);
};

export default App;
