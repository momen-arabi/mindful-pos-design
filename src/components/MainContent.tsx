import { Coffee, Pizza, Salad, LayoutGrid, Plus, Settings2, Sandwich, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlaceholderImage } from "./PlaceholderImage";

const categories = [
  { icon: LayoutGrid, label: "All Menu", items: "110 Items" },
  { icon: Coffee, label: "Coffee", items: "20 Items", isActive: true },
  { icon: Cake, label: "Cakes", items: "20 Items" },
  { icon: Pizza, label: "Pizza", items: "20 Items" },
  { icon: Salad, label: "Salads", items: "20 Items" },
  { icon: Sandwich, label: "Sandwich", items: "20 Items" },
];

interface MainContentProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const MainContent = ({ selectedCategory, onCategoryChange }: MainContentProps) => {
  return (
    <main className="flex-1 p-4 md:p-6 overflow-auto min-h-0">
      <header className="mb-6 md:mb-8">
        <div className="flex gap-6 pb-4 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.label}
              variant="ghost"
              className={`flex flex-col items-center p-4 h-auto min-w-[100px] rounded-xl transition-colors ${
                category.isActive ? "bg-blue-500 text-white [&_span]:text-white [&_svg]:text-white hover:bg-blue-600" : "bg-white hover:bg-gray-100"
              }`}
            >
              <category.icon className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">{category.label}</span>
              <span className="text-xs text-gray-500">{category.items}</span>
            </Button>
          ))}
        </div>
      </header>

      <section>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold">Coffee Menu</h2>
          <span className="text-sm md:text-base text-gray-500">12 Coffee Result</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <ProductCard name="Caramel Frappuccino" price={5.99} image="" />
          <ProductCard name="Chocolate Frappuccino" price={4.51} image="" />
        </div>
      </section>
    </main>
  );
};

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <Card className="animate-fadeIn">
      <CardContent className="p-3 md:p-4">
        <div className="flex gap-3 md:gap-4">
          {image ? <img src={image} alt={name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg" /> : <PlaceholderImage className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg" />}
          <div className="flex-1">
            <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{name}</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-4">Rich, creamy and deliciously smooth</p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-sm md:text-base">${price.toFixed(2)}</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="h-8 md:h-9 border-primary bg-transparent hover:bg-primary/10 text-primary hover:text-primary">
                  <Settings2 className="w-4 h-4" />
                  Customize
                </Button>
                <Button size="sm" className="h-8 md:h-9 text-primary-foreground">
                  <Plus className="w-4 h-4" />
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MainContent;
