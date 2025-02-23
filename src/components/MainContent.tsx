
import { Coffee, IceCream, Pizza, Burger, Salad } from "lucide-react";

const categories = [
  { id: "coffee", icon: Coffee, label: "Coffee" },
  { id: "icecream", icon: IceCream, label: "Ice Cream" },
  { id: "pizza", icon: Pizza, label: "Pizza" },
  { id: "burger", icon: Burger, label: "Burger" },
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
    <main className="flex-1 p-6 overflow-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold mb-6">Choose Category</h1>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex flex-col items-center p-4 rounded-xl min-w-[100px] transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <category.icon className="w-6 h-6 mb-2" />
              <span className="text-sm">{category.label}</span>
            </button>
          ))}
        </div>
      </header>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Coffee Menu</h2>
          <span className="text-gray-500">12 Coffee Result</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    <div className="bg-white rounded-xl p-4 animate-fadeIn">
      <div className="flex gap-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="font-semibold mb-2">{name}</h3>
          <p className="text-gray-500 text-sm mb-4">
            Rich, creamy and deliciously smooth
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold">${price.toFixed(2)}</span>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Add to order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
