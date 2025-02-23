import { Plus, Minus, Trash2, Pencil, Coins, CreditCard, Wallet, User, ChevronDown, ShoppingCart, Receipt } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const BillsPanel = () => {
  return (
    <div className="w-full md:w-[400px] bg-white border-l border-gray-200 p-6 overflow-auto">
      <div className="mb-6 flex items-center gap-2">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-primary" />
        </div>
        <div className="text-left">
          <p className="text-xl font-medium">Eloise's Order</p>
          <p className="text-xs text-gray-500">Order Number: #005</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 flex-1 w-full focus-visible:ring-0 focus-visible:ring-offset-0">
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Select Table</p>
              </div>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuItem>Table 01</DropdownMenuItem>
            <DropdownMenuItem>Table 02</DropdownMenuItem>
            <DropdownMenuItem>Table 03</DropdownMenuItem>
            <DropdownMenuItem>Table 04</DropdownMenuItem>
            <DropdownMenuItem>Table 05</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 flex-1 w-full focus-visible:ring-0 focus-visible:ring-offset-0">
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Order Type</p>
              </div>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem>Dine In</DropdownMenuItem>
            <DropdownMenuItem>Take Away</DropdownMenuItem>
            <DropdownMenuItem>Delivery</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4 mb-6">
        <OrderItem name="Beef Crowich" price={5.5} quantity={1} image="" />
        <OrderItem name="Sliced Black Forest" price={5.0} quantity={2} image="" />
      </div>

      <Separator className="mb-4" />

      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>$ 20.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 text-xs">Tax (10%)</span>
          <span className="text-gray-500 text-xs">$ 2.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600 text-xs">Discount</span>
          <span className="text-green-600 text-xs">-$ 1.00</span>
        </div>
        <div className="flex justify-between pt-2">
          <span className="font-semibold">TOTAL</span>
          <span>$ 21.00</span>
        </div>
      </div>

      <Separator className="mb-4" />

      <div>
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Payment Method</h3>
        <div className="grid grid-cols-3 gap-2 mb-4 md:mb-6">
          <PaymentMethod label="Cash" icon={Coins} active />
          <PaymentMethod label="Card" icon={CreditCard} />
          <PaymentMethod label="Wallet" icon={Wallet} />
        </div>
        <Button className="w-full" size="lg">
          <Receipt className="w-5 h-5 mr-0" />
          Place Order
        </Button>
      </div>
    </div>
  );
};

interface OrderItemProps {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const OrderItem = ({ name, price, quantity, image }: OrderItemProps) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
      <div className="w-16 h-16 bg-gray-50 rounded-lg flex-shrink-0">
        {image ? <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" /> : <PlaceholderImage className="w-full h-full object-cover rounded-lg" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-sm text-gray-500">${price.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
            <Minus className="w-5 h-5" />
          </button>
          <span className="w-12 text-sm text-center font-medium">{quantity}</span>
          <button className="text-gray-400 hover:text-green-500 transition-colors p-1">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
      <button className="text-red-500 hover:text-red-600 transition-colors p-1">
        <Trash2 className="w-5 h-5" />
      </button>
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
      className={`h-auto p-2 flex flex-col items-center justify-center gap-1 ${
        active ? "bg-primary/10 border-primary text-primary hover:bg-primary/20" : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-700"
      }`}
    >
      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" />}
      <span className="text-xs md:text-sm">{label}</span>
    </Button>
  );
};

export default BillsPanel;
