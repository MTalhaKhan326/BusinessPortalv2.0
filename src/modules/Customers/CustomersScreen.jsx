import DashboardTemplate from "../../Components/Templates/DashboardTemplate";
import NotificationList from "../Notifications/NotificationList";

function CustomersScreen() {
  return (  
    <DashboardTemplate pageTitle={"Notifications List"}>
          <NotificationList/>
    </DashboardTemplate>
  );
}

export default CustomersScreen;