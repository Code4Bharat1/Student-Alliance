import CartSummary from "@/components/checkout/cartsummary";
import CheckoutForm from "@/components/checkout/checkout";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-fade-in-up">
       <CheckoutForm/>
       <CartSummary/>
      </div>
    </div>
  );
}
