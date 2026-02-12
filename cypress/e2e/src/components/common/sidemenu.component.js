class SideMenuComponent {
    doctorsMenuItem = '[routerlink="/doctors"]';
    patientsMenuItem = '[routerlink="/patients"]';


    navigateToDoctors() {
        cy.get(this.doctorsMenuItem).click();
    }

    navigateToPatients() {
        cy.get(this.patientsMenuItem).click();
    }

}

export default SideMenuComponent;
