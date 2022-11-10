import React, { useEffect, useState } from 'react';
import { Button, Fade, useTheme } from '@material-ui/core';
import { FadeInModel } from './utils/LandingPage.model';
import { useLandingStyles } from '../../styles/components/LandingPage.style';
import { Link } from 'react-router-dom';
import { useButtonOverrides } from '../../styles/utils/MuiOverrides';

const LandingPage = (): React.ReactElement => {
    const theme = useTheme();
    const classes = useLandingStyles(theme);
    useButtonOverrides();

    const [isFadedIn, setIsFadedIn] = useState<FadeInModel>({
        quote: false,
        attribution: false,
        enterButton: false
    });
    const [fadeInStep, setFadeInStep] = useState<number>(0);

    useEffect(() => {
        const fadeInDelay = setInterval((): void => {
            setIsFadedIn((prevState) => {
                let newVals = {
                    ...prevState
                };
                newVals[Object.keys(prevState)[fadeInStep]] = true;
                return newVals;
            });
            setFadeInStep((prevState) => prevState + 1);
            console.log(`fadeInStep = ${ fadeInStep }`);
        }, 1500);

        if (fadeInStep > 2) {
            clearInterval(fadeInDelay);
            console.log('Interval cleared!');
        }
        return () => clearInterval(fadeInDelay);
    }, [fadeInStep]);

    return (
        <div className={ classes.landingBox }>
            <Fade in={ isFadedIn.quote } timeout={ 2000 }>
                <h1 className={ classes.landingHeader1 }>
                    "You’ve got to love your work and you’ve got to have passion for it. I think that’s the high-order bit."
                </h1>
            </Fade>
            <Fade in={ isFadedIn.attribution } timeout={ 2000 }>
                <h2 className={ classes.landingHeader2 }>-Steve Jobs</h2>
            </Fade>
            <Fade in={ isFadedIn.enterButton } timeout={ 2000 }>
                <Link to="/home" className={ classes.landingLinkRoute }>
                    <Button className={ classes.landingButton } variant="outlined">
                        Enter
                    </Button>
                </Link>
            </Fade>
        </div>
    );
};

export default LandingPage;
