class SideMenuComponent {
    doctorsMenuItem = '[routerlink="/doctors"]';


    navigatetoDoctors() {
        cy.get(this.doctorsMenuItem).click();
    }
}

export default SideMenuComponent;
