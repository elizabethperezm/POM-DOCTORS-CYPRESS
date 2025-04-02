import BasePage from "./base.page";
import AddDoctorComponent from "../components/doctors/add-doctor.component";
import DoctorListComponent from "../components/doctors/doctor-list.component";


class DoctorsPage extends BasePage {
    constructor() {
        super("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors");
        this.addDoctor = new AddDoctorComponent();
        this.doctorList = new DoctorListComponent();
    }
}
export default new DoctorsPage();