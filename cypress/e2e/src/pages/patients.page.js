import BasePage from "./base.page";
import AddPatientComponent from "../components/patients/add-patient.component";
import AddPatientComponent from "../components/patients/patient-list.component";

class PatientPage extends BasePage {
    constructor() {
        super("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients");
        this.AddPatient = new AddPatientComponent();
        this.AddPatient = new AddPatientComponent();
    }
}
export default new PatientPage();