import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Toolbar, Typography, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import { Link } from 'react-router-dom';
import { useNavStyles } from '../../../styles/components/common/NavMenu.style';
import { useIconButtonOverrides, useMenuOverrides, useToolbarOverrides } from '../../../styles/utils/MuiOverrides';

const MobileMenu = (): React.ReactElement => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const theme = useTheme();
	const classes = useNavStyles(theme);
	useIconButtonOverrides();
	useMenuOverrides();
	useToolbarOverrides();

	const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};

	return (
		<Toolbar>
			<IconButton edge="start" aria-controls="menu" aria-haspopup="true" onClick={handleMenu} className={classes.mobileMenuButton}>
				<MenuIcon />
			</IconButton>
			<Menu id="mobileMenu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<Link to="/home" className={classes.navMenuLink}>
					<MenuItem onClick={handleClose}>Home</MenuItem>
				</Link>
				<Link to="/" className={classes.navMenuLink}>
					<MenuItem onClick={ handleClose }>About</MenuItem>
				</Link>
				<Link to="/" className={ classes.navMenuLink }>
					<MenuItem onClick={ handleClose }>Projects</MenuItem>
				</Link>
				<Link to="/contact" className={ classes.navMenuLink }>
					<MenuItem onClick={ handleClose }>Contact</MenuItem>
				</Link>
			</Menu>
			<Typography variant="h1" className={ classes.mobileTitle }>
				Edward Evans Technology
			</Typography>
			<IconButton edge="end">
				<DesktopMacIcon/>
			</IconButton>
		</Toolbar>
	);
};

export default MobileMenu;
