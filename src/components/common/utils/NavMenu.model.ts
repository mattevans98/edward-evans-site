import { ThemeChangeProps } from '../../../utils/App.model';

export interface NavMenuProps extends ThemeChangeProps {
	currentTab: number;
	handleTabChange: (event: any, tabIndex: number) => void;
}
