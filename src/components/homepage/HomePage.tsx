import React from 'react';
import { Box, Typography, useTheme } from '@material-ui/core';
import { HomePageProps } from './utils/HomePage.model';
import { useHomeStyles } from '../../styles/components/HomePage.style';
import NavMenu from '../common/NavMenu';

const HomePage = (props: HomePageProps): React.ReactElement => {
	const { isMobile } = props;
	const theme = useTheme();
	const classes = useHomeStyles(theme);

	return (
		<Box className={classes.homeBox}>
			<NavMenu {...props} />
			{isMobile ? (
				<></>
			) : (
				<Typography variant="h1" className={classes.homeH1}>
					High-Order Bit, LLC.
				</Typography>
			)}
			<Box className={classes.underConstructionBox}>
				<Typography variant="h1" className={classes.homeH1}>
					This site is under construction and will be regularly updated with improvements and new content
				</Typography>
			</Box>
		</Box>
	);
};

export default HomePage;
