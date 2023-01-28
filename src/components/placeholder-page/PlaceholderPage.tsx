import React from 'react';
import NavMenu from "../common/NavMenu";
import { PlaceholderPageProps } from "./utils/PlaceholderPage.model";
import { Box, Typography, useTheme } from "@material-ui/core";
import { useCommonStyles } from "../../styles/components/common/common.style";

const PlaceholderPage = (props: PlaceholderPageProps): React.ReactElement => {
    const theme = useTheme();
    const commonClasses = useCommonStyles(theme);

    return (
        <Box className={ commonClasses.mainBox }>
            <NavMenu { ...props } />
            <Box className={ commonClasses.contentBox }>
                <Typography variant="h1" className={ commonClasses.titleH1 }>
                    This page has not been implemented yet. Please visit a different page in the meantime.
                </Typography>
            </Box>

            <Box className={ commonClasses.footer }>
                <Typography variant="body2">
                    Made with love and React by Matt Evans.
                    <br/>
                    © 2023 Matthew Evans. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default PlaceholderPage;
