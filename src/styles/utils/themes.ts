import { ThemeOptions } from '@material-ui/core';
import colors from "../colors";

export const colorPalette = (): ThemeOptions => {
    return {
        palette: {
            primary: {
                main: colors.accents.primary
            },
            secondary: {
                main: colors.accents.secondary
            },
            background: {
                default: colors.background.primary,
                paper: colors.background.secondary
            },
            text: {
                primary: colors.text.primary
            }
        }
    };
};
