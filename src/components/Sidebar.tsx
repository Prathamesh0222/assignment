import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
              <button className="border p-2 rounded-xl w-full">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <Package className="w-5 h-5" />
                  Product Details
                </span>
              </button>
              <button className="border p-2 rounded-xl w-full">
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
            <button>
              <Package className="w-5 h-5" />
            </button>
            <button>
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      <div className="h-[60px] flex fixed bottom-0 border-t md:hidden w-full p-2 items-center gap-2">
        <button className="border p-2 rounded-xl w-full">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <Package className="w-5 h-5" />
            <h1>Product Details</h1>
          </span>
        </button>
        <button className="border p-2 rounded-xl w-full">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <ArrowLeftRight className="w-5 h-5" />
            <h1>Compare Products</h1>
          </span>
        </button>
      </div>
    </>
  );
};
