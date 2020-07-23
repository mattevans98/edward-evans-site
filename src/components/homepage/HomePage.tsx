import React from 'react';
import { Box, Switch, FormControlLabel, useTheme } from '@material-ui/core';
import { HomePageProps } from './utils/HomePage.model';
import { useHomeStyles } from '../../styles/components/HomePage.style';
import NavMenu from '../common/NavMenu';

const HomePage = (props: HomePageProps): React.ReactElement => {
	const { isDarkMode, handleThemeChange, handleTabChange } = props;
	const theme = useTheme();
	const classes = useHomeStyles(theme);

	return (
		<Box className={classes.homeBox}>
			<NavMenu currentTab={0} handleTabChange={handleTabChange} />
			<h1 className={classes.homeH1}>High-Order Bit, LLC.</h1>
			<FormControlLabel
				control={<Switch checked={isDarkMode} onChange={handleThemeChange} name="themeSwitch" />}
				label="Switch Theme"
			/>
		</Box>
	);
};

export default HomePage;
