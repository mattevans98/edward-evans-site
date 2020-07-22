import React, { useEffect, useState } from 'react';
import { Typography, Box, Fade } from '@material-ui/core';

const LandingPage: React.FC = () => {
	const [quoteIn, setQuoteIn] = useState(false);
	const [nameIn, setNameIn] = useState(false);

	const fadeInCounter = (): void => {
		setTimeout(() => setQuoteIn(true), 1000);
		setTimeout(() => setNameIn(true), 3500);
	};

	useEffect((): void => fadeInCounter());

	return (
		<Box className="landing-box">
			<Fade in={quoteIn} timeout={2000}>
				<Typography variant="h1" className="landing-header">
					"So you’ve got to love it and you’ve got to have passion and I think that’s the high-order bit."
				</Typography>
			</Fade>
			<Fade in={nameIn} timeout={2000}>
				<Typography variant="h3" className="landing-header">
					-Steve Jobs
				</Typography>
			</Fade>
		</Box>
	);
};

export default LandingPage;
