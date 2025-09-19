import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 📌 Pages
import Home from "./Pages/home";
import Menu from "./Pages/menu";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Cart from "./Pages/Cart";
import Error from "./Pages/error";
import LoadingPage from "./components/loadingPage";
// 🔔 Toast
import { Toaster } from "react-hot-toast";
import { lazy, Suspense, useEffect, useState } from "react";

function App() {
  const Home = lazy(() => import("./Pages/home"));
  const Menu = lazy(() => import("./Pages/menu"));
  // src/App.jsx
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Delay hiding loader after fade-out animation
      const fadeOutTimer = setTimeout(() => setShowLoader(false), 700);
      return () => clearTimeout(fadeOutTimer);
    }
  }, [loading])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* 🔝 Navbar ثابت */}
      <Navbar />

      {/* 🌍 Main Content */}
      <main className="flex-grow">
        <Suspense fallback={<LoadingPage></LoadingPage>}>
     {showLoader && <LoadingPage visible={loading} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </Suspense>
      </main>

      {/* 🔚 Footer ثابت */}
      <Footer />

      {/* 🔔 Toast Notifications */}
      <Toaster
  position="top-center"
  reverseOrder={false}
  toastOptions={{
    className: "font-['cairo']",
    duration:1000,
    style: {
      background: "#fff",
      color: "#333",
      borderRadius: "12px",
      padding: "12px 16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    success: {
      style: {
        background: "#10B981",
        color: "white",
      },
      iconTheme: {
        primary: "white",
        secondary: "#10B981",
      },
    },
    error: {
      style: {
        background: "#EF4444",
        color: "white",
      },
      iconTheme: {
        primary: "white",
        secondary: "#EF4444",
      },
    },
  }}
/>
    </div>
  );
}

export default App;
