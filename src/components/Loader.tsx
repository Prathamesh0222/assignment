import { ShoppingBag } from "lucide-react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center bg-white h-screen">
      <div className="bg-slate-500/60 rounded-full p-2 animate-pulse">
        <ShoppingBag className="w-12 h-12 text-white" />
      </div>
    </div>
  );
};
