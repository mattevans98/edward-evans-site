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
		<Box className={ classes.homeBox }>
			<NavMenu { ...props } />
			{ isMobile ? (
				<></>
			) : (
				<Typography variant="h1" className={ classes.homeH1 }>
					Edward Evans Technology, LLC.
				</Typography>
			) }

			<Box>
				<Typography variant="body1" className={ classes.homeP }>
					Edward Evans Technology is a small web development company owned by Matt Evans. Visit the 'About' page from the nav menu
					to learn more about Matt and his software development skills and experience.
				</Typography>
				<Typography variant="body1" className={ classes.homeP }>
					If you would like to take a look at some of Matt's personal projects, visit the 'Projects page from the nav menu. There
					you will find links to his GitHub repository as well as the URLs to any of live projects he has developed.
				</Typography>
				<Typography variant="body1" className={ classes.homeP }>
					If you would like to contact Matt with any business offers or questions, please visit the 'Contact' page from the nav
					menu where the company contact information is listed.
				</Typography>
			</Box>

			<Box className={ classes.underConstructionBox }>
				<Typography variant="h1" className={ classes.homeH1 }>
					This site is a WIP and will be regularly updated with improvements and new content
				</Typography>
			</Box>

			<Box>
				<Typography variant="body2" className={ classes.homeFooter }>
					Made with love and React by Matt Evans.
					<br/>
					© 2022 Matthew Evans. All rights reserved.
				</Typography>
			</Box>
		</Box>
	);
};

export default HomePage;
