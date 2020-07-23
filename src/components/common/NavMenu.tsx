import React from 'react';
import { AppBar, Tabs, useTheme, Tab, useMediaQuery } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { NavMenuProps } from './utils/NavMenu.model';
import { Link } from 'react-router-dom';
import { useNavStyles } from '../../styles/components/common/NavMenu.style';
import { useTabsOverrides } from '../../styles/utils/MuiOverrides';

const NavMenu = (props: NavMenuProps): React.ReactElement => {
	const { currentTab, handleTabChange } = props;
	const theme = useTheme();
	const classes = useNavStyles(theme);
	useTabsOverrides();

	return (
		<AppBar position="sticky" className={classes.navAppBar} color="primary">
			<Tabs
				value={currentTab}
				onChange={handleTabChange}
				variant={useMediaQuery(theme.breakpoints.down('sm')) ? 'fullWidth' : 'standard'}
				centered={!useMediaQuery(theme.breakpoints.down('sm'))}
			>
				<Link to="/home" className={classes.navMenuLink}>
					<Tab icon={<HomeIcon />} />
				</Link>
				<Tab label="About" />
				<Tab label="Projects" />
				<Tab label="Contact" />
			</Tabs>
		</AppBar>
	);
};

export default NavMenu;
