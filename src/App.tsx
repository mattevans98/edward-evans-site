import React, { useState } from 'react';
import HomePage from './components/homepage/HomePage';
import LandingPage from './components/landing-page/LandingPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeChangeProps } from './utils/App.model';
import { colorPalette } from './styles/utils/themes';
import { useStyles } from './styles/App.style';
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

const App = (): React.ReactElement => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [currentTab, setCurrentTab] = useState(0);
	const paletteType = isDarkMode ? 'dark' : 'light';
	const palette = colorPalette(paletteType);
	const themeWithColors = createMuiTheme(palette);
	const classes = useStyles(themeWithColors);

	const handleThemeChange = (): void => {
		setIsDarkMode(!isDarkMode);
	};

	const handleTabChange = (event: React.ChangeEvent<{}>, tabIndex: number): void => {
		setCurrentTab(tabIndex);
	};

	const themeChangeProps: ThemeChangeProps = {
		isDarkMode,
		handleThemeChange
	};

	return (
		<ThemeProvider theme={themeWithColors}>
			<CssBaseline />
			<div className={classes.rootContainer}>
				<Switch>
					<Route path="/home">
						<HomePage {...{ ...themeChangeProps, currentTab, handleTabChange }} />
					</Route>
					<Route path="/">
						<LandingPage />
					</Route>
				</Switch>
			</div>
		</ThemeProvider>
	);
};

export default App;
