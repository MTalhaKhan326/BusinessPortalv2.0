import { useContext } from "react";
import AppImages from "../assets/images/AppImages.js";
import SidebarItems from "../data/SidebarItems.jsx";
import { BaseContext } from "../contexts/BaseContext.jsx";
import { IoLogOut, IoLogOutOutline, IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const baseCtx = useContext(BaseContext)
  const navigate = useNavigate()
  return (  
    <aside className="w-[20%] p-4 h-full fixed bg-white" >
      <div>
        <div className="mt-6">
          {/* <img src={AppImages.onecallLogo} className="w-[50px]" /> */}
          <div className="font-bold text-[22px] text-center ur"> سرکار آپ کی دہلیز پر
      </div>
        </div>
        <div className="mt-10 h-[70%] overflow-y-auto">
          <div className="">
            <ul>
              {SidebarItems.map((item, index) => {
                const isActive = item.id === baseCtx.activeItemId
                return (
                  <li 
                    key={'sidebar-item-' + index} 
                    className={(isActive ? "bg-[#24ACE31F]" : "hover:bg-slate-50") + " my-2 py-2 px-3 cursor-pointer rounded-lg"}
                    onClick={() => {
                      baseCtx.setActiveItemId(item.id)
                      navigate(item.route ?? "/coming-soon")
                    }}
                  >
                    <div className="flex gap-2 items-center">
                      <div>{isActive ? item.activeIcon : item.icon}</div>
                      <div>
                        <p className={isActive ? "text-black" : "text-gray-500"}>{item.title}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="absolute left-0 bottom-0 w-full">
        <ul className="px-4">
          <li
            className={("hover:bg-slate-50") + "  my-4 py-2 px-3 cursor-pointer rounded-lg"}
            onClick={() => {
              // baseCtx.setActiveItemId(item.id)
            }}
          >
            <div className="flex gap-2 items-center">
              <div>{<IoPersonOutline color={"#24ACE3"} size={"24px"} />}</div>
              <div>
                <p className={"text-gray-500"}>{"Fazil A"}</p>
              </div>
            </div>
          </li>
          <li
            className={("hover:bg-slate-50") + "  my-4 py-2 px-3 cursor-pointer rounded-lg"}
            onClick={() => {
              // baseCtx.setActiveItemId(item.id)
            }}
          >
            <div className="flex gap-2 items-center">
              <div>{<IoLogOutOutline color={"#24ACE3"} size={"24px"} />}</div>
              <div>
                <p className={"text-gray-500"}>{"Log out"}</p>
              </div>
            </div>
          </li>
        </ul>
      </div> */}
    </aside>
  );
}

export default Sidebar;