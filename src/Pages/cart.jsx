import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty, clearCart } from "../Redux/slices/cartSlice";
import CartItem from "../components/CartItem";
import toast from "react-hot-toast";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s.cart);
  const total = cart.reduce((acc, it) => acc + it.price * it.qty, 0);

  // 📌 منطق تأكيد الطلب
  const handleConfirmOrder = () => {
    if (cart.length === 0) {
      toast.error("السلة فارغة ❌", { duration: 2000 });
      return;
    }

    toast.success("✅ تم تأكيد الطلب بنجاح!", { duration: 3000 });
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto md:px-10 px-5 py-8 animate-fadeInUp">
      <h1 className="text-3xl font-cairo font-bold mb-6 text-center gradient-text animate-fadeInUp">
        سلة المشتريات
      </h1>
      {cart.length === 0 ? (
        <div className="text-center py-16 animate-fadeInUp">
          <div className="text-6xl mb-4 animate-bounce-custom">🛒</div>
          <p className="text-xl text-gray-500 mb-4">السلة فارغة</p>
          <p className="text-gray-400">أضف بعض الأطباق الشهية من القائمة</p>
        </div>
      ) : (
        <div className="space-y-6 animate-fadeInUp stagger-2">
          {cart.map((item, idx) => (
            <CartItem
              key={idx}
              item={item}
              onInc={() => dispatch(increaseQty(item.id))}
              onDec={() => dispatch(decreaseQty(item.id))}
              onRemove={() => dispatch(removeFromCart(item.id))}
            />
          ))}

          <div className="bg-gradient-to-r from-[var(--ks-yellow)] to-[var(--ks-brown)] text-white p-6 rounded-2xl shadow-lg animate-fadeInUp stagger-3">
            <div className="text-right font-bold text-2xl animate-pulse-custom">
              المجموع: {total} ج.م
            </div>
          </div>

          <div className="flex justify-end gap-4 animate-fadeInUp stagger-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 btn-animated active:scale-95"
            >
              تفريغ السلة
            </button>
            <button
              onClick={handleConfirmOrder}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 btn-animated active:scale-95 shadow-lg hover:shadow-xl"
            >
              إتمام الطلب
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
