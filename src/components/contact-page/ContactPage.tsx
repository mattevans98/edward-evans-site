import React from 'react';
import NavMenu from "../common/NavMenu";
import { ContactPageProps } from "./utils/ContactPage.model";
import { Box, Typography, useTheme } from "@material-ui/core";
import { useContactStyles } from '../../styles/components/ContactPage.style';

const ContactPage = (props: ContactPageProps): React.ReactElement => {
    const { isMobile } = props;
    const theme = useTheme();
    const classes = useContactStyles(theme);

    return (
        <Box className={ classes.mainBox }>
            <NavMenu { ...props } />
            <Box>
                <Typography variant="h1" className={ classes.contactH1 }>
                    Contact
                </Typography>
            </Box>

            <Box className={ classes.contactContentBox }>
                <Typography variant="body1" className={ classes.contactP }>
                    If you would like to contact me in regards to any offers or questions, I can be reached through
                    email at <a href="mailto:matt@edwardevans.io" className={ classes.contactLink }>matt@edwardevans.io</a>
                </Typography>
            </Box>

            <Box className={ classes.contactFooter }>
                <Typography variant="body2">
                    Made with love and React by Matt Evans.
                    <br/>
                    © 2022 Matthew Evans. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default ContactPage;
