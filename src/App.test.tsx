import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import LandingPage from './components/landing-page/LandingPage';
import HomePage from './components/homepage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { HomePageProps } from './components/homepage/utils/HomePage.model';

const homePageProps: HomePageProps = {
	isMobile: false,
	currentTab: 0,
	handleTabChange: () => {}
};

describe('<App />', () => {
	it('should initially render <LandingPage />', () => {
		const appComponent = mount(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);
		expect(appComponent.contains(<LandingPage />)).toBe(true);
		appComponent.unmount();
	});

	it('should initially not render <HomePage />', () => {
		const appComponent = mount(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);
		expect(appComponent.contains(<HomePage {...homePageProps} />)).toBeFalsy();
		appComponent.unmount();
	});
});
