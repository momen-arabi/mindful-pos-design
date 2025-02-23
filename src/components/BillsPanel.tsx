
import { CreditCard } from "lucide-react";

export const BillsPanel = () => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6 animate-slideIn">
      <h2 className="text-xl font-semibold mb-6">Bills</h2>
      
      <div className="space-y-4 mb-6">
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

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">$15.01</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total</span>
          <span className="font-semibold text-lg">$15.01</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
        <div className="grid grid-cols-3 gap-2 mb-6">
          <PaymentMethod label="Cash" active />
          <PaymentMethod label="Card" icon={CreditCard} />
          <PaymentMethod label="Wallet" />
        </div>
        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
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
        <span className="text-sm text-gray-600">x{quantity}</span>
        <span>{name}</span>
      </div>
      <span className="font-semibold">${(price * quantity).toFixed(2)}</span>
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
      {Icon && <Icon className="w-5 h-5" />}
      <span className="text-sm">{label}</span>
    </button>
  );
};
