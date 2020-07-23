import React, { useEffect, useState } from 'react';
import { Box, Fade, Button, useTheme } from '@material-ui/core';
import { FadeInModel, LandingPageProps } from './utils/LandingPage.model';
import { useLandingStyles } from '../../styles/components/LandingPage.style';

const LandingPage = (props: LandingPageProps): React.ReactElement => {
	const { handleLandingButton } = props;
	const theme = useTheme();
	const classes = useLandingStyles(theme);

	const [isFadedIn, setIsFadedIn] = useState<FadeInModel>({
		quote: false,
		attribution: false,
		enterButton: false
	});
	const [fadeInStep, setFadeInStep] = useState<number>(0);

	useEffect(() => {
		const fadeInDelay = setTimeout((): void => {
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

		if (fadeInStep > 2) {
			clearTimeout(fadeInDelay);
			console.log('Timeout cleared!');
		}
	}, [fadeInStep]);

	return (
		<Box className={classes.landingBox}>
			<Fade in={isFadedIn.quote} timeout={2000}>
				<h1 className={classes.landingHeader1}>
					"So you’ve got to love it and you’ve got to have passion and I think that’s the high-order bit."
				</h1>
			</Fade>
			<Fade in={isFadedIn.attribution} timeout={2000}>
				<h2 className={classes.landingHeader2}>-Steve Jobs</h2>
			</Fade>
			<Fade in={isFadedIn.enterButton} timeout={2000}>
				<Button className={classes.landingButton} variant="outlined" onClick={handleLandingButton}>
					Enter Site
				</Button>
			</Fade>
		</Box>
	);
};

export default LandingPage;
