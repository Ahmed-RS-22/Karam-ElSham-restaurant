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
    <div className="container mx-auto md:px-10 px-5 py-8">
      <h1 className="text-3xl font-cairo font-bold mb-6 text-center">
        سلة المشتريات
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">السلة فارغة</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, idx) => (
            <CartItem
              key={idx}
              item={item}
              onInc={() => dispatch(increaseQty(item.id))}
              onDec={() => dispatch(decreaseQty(item.id))}
              onRemove={() => dispatch(removeFromCart(item.id))}
            />
          ))}

          <div className="text-right font-bold text-xl">
            المجموع: {total} ج.م
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              تفريغ السلة
            </button>
            <button
              onClick={handleConfirmOrder}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              إتمام الطلب
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
