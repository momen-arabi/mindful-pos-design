import { User, ChevronDown, UserCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 md:px-6 py-3">
      <div className="flex justify-between items-center gap-5">
        <h1 className="text-xl md:text-2xl font-semibold">Choose Category</h1>

        <div className="flex items-center gap-5" id="header-actions">
          {/* Search Bar */}
          <div className="relative w-80">
            <input type="text" placeholder="Search products..." className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Client Selection */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 focus-visible:ring-0 focus-visible:ring-offset-0">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">Walk-in Customer</p>
                    <p className="text-xs text-gray-500">Default Customer</p>
                  </div>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[200px] z-[100] fixed">
                <DropdownMenuItem>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Customer
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Walk-in Customer
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Cashier Info */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Cashier</p>
            </div>
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <UserCircle className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
