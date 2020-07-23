import React, { useEffect, useState } from 'react';
import { Typography, Box, Fade, Button, useTheme } from '@material-ui/core';
import { FadeInModel, LandingPageProps } from './utils/LandingPage.model';

const LandingPage = (props: LandingPageProps): React.ReactElement => {
	const { handleLandingButton } = props;
	const theme = useTheme();

	const [isFadedIn, setIsFadedIn] = useState<FadeInModel>({
		quote: false,
		attribution: false,
		enterButton: false
	});
	const [fadeInStep, setFadeInStep] = useState<number>(0);

	useEffect(() => {
		const fadeInTimer = setInterval((): void => {
			setIsFadedIn((prevState) => {
				let newVals = {
					...prevState
				};
				newVals[Object.keys(prevState)[fadeInStep]] = true;
				return newVals;
			});
			setFadeInStep((prevState) => prevState + 1);
			console.log(`fadeInStep = ${fadeInStep}`);
		}, 1500);
		if (fadeInStep === 3) {
			clearInterval(fadeInTimer);
		}
		return () => {
			clearInterval(fadeInTimer);
			console.log('Interval effect cleaned up and cleared!');
		};
	}, [fadeInStep]);

	return (
		<Box className="landing-box" style={{ background: theme.palette.background.default }}>
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
				<Button id="landing-button" variant="outlined" onClick={handleLandingButton}>
					Enter Site
				</Button>
			</Fade>
		</Box>
	);
};

export default LandingPage;
