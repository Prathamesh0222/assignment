import { ShoppingBag, User } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 md:relative bg-gray-50 z-10">
      <div className="border-b border-black/20 p-3">
        <div className="flex max-w-7xl mx-auto justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-slate-500/60 rounded-full p-2">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-semibold">MockReview</h1>
          </div>
          <div className="flex gap-2">
            <User className="border border-black/20 rounded-full p-2 w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
