import React from "react";
import { NavLink } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--ks-brown)] text-white mt-12">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div className="text-center md:text-right">
          <h3 className="text-3xl font-['Cairo'] text-[var(--ks-yellow)] font-bold">
            كرم الشام
          </h3>
          <p className="mt-3 text-base text-[var(--ks-yellow)]/70 leading-relaxed">
            نقدم أشهى المأكولات الشامية والحلويات الأصيلة بأفضل جودة وخدمة.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 border-b border-[var(--ks-yellow)] inline-block pb-1">
            روابط سريعة
          </h4>
          <ul className="space-y-3 md:text-lg  font-['cairo']">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition hover:text-[var(--ks-yellow)] ${
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
                  `transition hover:text-[var(--ks-yellow)] ${
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
                  `transition hover:text-[var(--ks-yellow)] ${
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
                  `transition hover:text-[var(--ks-yellow)] ${
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
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4 border-b border-[var(--ks-yellow)] inline-block pb-1">
            تواصل معنا
          </h4>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2">
            <Phone size={16} className="text-[var(--ks-yellow)]" /> 19509
          </p>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2 mt-2">
            <MapPin size={16} className="text-[var(--ks-yellow)]" /> القاهرة، مصر
          </p>

          <div className="flex justify-center md:justify-start gap-5 mt-5 text-lg">
            <a
              href="#"
              className="hover:text-[var(--ks-yellow)] transition transform hover:scale-110"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="hover:text-[var(--ks-yellow)] transition transform hover:scale-110"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="hover:text-[var(--ks-yellow)] transition transform hover:scale-110"
            >
              <MessageCircle size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--ks-brown)]/95 py-4 text-center text-xs md:text-sm border-t border-white/10">
        © {new Date().getFullYear()}{" "}
        <span className="text-[var(--ks-yellow)] font-semibold">كرم الشام</span> - جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
