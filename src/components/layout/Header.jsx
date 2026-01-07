import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useToggle } from "../../hooks/useToggle";
import { NAVIGATION_ITEMS } from "../../constants";
import { useBreakpoint } from "../../hooks/useMediaQuery";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, toggleMobileMenu, , setFalse] = useToggle(false);
  const { isMobile } = useBreakpoint();
  const location = useLocation();

  const handleNavLinkClick = () => {
    if (isMobile) setFalse();
  };

  return (
    <header className="w-full py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/swiftmove-logo.png"
            alt="SwiftMove"
            className="h-14 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleNavLinkClick}
              className={`flex items-center gap-1 transition-colors ${
                location.pathname === item.href
                  ? "text-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
            </Link>
          ))}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="px-5 py-2 rounded-lg bg-gray-900 text-white">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild className="px-5 py-2 rounded-lg bg-blue-600 text-white">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <nav className="flex flex-col p-6 gap-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleNavLinkClick}
                  className={`flex items-center justify-between text-sm font-medium ${
                    location.pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-800"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
