import { IoAnalytics, IoPersonOutline } from "react-icons/io5";
import DashboardTemplate from "../../Components/Templates/DashboardTemplate.jsx";
import StatCard from "../../Components/StatCard.jsx";
import { PiBriefcase } from "react-icons/pi";
import AppImages from "../../assets/images/index.js";

function DashboardScreen() {
  const data = [
    { time: "10:36 am", message: "promotions ads created" },
    { time: "09:16 am", message: "new messages" },
    { time: "10:36 am", message: "promotions ads created" },
    { time: "09:16 am", message: "new messages" },
    { time: "10:36 am", message: "promotions ads created" },
    { time: "09:16 am", message: "new messages" },
  ];
  return (
    <DashboardTemplate pageTitle={"Dashboard"}>
      <div className="flex flex-wrap gap-3 items-center">
        <StatCard
          icon={<IoPersonOutline color={"#24ACE3"} size={"24px"} />}
          number={562}
          title="Customers"
          subtitle={"12 this month"}
        />
        <StatCard
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
        <div className="flex-[0_0_30%] bg-white py-6 px-4 rounded-xl shadow-xl">
          <div className="flex flex-row w-full">
            <div className="w-[50%]">
              <img src={AppImages.barcode} alt="" className="w-[50%]" />
            </div>
            <div className="w-[50%] ">
              <div className="flex flex-col">
                <div className="text-[16px] text-[#333333]">
                  Share your Profile
                </div>
                <div className="text-[13px] text-[#AFAFAF]">
                  {" "}
                  Scan this code and add new customers
                </div>
                <div className="text-[16px] text-[#24ACE3] cursor-pointer">
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white py-6 px-4 rounded-xl shadow-xl w-[40%] mt-8">
        <div className="text-[14px] text-[#333333]">RECENT ACTIVITIES</div>
        <div className="border-[1px] border-[#6d6c6c] opacity-30 my-4"></div>
        {data.map((item, index) => (
          <div className="flex flex-row my-1 w-full" key={index}>
            <div className="text-[14px] text-[#333333] w-[50%]">{item.time}</div>
            <div className="text-[14px] text-[#333333] text w-[50%]">{item.message}</div>
          </div>
          
        ))}
      </div>
    </DashboardTemplate>
  );
}

export default DashboardScreen;