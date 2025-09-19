import React from "react";
import { NavLink } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--ks-brown)] text-white mt-12 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--ks-yellow)] rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[var(--ks-yellow)] rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[var(--ks-yellow)] rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        
        {/* Brand */}
        <div className="text-center md:text-right animate-fadeInLeft">
          <h3 className="text-3xl font-['Cairo'] text-[var(--ks-yellow)] font-bold animate-pulse-custom">
            كرم الشام
          </h3>
          <p className="mt-3 text-base text-[var(--ks-yellow)]/70 leading-relaxed animate-fadeInUp stagger-2">
            نقدم أشهى المأكولات الشامية والحلويات الأصيلة بأفضل جودة وخدمة.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center animate-fadeInUp">
          <h4 className="text-lg font-semibold mb-4 border-b border-[var(--ks-yellow)] inline-block pb-1 animate-fadeInUp">
            روابط سريعة
          </h4>
          <ul className="space-y-3 md:text-lg font-['cairo'] animate-fadeInUp stagger-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-[var(--ks-yellow)] hover:scale-105 inline-block ${
                    isActive ? "text-[var(--ks-yellow)] font-semibold" : ""
                  }`
                }
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-[var(--ks-yellow)] hover:scale-105 inline-block ${
                    isActive ? "text-[var(--ks-yellow)] font-semibold" : ""
                  }`
                }
              >
                القائمة
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-[var(--ks-yellow)] hover:scale-105 inline-block ${
                    isActive ? "text-[var(--ks-yellow)] font-semibold" : ""
                  }`
                }
              >
                من نحن
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-[var(--ks-yellow)] hover:scale-105 inline-block ${
                    isActive ? "text-[var(--ks-yellow)] font-semibold" : ""
                  }`
                }
              >
                تواصل
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-right animate-fadeInRight">
          <h4 className="text-lg font-semibold mb-4 border-b border-[var(--ks-yellow)] inline-block pb-1 animate-fadeInUp">
            تواصل معنا
          </h4>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2 animate-fadeInUp stagger-2 hover:text-[var(--ks-yellow)] transition-colors duration-300">
            <Phone size={16} className="text-[var(--ks-yellow)] animate-bounce-custom" /> 19509
          </p>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2 mt-2 animate-fadeInUp stagger-3 hover:text-[var(--ks-yellow)] transition-colors duration-300">
            <MapPin size={16} className="text-[var(--ks-yellow)] animate-bounce-custom" /> القاهرة، مصر
          </p>

          <div className="flex justify-center md:justify-start gap-5 mt-5 text-lg animate-fadeInUp stagger-4">
            <a
              href="#"
              className="hover:text-[var(--ks-yellow)] transition-all duration-300 transform hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-white/10"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="hover:text-[var(--ks-yellow)] transition-all duration-300 transform hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-white/10"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="hover:text-[var(--ks-yellow)] transition-all duration-300 transform hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-white/10"
            >
              <MessageCircle size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--ks-brown)]/95 py-4 text-center text-xs md:text-sm border-t border-white/10 relative z-10 animate-fadeInUp">
        © {new Date().getFullYear()}{" "}
        <span className="text-[var(--ks-yellow)] font-semibold animate-pulse-custom">كرم الشام</span> - جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
