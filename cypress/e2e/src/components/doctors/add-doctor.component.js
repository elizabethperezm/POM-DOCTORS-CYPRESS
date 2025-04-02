class AddDoctorComponent {
    nameInput = 'input[name="Name"]';
    phoneInput = '#DoctorMobile';
    emailInput = 'input[name="Email"]';
    educationInput = 'input[name="Education"]';
    designationInput = 'input[name="Designation"]';
    saveButton = '.e-footer-content button.e-primary';


    fillForm(name, phone, email, education, designation) {
        cy.get(this.nameInput).type(name);
        cy.get(this.phoneInput).type(phone);
        cy.get(this.emailInput).type(email);
        cy.get(this.educationInput).type(education);
        cy.get(this.designationInput).type(designation);
    }

    submitForm() {
        cy.get(this.saveButton).click();
    }
}
export default AddDoctorComponent;