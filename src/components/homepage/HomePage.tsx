import React from 'react';
import { Box, useTheme } from '@material-ui/core';
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
			{isMobile ? <></> : <h1 className={classes.homeH1}>High-Order Bit, LLC.</h1>}
		</Box>
	);
};

export default HomePage;
