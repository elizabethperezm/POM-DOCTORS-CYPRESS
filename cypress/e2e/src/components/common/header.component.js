class HeaderComponent {
    headerTitle = '[class="planner-header"]';
    logoutButton = '[class="logout-name"]';


    getHeaderTitle() {
        return cy.get(this.headerTitle);
    }

    verifyTitle() {
        this.getHeaderTitle().should('contain.text', 'APPOINTMENT PLANNER');
    }

    verifyLogoutButton() {
        cy.get(this.logoutButton).should('be.visible');
    }

}

export default HeaderComponent;