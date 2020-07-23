import React, { useState } from 'react';
import { AppBar, Tabs, useTheme, Tab, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { NavMenuProps } from './utils/NavMenu.model';
import { Link } from 'react-router-dom';
import { useNavStyles } from '../../styles/components/common/NavMenu.style';
import { useIconButtonOverrides, useMenuOverrides, useTabsOverrides } from '../../styles/utils/MuiOverrides';

const NavMenu = (props: NavMenuProps): React.ReactElement => {
	const { currentTab, handleTabChange } = props;
	const theme = useTheme();
	const classes = useNavStyles(theme);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	useTabsOverrides();
	useIconButtonOverrides();
	useMenuOverrides();

	const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="sticky" className={classes.navAppBar} color="primary">
			<Toolbar>
				<IconButton edge="start" aria-controls="menu" aria-haspopup="true" onClick={handleMenu}>
					<MenuIcon />
				</IconButton>
				<Menu id="mobileMenu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
					<Link to="/home" className={classes.navMenuLink}>
						<MenuItem onClick={handleClose}>Home</MenuItem>
					</Link>
					<Link to="/home" className={classes.navMenuLink}>
						<MenuItem onClick={handleClose}>About</MenuItem>
					</Link>
					<Link to="/home" className={classes.navMenuLink}>
						<MenuItem onClick={handleClose}>Projects</MenuItem>
					</Link>
					<Link to="/home" className={classes.navMenuLink}>
						<MenuItem onClick={handleClose}>Contact</MenuItem>
					</Link>
				</Menu>
			</Toolbar>
			{/*<Tabs*/}
			{/*	value={currentTab}*/}
			{/*	onChange={handleTabChange}*/}
			{/*	variant={useMediaQuery(theme.breakpoints.down('sm')) ? 'fullWidth' : 'standard'}*/}
			{/*	centered={!useMediaQuery(theme.breakpoints.down('sm'))}*/}
			{/*>*/}
			{/*	<Link to="/home" className={classes.navMenuLink}>*/}
			{/*		<Tab icon={<HomeIcon />} />*/}
			{/*	</Link>*/}
			{/*	<Tab label="About" />*/}
			{/*	<Tab label="Projects" />*/}
			{/*	<Tab label="Contact" />*/}
			{/*</Tabs>*/}
		</AppBar>
	);
};

export default NavMenu;
