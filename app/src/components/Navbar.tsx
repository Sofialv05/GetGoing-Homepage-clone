import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigations = [
    { id: 1, name: "Beranda", href: "/" },
    { id: 2, name: "Servis Kami", href: "/servis-kami" },
    { id: 3, name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div
        className={`
      ${
        isScrolled
          ? "bg-gray-500 bg-transparent rounded-full backdrop-blur-md shadow-sm py-2 fixed top-6 transition-all duration-300 z-50 w-full animate-flyIn"
          : "bg-transparent py-4"
      } flex justify-between py-10 px-10`}
      >
        {/* logo */}
        <div className="flex items-center">
          <Link to="/">GoGoTrip</Link>
        </div>
        {/* search bar */}
        <div id="search-bar">
          <form>
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Cari negara, kota atau guide"
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-red-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full">
                  <Search size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* navigations */}
        <div className="">
          <ul className="flex items-center space-x-6">
            {navigations.map((navigation, i) => {
              return (
                <li key={i}>
                  <NavLink
                    to={navigation.href}
                    className={({ isActive }) =>
                      `${isActive ? "font-bold " : "font-medium"} text-red-500`
                    }
                  >
                    {navigation.name}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  (isActive ? "font-extrabold text-red-700" : "font-medium") +
                  "text-red-600"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
