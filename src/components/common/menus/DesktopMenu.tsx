import React from 'react';
import { Tabs, Tab, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavStyles } from '../../../styles/components/common/NavMenu.style';
import { useTabsOverrides } from '../../../styles/utils/MuiOverrides';
import { NavMenuProps } from '../utils/NavMenu.model';
import HomeIcon from '@material-ui/icons/Home';

const DesktopMenu = (props: NavMenuProps): React.ReactElement => {
	const { currentTab, handleTabChange } = props;
	const theme = useTheme();
	const classes = useNavStyles(theme);
	useTabsOverrides();

	return (
		<Tabs value={currentTab} onChange={handleTabChange} centered>
			<Link to="/home" className={classes.navMenuLink}>
				<Tab icon={<HomeIcon />} />
			</Link>
			<Link to="/" className={classes.navMenuLink}>
				<Tab label="About" />
			</Link>
			<Link to="/" className={classes.navMenuLink}>
				<Tab label="Projects" />
			</Link>
			<Link to="/" className={classes.navMenuLink}>
				<Tab label="Contact" />
			</Link>
		</Tabs>
	);
};

export default DesktopMenu;
