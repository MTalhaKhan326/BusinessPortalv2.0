import { MdOutlineSpaceDashboard } from "react-icons/md"
import { IoAnalytics, IoPersonOutline } from "react-icons/io5"

const SidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdOutlineSpaceDashboard color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <MdOutlineSpaceDashboard color={"#24ACE3"} size={"24px"} />,
    route: "/"
  },
  {
    id: 2,
    title: "Notification",
    icon: <IoAnalytics color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <IoAnalytics color={"#24ACE3"} size={"24px"} />,
    route: "/notification"
  },
  {
    id: 3,
    title: "Notifications List",
    icon: <IoPersonOutline color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <IoPersonOutline color={"#24ACE3"} size={"24px"} />,
    route: "/notification/list"
  },
]
export default SidebarItems 