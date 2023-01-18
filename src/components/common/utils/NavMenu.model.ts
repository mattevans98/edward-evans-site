import { CommonProps } from '../../../App.model';

export interface NavMenuProps extends CommonProps {
    currentTab: number;
    handleTabChange: (event: any, tabIndex: number) => void;
}
