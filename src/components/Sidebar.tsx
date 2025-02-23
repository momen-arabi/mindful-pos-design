
import { Home, Coffee, FileText, Settings, Menu } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 animate-slideIn">
      <div className="mb-8">
        <Menu className="w-6 h-6 text-gray-600" />
      </div>
      <nav className="flex flex-col gap-6">
        <button className="p-2 rounded-lg bg-primary text-white">
          <Home className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <Coffee className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <FileText className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <Settings className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
};
