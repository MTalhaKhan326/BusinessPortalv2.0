import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import Sidebar from "../Sidebar.jsx";
import BaseContextProvider from "../../contexts/BaseContext.jsx";

function DashboardTemplate({ children, pageTitle }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <BaseContextProvider>
      <div className="flex relative">
        <Sidebar />
        <main
          className={`w-[80%] bg-white ${
            isSidebarVisible ? "ml-0" : "ml-[20%]"
          } transition-all ease-in-out duration-300`}
        >
          <div>
            <div className="flex justify-between items-center p-4">
              <div>
                <h1 className="font-bold text-xl">{pageTitle}</h1>
              </div>
              <div>
                <div
                  className="bg-slate-200 p-2 rounded-full"
                  onClick={toggleSidebar}
                >
                  <FaRegBell />
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-screen bg-slate-100">
            <div className="p-10">
              {/* Your page content */}
              {children}
            </div>
          </div>
        </main>
        {isSidebarVisible && (
          <div
            className="fixed top-0 right-0 bottom-0 w-[20%] bg-white shadow-lg"
            style={{ zIndex: 100 }}
          >
            {/* Sidebar content */}
          </div>
        )}
      </div>
    </BaseContextProvider>
  );
}

export default DashboardTemplate;
