import BasePage from "./base.page";
import AddPatientComponent from "../components/patients/add-patient.component";
import PatientList from "../components/patients/patient-list.component";

class PatientPage extends BasePage {
    constructor() {
        super("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients");
        this.addPatient = new AddPatientComponent();
        this.patientList = new PatientList();
    }
}
export default new PatientPage();