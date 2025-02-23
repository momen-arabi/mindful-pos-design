
import { Coffee, IceCream, Pizza, Salad } from "lucide-react";

const categories = [
  { id: "coffee", icon: Coffee, label: "Coffee" },
  { id: "icecream", icon: IceCream, label: "Ice Cream" },
  { id: "pizza", icon: Pizza, label: "Pizza" },
  { id: "salad", icon: Salad, label: "Salad" },
];

interface MainContentProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const MainContent = ({
  selectedCategory,
  onCategoryChange,
}: MainContentProps) => {
  return (
    <main className="flex-1 p-4 md:p-6 overflow-auto min-h-0">
      <header className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Choose Category</h1>
        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex flex-col items-center p-3 md:p-4 rounded-xl min-w-[80px] md:min-w-[100px] transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <category.icon className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <span className="text-xs md:text-sm">{category.label}</span>
            </button>
          ))}
        </div>
      </header>

      <section>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold">Coffee Menu</h2>
          <span className="text-sm md:text-base text-gray-500">12 Coffee Result</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <ProductCard
            name="Caramel Frappuccino"
            price={5.99}
            image="/lovable-uploads/4a74db0d-c27a-4168-8016-c25172575648.png"
          />
          <ProductCard
            name="Chocolate Frappuccino"
            price={4.51}
            image="/lovable-uploads/4a74db0d-c27a-4168-8016-c25172575648.png"
          />
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
    <div className="bg-white rounded-xl p-3 md:p-4 animate-fadeIn">
      <div className="flex gap-3 md:gap-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{name}</h3>
          <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-4">
            Rich, creamy and deliciously smooth
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-sm md:text-base">${price.toFixed(2)}</span>
            <button className="bg-primary text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base hover:bg-primary/90 transition-colors">
              Add to order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
