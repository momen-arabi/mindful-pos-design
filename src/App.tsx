import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Header } from "@/components/Header";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import BillsPanel from "@/components/BillsPanel";

const queryClient = new QueryClient();

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("coffee");

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-0">
        <Header />
        <div className="flex flex-1 min-h-0">
          <MainContent selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <BillsPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
