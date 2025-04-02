import BasePage from "./base.page";
import HeaderComponent from "../components/common/header.component";
import SideMenuComponent from "../components/common/sidemenu.component";

class DashboardPage extends BasePage {
    constructor() {
        super("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        this.header = new HeaderComponent();
        this.sideMenu = new SideMenuComponent();
    }
}
export default new DashboardPage();