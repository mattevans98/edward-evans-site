import React from 'react';
import { Tab, Tabs, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavStyles } from '../../../styles/components/common/NavMenu.style';
import { useNavButtonOverrides, useTabsOverrides } from '../../../styles/utils/MuiOverrides';
import { NavMenuProps } from '../utils/NavMenu.model';

const DesktopMenu = (props: NavMenuProps): React.ReactElement => {
    const { currentTab, handleTabChange } = props;
    const theme = useTheme();
    const classes = useNavStyles(theme);
    useTabsOverrides();
    useNavButtonOverrides();

    return (
        <Tabs value={ false } onChange={ handleTabChange }>
            <Link to="/home" className={ classes.navMenuLink }>
                <Tab label="Home"/>
            </Link>
            <Link to="/placeholder" className={ classes.navMenuLink }>
                <Tab label="About"/>
            </Link>
            <Link to="/placeholder" className={ classes.navMenuLink }>
                <Tab label="Projects"/>
            </Link>
            <Link to="/contact" className={ classes.navMenuLink }>
                <Tab label="Contact"/>
            </Link>
        </Tabs>
    );
};

export default DesktopMenu;
