
# 🍴 Karam El-Sham Restaurant App

A modern **React + Redux** web application for browsing a restaurant menu, managing a shopping cart, and enjoying a smooth, professional user experience.

---

## 🚀 Features

### 🏠 Home Page
- Hero section with restaurant name, slogan, and call-to-action.  
- Responsive Hero image.  
- Footer with:  
  - Quick navigation links.  
  - Social media icons (Facebook, Instagram, WhatsApp).  
  - Contact info (Phone, Location).  
  - Embedded Google Map.  

---

### 📋 Menu Page
- **Search bar** to filter dishes.  
- **Category filter** for browsing by type.  
- **Menu cards** with:  
  - Dish name, description, image.  
  - Add / Remove from cart.  
- **Image handling**:  
  - Uses **Foodish API** for food images.  
  - Limited to 30 images → solved with `id % images.length`.  
- **Popup modal** for viewing dish images in full size.  

---

### 🛒 Shopping Cart
- Managed via **Redux Toolkit**.  
- Add, increase, decrease, or remove items.  
- Clear all cart items.  
- **Toast notifications** for every action:  
  - Success → item added.  
  - Error → item removed.  
  - Warning → quantity decreased.  
- Cart total displayed dynamically.  

---

### 🔔 Notifications
- Powered by **react-hot-toast**.  
- Customizable timing, colors, and messages.  
- All messages localized (Arabic).  

---

### ⏳ Global Loading Page
- Fullscreen loader with spinner + emoji 🍴.  
- Smooth **fade in / fade out animation**.  
- Shown on initial app load or data fetch.  

---

## 🛠 Tech Stack
- **React** + React Router  
- **Redux Toolkit** (state management)  
- **TailwindCSS** (responsive styling)  
- **Lucide-react** (icons)  
- **Foodish API** (dish images)  
- **react-hot-toast** (toast notifications)  
- **Google Maps Embed** (location)  
