import { IoAnalytics, IoPersonOutline } from "react-icons/io5";
import DashboardTemplate from "../../Components/Templates/DashboardTemplate.jsx";
import StatCard from "../../Components/StatCard.jsx";
import { PiBriefcase } from "react-icons/pi";
import AppImages from "../../assets/images/index.js";
import { useEffect, useState } from "react";

function DashboardScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://crm-lara-mongo-7azts5zmra-uc.a.run.app/api/dynamic-notification?markerId=65deedcd9135274171b0faa5&type=all');
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <DashboardTemplate pageTitle={"Dashboard"}>
      <div className="flex flex-wrap gap-3 items-center">
        <StatCard
          icon={<IoAnalytics color={"#24ACE3"} size={"24px"} />}
          number={data?.length}
          title="Notifications"
          subtitle={"Sarkar Ap ki Dehleez Pe"}
        />
        {/* <StatCard
          icon={<PiBriefcase color={"#24ACE3"} size={"24px"} />}
          number={132}
          title="Jobs"
          subtitle={"78 this month"}
        />
        <StatCard
          icon={<IoAnalytics color={"#24ACE3"} size={"24px"} />}
          number={"Rs. 55,000"}
          title="Earning"
          subtitle={"Rs. 4500 this month"}
        />
         */}
      </div>
      
    </DashboardTemplate>
  );
}

export default DashboardScreen;