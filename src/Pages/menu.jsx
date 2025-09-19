// Menu.jsx
import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuCard from "../components/MenuCard";
import CategoryList from "../components/CategoryList";
import { addToCart, removeFromCart } from "../Redux/slices/cartSlice";
import { menuData } from "../Data/menuData";
import { fetchFoodImages } from "../utils/images";

export default function Menu() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const cart = useSelector((state) => state.cart.cart);

  const categories = useMemo(() => Object.keys(menuData), []);

  // نجهز نسخة من الـ menuData مع id
  const menuWithIds = useMemo(() => {
    let counter = 0;
    const newMenu = {};
    for (const cat of categories) {
      if (counter > 30) counter = 0;
      newMenu[cat] = menuData[cat].map((item) => ({
        ...item,
        id: ++counter, // يولد id لكل item
      }));
    }
    return newMenu;
  }, [categories]);

  useEffect(() => {
    fetchFoodImages().then((imgs) => setImages(imgs));
  }, []);

  return (
    <div className="max-w-full mx-auto md:mx-10 px-4 py-8">
      <h1 className="text-3xl font-cairo font-bold text-center mb-6">
        قائمة الطعام
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6  items-center justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-full md:w-1/3"
          placeholder="ابحث عن طبق..."
        />
        <CategoryList
          categories={categories}
          active={category}
          onChange={setCategory}
        />
      </div>

      {categories
        .filter((cat) => !category || cat === category)
        .map((cat) => {
          const filteredItems = menuWithIds[cat].filter(
            (item) =>
              item.name.includes(search) ||
              item.name.toLowerCase().includes(search.toLowerCase())
          );

          if (search && filteredItems.length === 0) {
            return null;
          }

          return (
            <div key={cat} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ks-brown">
                {cat}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {filteredItems.map((item) => (
                  <MenuCard
                    key={item.id}
                    item={{
                      ...item,
                      image: images[item.id - 1],
                    }}
                    isInCart={cart.some((c) => c.id === item.id)} // هنا نحدد إذا كان في السلة
                    onAdd={(it) => dispatch(addToCart(it))}
                    onRemove={(it) => dispatch(removeFromCart(it))}
                  />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
