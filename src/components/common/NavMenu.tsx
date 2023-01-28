import React from 'react';
import { AppBar, useTheme } from '@material-ui/core';
import { NavMenuProps } from './utils/NavMenu.model';
import { useNavStyles } from '../../styles/components/common/NavMenu.style';
import MobileMenu from './menus/MobileMenu';
import DesktopMenu from './menus/DesktopMenu';

const NavMenu = (props: NavMenuProps): React.ReactElement => {
    const { isMobile } = props;
    const classes = useNavStyles(useTheme());

    return (
        <AppBar position="sticky" className={ classes.navAppBar } color="primary">
            { isMobile ? <MobileMenu/> : <DesktopMenu { ...props } /> }
        </AppBar>
    );
};

export default NavMenu;
