before(() => {
	cy.visit('http://localhost:3000/');
	cy.waitForReact(15000);
});

describe('<App /> Tests', () => {
	it('should initially render itself and <LandingPage />', () => {
		cy.react('App').should('exist');
		cy.react('LandingPage').should('exist');
	});
});
