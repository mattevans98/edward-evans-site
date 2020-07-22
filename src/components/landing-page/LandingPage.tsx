import React, { useEffect, useState } from 'react';
import { Typography, Box, Fade, Button } from '@material-ui/core';
import { FadeInModel } from './utils/LandingPage.model';

const LandingPage: React.FC = () => {
	const [isFadedIn, setIsFadedIn] = useState<FadeInModel>({
		quote: false,
		attribution: false,
		enterButton: false
	});
	const [fadeInStep, setFadeInStep] = useState<number>(0);

	useEffect((): void => {
		const fadeInTimer = setInterval((): void => {
			setIsFadedIn((prevState) => {
				let newVals = {
					...prevState
				};
				newVals[Object.keys(prevState)[fadeInStep]] = true;
				return newVals;
			});
			setFadeInStep((prevState) => prevState + 1);
		}, 1500);
		if (fadeInStep === 3) {
			clearInterval(fadeInTimer);
		}
	});

	return (
		<Box className="landing-box">
			<Fade in={isFadedIn.quote} timeout={2000}>
				<Typography variant="h1" className="landing-header">
					"So you’ve got to love it and you’ve got to have passion and I think that’s the high-order bit."
				</Typography>
			</Fade>
			<Fade in={isFadedIn.attribution} timeout={2000}>
				<Typography variant="h3" className="landing-header">
					-Steve Jobs
				</Typography>
			</Fade>
			<Fade in={isFadedIn.enterButton} timeout={2000}>
				<Button className="landing-button">Enter Site</Button>
			</Fade>
		</Box>
	);
};

export default LandingPage;
