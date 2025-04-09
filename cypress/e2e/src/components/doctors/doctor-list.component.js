class DoctorListComponent {

    addDoctorButton = '.specialization-types button';
    doctorList = 'div.specialist-display';

    clickAddDoctor() {
        cy.get(this.addDoctorButton).click();
    }

    getDoctorName(name) {
        return cy.get(this.doctorList).contains(".name", name);
    }
}
export default  DoctorListComponent;