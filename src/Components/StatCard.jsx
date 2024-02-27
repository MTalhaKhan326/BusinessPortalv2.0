import { IoPersonOutline } from "react-icons/io5";

function StatCard({ icon, number, title, subtitle }) {
  return (  
    <div className="flex-[0_0_30%] bg-white py-6 px-4 rounded-xl shadow-xl">
      <div className="flex justify-between">
        <div className="bg-[#24ACE322] rounded-full p-2">
          {icon}
          {/* <IoPersonOutline color={"#24ACE3"} size={"24px"} /> */}
        </div>
        <div>
          <span className="text-3xl">{number}</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

export default StatCard;