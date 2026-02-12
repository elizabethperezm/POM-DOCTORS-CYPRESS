class AddPatientComponent {
    patientNameInput = 'input[name="Name"]';
    patientDOBInput = '#DOB_input';
    patientFemaleInput = '#doctorCheckFemale';
    patientMaleInput = '#doctorCheckMale';
    patientMobileInput = '#PatientMobile';
    patientBloodGroupDropdown = 'span.e-search-icon';
    patientBloodGroupListItem = 'ul[role="listbox"] li';
    patientEmailInput = 'input[name="Email"]';
    patientSymptoms = 'input[name="Symptoms"]';
    saveButton = 'ejs-dialog button.e-primary:first';

    fillForm(name, dob, gender, mobile, email, bloodGroup, symptoms) {
        cy.get(this.patientNameInput).type(name);
        cy.get(this.patientDOBInput).clear().type(dob);
        this.selectGender(gender);
        cy.get(this.patientMobileInput).type(mobile);
        cy.get (this.patientEmailInput).type(email);
        this.selectBloodGroup(bloodGroup);
        cy.get(this.patientSymptoms).type(symptoms);
    }

    selectGender(gender) {
        const genderSelector = gender === 'Male' ? this.patientMaleInput : this.patientFemaleInput;
        cy.get(genderSelector).click();

    }


    selectBloodGroup(bloodGroup) {
        cy.get(this.patientBloodGroupDropdown).click({ force: true });
        cy.get(this.patientBloodGroupListItem).contains(bloodGroup).click({ force: true });
    }

    submitForm() {
        cy.get(this.saveButton).click();
    }


}

export default AddPatientComponent;