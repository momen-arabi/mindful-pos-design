
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";
import { BillsPanel } from "@/components/BillsPanel";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("coffee");

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <MainContent 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <BillsPanel />
      </div>
    </div>
  );
};

export default Index;
