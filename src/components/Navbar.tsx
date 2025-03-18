import { Moon, User } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full fixed md:relative bg-white">
      <div className="border-b p-3">
        <div className="flex max-w-7xl mx-auto justify-end gap-4">
          <Moon className="border rounded-full p-2 w-10 h-10" />
          <User className="border rounded-full p-2 w-10 h-10" />
        </div>
      </div>
    </div>
  );
};
