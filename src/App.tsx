import React, { useState } from 'react';
import HomePage from './components/homepage/HomePage';
import LandingPage from './components/landing-page/LandingPage';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { colorPalette } from './styles/utils/themes';
import { useStyles } from './styles/App.style';
import { CssBaseline, useMediaQuery } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

const App = (): React.ReactElement => {
	const [currentTab, setCurrentTab] = useState(0);
	const palette = colorPalette();
	const themeWithColors = createTheme(palette);
	const classes = useStyles(themeWithColors);
	const isMobile = useMediaQuery(themeWithColors.breakpoints.down('sm'));

	const handleTabChange = (event: React.ChangeEvent<{}>, tabIndex: number): void => {
		setCurrentTab(tabIndex);
	};

	return (
		<ThemeProvider theme={themeWithColors}>
			<CssBaseline />
			<div className={classes.rootContainer}>
				<Switch>
					<Route path="/home">
						<HomePage {...{ isMobile, currentTab, handleTabChange }} />
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
