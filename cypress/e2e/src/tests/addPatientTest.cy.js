import PatientPage from "../pages/patients.page";
import data from "../../../fixtures/patientData.json";


describe('Add Patient', () => {
    beforeEach(() => {
        PatientPage.open();
    })

    it('Should add a new patient', () => {
        PatientPage.patientList.clickAddPatient();
        PatientPage.addPatient.fillForm(
            data.name,
            data.dob,
            data.gender,
            data.mobile,
            data.email,
            data.BloodGroup,
            data.symptoms
        )
        patientsPage.addPatient.submitForm();
        PatientPage.patientList.getpatientName(data.name).should('have.text', `${data.name}`);
    })
})