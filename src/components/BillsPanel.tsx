
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

      <Separator className="mb-4" />
      
      <div className="mb-4 md:mb-6">
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
        <Button className="w-full" size="lg">
          Print Bills
        </Button>
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
    <Button
      variant={active ? "default" : "outline"}
      className="h-auto p-2 flex flex-col items-center justify-center gap-1"
    >
      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" />}
      <span className="text-xs md:text-sm">{label}</span>
    </Button>
  );
};
