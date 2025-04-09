import DoctorsPage from "../pages/doctors.page";
import data from "../../../fixtures/doctorData.json";

describe('Add doctor', () => {

    beforeEach(() => {
        DoctorsPage.open();
    })

    it('Validate add doctor', () => {
        DoctorsPage.doctorList.clickAddDoctor();
        DoctorsPage.addDoctor.fillForm(
            data.name,
            data.phone,
            data.email,
            data.education,
            data.designation
        );
        DoctorsPage.addDoctor.submitForm();
        DoctorsPage.doctorList.getDoctorName(data.name).should('have.text', `Dr. ${data.name}`);
    })

})