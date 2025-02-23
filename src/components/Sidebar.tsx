
import { Home, Coffee, FileText, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  return (
    <div className="w-full md:w-16 h-16 md:h-screen bg-white border-b md:border-r border-gray-200 flex md:flex-col items-center justify-between md:justify-start py-2 md:py-4 px-4 md:px-0 animate-slideIn">
      <div className="md:mb-8">
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6 text-gray-600" />
        </Button>
      </div>
      <nav className="flex md:flex-col gap-4 md:gap-6">
        <Button size="icon" variant="default">
          <Home className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
        <Button size="icon" variant="ghost">
          <Coffee className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
        <Button size="icon" variant="ghost">
          <FileText className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
        <Button size="icon" variant="ghost">
          <Settings className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </nav>
    </div>
  );
};
