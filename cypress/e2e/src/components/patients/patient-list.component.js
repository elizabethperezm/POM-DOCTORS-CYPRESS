class PatientListComponent {
    addPatientButton = 'button.add-details';
    patientList = 'div.patient-display';

    clickAddPatient() {
        cy.get(this.addPatientButton).click();
    }

    getpatientbyName(name) {
        return cy.get(this.patientList).contains(".patient-name", name);
    }

}

export default PatientListComponent;