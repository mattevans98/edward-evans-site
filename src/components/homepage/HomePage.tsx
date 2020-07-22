import React from 'react';
import { Typography, Box, Switch, FormControlLabel } from '@material-ui/core';
import { HomePageProps } from './utils/HomePage.model';

const HomePage = (props: HomePageProps): React.ReactElement => {
	const { isDarkMode, handleThemeChange } = props;

	return (
		<Box className="container">
			<Typography variant="body1" className="body-text">
				High-Order Bit, LLC.
			</Typography>
			<FormControlLabel
				control={<Switch checked={isDarkMode} onChange={handleThemeChange} name="themeSwitch" />}
				label="Switch Theme"
			/>
		</Box>
	);
};

export default HomePage;
