import React from 'react';
import NavMenu from "../common/NavMenu";
import { ContactPageProps } from "./utils/ContactPage.model";
import { Box, Typography, useTheme } from "@material-ui/core";
import { useHomeStyles } from "../../styles/components/HomePage.style";

const ContactPage = (props: ContactPageProps): React.ReactElement => {
    const { isMobile } = props;
    const theme = useTheme();
    const classes = useHomeStyles(theme);

    return (
        <Box>
            <NavMenu { ...props } />
            { isMobile ? (
                <></>
            ) : (
                <Typography variant="h1">
                    Contact
                </Typography>
            ) }
        </Box>
    );
}

export default ContactPage;
