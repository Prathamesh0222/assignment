import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div
        className={
          isSidebarOpen
            ? "md:max-w-[250px] md:w-full md:relative md:border-0 md:border-r md:h-screen md:block hidden md:ease-in-out md:duration-300 md:transition-all"
            : "md:max-w-[60px] md:w-full md:border-r md:h-screen md:border-0  md:relative md:block hidden md:ease-in-out md:duration-300 md:transition-all"
        }
      >
        {isSidebarOpen ? (
          <div>
            <div className="flex justify-between p-3">
              <h1>Product</h1>
              <button
                className="md:block hidden hover:bg-black/20 rounded-xl p-2 border cursor-pointer"
                onClick={() => handleSidebar()}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
            <div className="flex md:flex-col flex-row justify-center text-center items-center gap-4 mx-3 mt-4">
              <button
                onClick={() => handleNavigation("/")}
                className={`p-2 rounded-lg w-full ${
                  location.pathname === "/"
                    ? "bg-slate-500 text-white"
                    : "hover:bg-slate-500/50 cursor-pointer"
                }`}
              >
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <Package className="w-5 h-5" />
                  Product Details
                </span>
              </button>
              <button
                onClick={() => handleNavigation("/compare")}
                className={`p-2 rounded-lg w-full ${
                  location.pathname === "/compare"
                    ? "bg-slate-500 text-white"
                    : "hover:bg-slate-500/50 cursor-pointer"
                }`}
              >
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <ArrowLeftRight className="w-5 h-5" />
                  Compare Products
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 justify-center items-center p-4">
            <button
              className="md:block hidden hover:bg-black/20 rounded-xl p-2 border cursor-pointer"
              onClick={() => handleSidebar()}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNavigation("/")}
              className={`p-2 rounded-xl ${
                location.pathname === "/"
                  ? "bg-slate-500 text-white"
                  : "hover:bg-slate-500/50 cursor-pointer"
              }`}
            >
              <Package className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleNavigation("/compare")}
              className={`p-2 rounded-xl ${
                location.pathname === "/compare"
                  ? "bg-slate-500 text-white "
                  : "hover:bg-slate-500/50 cursor-pointer"
              }`}
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      <div className="h-[60px] flex fixed bottom-0 border-t md:hidden w-full p-2 items-center gap-2 bg-white">
        <button
          onClick={() => handleNavigation("/")}
          className={`p-2 rounded-lg w-full ${
            location.pathname === "/"
              ? "bg-slate-500 text-white"
              : "hover:bg-slate-500/50 cursor-pointer"
          }`}
        >
          <span className="flex items-center gap-2 whitespace-nowrap">
            <Package className="w-5 h-5" />
            Product Details
          </span>
        </button>
        <button
          onClick={() => handleNavigation("/compare")}
          className={`p-2 rounded-md w-full ${
            location.pathname === "/compare"
              ? "bg-slate-500 text-white"
              : "hover:bg-slate-500/50 cursor-pointer"
          }`}
        >
          <span className="flex items-center gap-2 whitespace-nowrap">
            <ArrowLeftRight className="w-5 h-5" />
            Compare Products
          </span>
        </button>
      </div>
    </>
  );
};
