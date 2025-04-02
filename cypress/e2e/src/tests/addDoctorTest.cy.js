import DoctorsPage from "../pages/doctors.page";

describe('Add doctor', () => {

    beforeEach(() => {
        DoctorsPage.open();
    })

    it('Validate add doctor', () => {
        DoctorsPage.doctorList.clickAddDoctor();
        DoctorsPage.addDoctor.fillForm('Jhon Doe', '7777777777777777', 'jhon@test.com', 'MMM', 'Doctor');
        DoctorsPage.addDoctor.submitForm();
        DoctorsPage.doctorList.verifyDoctorExists('Jhon Doe');
    })

})