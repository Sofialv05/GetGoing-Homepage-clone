import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
    <nav className="container">
      <div
        className={`${
          isScrolled
            ? "top-6 animate-flyIn self-center rounded-full shadow-sm backdrop-blur-3xl transition-all duration-300"
            : ""
        } fixed z-50 flex w-[91rem] items-center justify-between bg-transparent px-10 py-6`}
      >
        {/* logo and search */}
        <div className="flex flex-1 items-center gap-4">
          <Link
            to="/"
            className="whitespace-nowrap text-4xl font-extrabold text-red-600"
          >
            GoGoTrip
          </Link>
          {/* search bar */}
          <form className="w-full max-w-2xl">
            <div className="w-full">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Cari negara, kota atau guide"
                  className="search-bar-shadow w-full rounded-full border border-gray-300 px-4 py-2 focus:border-red-500 focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-red-600 p-2 text-white">
                  <Search size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* navigations */}
        <div className="flex items-center">
          <ul className="flex items-center gap-6 text-xl">
            {navigations.map((navigation, i) => (
              <li key={i} className="flex items-center">
                <NavLink
                  to={navigation.href}
                  className={({ isActive }) =>
                    `${isActive ? "font-bold" : "font-medium"} text-red-500`
                  }
                >
                  {navigation.name}
                </NavLink>
              </li>
            ))}
            <li className="flex items-center">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${isActive ? "font-extrabold text-red-700" : "font-semibold"}`
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
