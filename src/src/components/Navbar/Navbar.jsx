import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.webp"; 
import { Instagram, Linkedin, ChevronDown, Check } from "lucide-react";
import { BsTwitterX } from "react-icons/bs"; 
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logos from "../../assets/logos.png"

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Feautures", href: "/" },
  { name: "About Us", href: "/" },
];

const LAWSUIT_TYPES = [

];

function DesktopNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const getCurrentPage = () => {
    const path = window.location.pathname;
    if (path === "/" || path === "/  ") return "Home";
    if (path === "/Pricing") return "Pricing";
    if (path === "/Feautures") return "Feautures";
    if (path === "/About Us") return "About Us";
    const isServicePage = LAWSUIT_TYPES.some(
      (lawsuit) => lawsuit.href === path
    );
    if (isServicePage) return "Services";
    return "Home";
  };

  const [activePage, setActivePage] = useState(getCurrentPage());
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 150); 
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-white flex items-center justify-between px-[7%] py-3">
      <div className="flex items-center">
        <Link to="/">
          <img src={logos} alt="Logo" className="h-20 w-32 object-contain" />
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    ref={buttonRef}
                    className={`font-semibold hover:no-underline transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                      activePage === link.name
                        ? "text-[#000000]"
                        : "text-gray-600"
                    } hover:text-[#727272]`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    ref={dropdownRef}
                    className={`absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200 z-50 transition-all duration-200 ease-in-out ${
                      dropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="py-2">
                      {LAWSUIT_TYPES.map((lawsuit, index) => (
                        <a
                          key={lawsuit.name}
                          href={lawsuit.href}
                          className="group block px-4 py-3 text-sm text-gray-700 hover:text-[#0A1F8F] hover:bg-gray-50 transition-all duration-200 relative flex items-center justify-between"
                          style={{
                            animationDelay: `${index * 20}ms`,
                          }}
                        >
                          <span className="font-medium">{lawsuit.name}</span>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="w-5 h-5 bg-[#0A1F8F] rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className={`font-semibold hover:underline transition-all duration-200 ${
                    activePage === link.name
                      ? "text-[#0A1F8F]"
                      : "text-gray-600"
                  } hover:text-[#0A1F8F]`}
                  onClick={() => setActivePage(link.name)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <div className="bg-[#0a0a0a] rounded-lg px-6 py-3 text-white text-[30px] font-semibold shadow font-quicksand hover:bg-[#EDC14A] hover:text-[#0A1F8F] transition-colors duration-200">
          <div className="text-xs" onClick={() => navigate("/SignUpPage")}>
            Sign Up
          </div>
        </div>
      </div>
    </nav>
  );
}



const Navbar = () => {
  return (
    <header>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      
    </header>
  );
};

export default Navbar;
