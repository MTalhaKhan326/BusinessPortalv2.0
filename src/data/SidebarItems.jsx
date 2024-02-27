import { MdOutlineSpaceDashboard } from "react-icons/md"
import { IoAnalytics, IoHelpCircleOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5"
import { FiMessageSquare } from "react-icons/fi"
import { PiBriefcase, PiStarLight } from "react-icons/pi"

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
    title: "Analytics",
    icon: <IoAnalytics color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <IoAnalytics color={"#24ACE3"} size={"24px"} />,
    route: "/analytics"
  },
  {
    id: 3,
    title: "Users / Customers",
    icon: <IoPersonOutline color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <IoPersonOutline color={"#24ACE3"} size={"24px"} />,
    route: "/customers"
  },
  {
    id: 4,
    title: "Offers & Requests",
    icon: <PiStarLight color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <PiStarLight color={"#24ACE3"} size={"24px"} />,
    route: "/offers-requests"
  },
  {
    id: 5,
    title: "Jobs",
    icon: <PiBriefcase color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <PiBriefcase color={"#24ACE3"} size={"24px"} />,
    route: "/jobs"
  },
  {
    id: 6,
    title: "Messages",
    icon: <FiMessageSquare color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <FiMessageSquare color={"#24ACE3"} size={"24px"} />,
    route: "/messages"
  },
  {
    id: 7,
    title: "Help",
    icon: <IoHelpCircleOutline color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <IoHelpCircleOutline color={"#24ACE3"} size={"24px"} />,
    route: "/help"
  },
  {
    id: 8,
    title: "Settings",
    icon: <IoSettingsOutline color={"#AFAFAF"} size={"24px"} />,
    activeIcon: <IoSettingsOutline color={"#24ACE3"} size={"24px"} />,
    route: "/settings"
  },
]
export default SidebarItems 