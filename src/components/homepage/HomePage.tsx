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
					High-Order Bit, LLC.
				</Typography>
			) }

			<Box>
				<Typography variant="body1" className={ classes.homeP }>
					High-Order Bit is the personal portfolio site of Matt Evans. Visit the 'About' page from the nav menu to learn more
					about me and my skills and development experience.
				</Typography>
				<Typography variant="body1" className={ classes.homeP }>
					If you would like to take a look at some of my personal projects, visit the 'Projects page from the nav menu. There you
					will find links to my GitHub repository as well as the URLs to any of live projects I have developed.
				</Typography>
				<Typography variant="body1" className={ classes.homeP }>
					If you would like to contact me with any offers or questions, please visit the 'Contact' page from the nav menu where my
					contact information is listed.
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
