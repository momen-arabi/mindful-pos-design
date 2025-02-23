
import { CreditCard } from "lucide-react";

export const BillsPanel = () => {
  return (
    <div className="w-full md:w-80 bg-white border-t md:border-l border-gray-200 p-4 md:p-6 overflow-auto animate-slideIn">
      <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Bills</h2>
      
      <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
        <OrderItem
          name="Caramel Frappuccino"
          quantity={1}
          price={5.99}
        />
        <OrderItem
          name="Chocolate Frappuccino"
          quantity={2}
          price={4.51}
        />
      </div>

      <div className="border-t border-gray-200 pt-4 mb-4 md:mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600 text-sm md:text-base">Subtotal</span>
          <span className="font-semibold text-sm md:text-base">$15.01</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 text-sm md:text-base">Total</span>
          <span className="font-semibold text-base md:text-lg">$15.01</span>
        </div>
      </div>

      <div>
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Payment Method</h3>
        <div className="grid grid-cols-3 gap-2 mb-4 md:mb-6">
          <PaymentMethod label="Cash" active />
          <PaymentMethod label="Card" icon={CreditCard} />
          <PaymentMethod label="Wallet" />
        </div>
        <button className="w-full bg-primary text-white py-2.5 md:py-3 rounded-lg text-sm md:text-base hover:bg-primary/90 transition-colors">
          Print Bills
        </button>
      </div>
    </div>
  );
};

interface OrderItemProps {
  name: string;
  quantity: number;
  price: number;
}

const OrderItem = ({ name, quantity, price }: OrderItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xs md:text-sm text-gray-600">x{quantity}</span>
        <span className="text-sm md:text-base">{name}</span>
      </div>
      <span className="font-semibold text-sm md:text-base">${(price * quantity).toFixed(2)}</span>
    </div>
  );
};

interface PaymentMethodProps {
  label: string;
  icon?: React.ElementType;
  active?: boolean;
}

const PaymentMethod = ({ label, icon: Icon, active }: PaymentMethodProps) => {
  return (
    <button
      className={`p-2 rounded-lg border flex flex-col items-center justify-center gap-1 transition-colors ${
        active
          ? "border-primary bg-primary/5 text-primary"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" />}
      <span className="text-xs md:text-sm">{label}</span>
    </button>
  );
};
