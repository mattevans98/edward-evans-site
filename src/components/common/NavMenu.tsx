import React from 'react';
import { AppBar, Tabs, useTheme, Tab, useMediaQuery } from '@material-ui/core';
import { NavMenuProps } from './utils/NavMenu.model';
import { Link } from 'react-router-dom';
import { useNavStyles } from '../../styles/components/common/NavMenu.style';

const NavMenu = (props: NavMenuProps): React.ReactElement => {
	const { currentTab, handleTabChange } = props;
	const theme = useTheme();
	const classes = useNavStyles();

	return (
		<AppBar position="sticky" className={classes.navAppBar}>
			<Tabs
				value={currentTab}
				onChange={handleTabChange}
				variant={useMediaQuery(theme.breakpoints.down('sm')) ? 'fullWidth' : 'standard'}
				centered={!useMediaQuery(theme.breakpoints.down('sm'))}
			>
				<Link to="/home" className={classes.navMenuLink}>
					<Tab label="Home" />
				</Link>
				<Tab label="About" />
				<Tab label="Projects" />
				<Tab label="Contact" />
			</Tabs>
		</AppBar>
	);
};

export default NavMenu;
