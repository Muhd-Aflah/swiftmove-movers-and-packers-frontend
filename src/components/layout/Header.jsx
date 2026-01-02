import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useToggle } from "../../hooks/useToggle";
import { NAVIGATION_ITEMS } from "../../constants";
import { useBreakpoint } from "../../hooks/useMediaQuery";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, toggleMobileMenu, setTrue, setFalse] = useToggle(false);
  const { isMobile } = useBreakpoint();
  const location = useLocation();

  const handleNavLinkClick = () => {
    if (isMobile) {
      setFalse();
    }
  };

  return (
    <header className="flex items-center justify-between pt-8 pb-0 px-4 sm:px-6 lg:px-[150px] w-full">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="sr-only">Home</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-[30px]">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={handleNavLinkClick}
            className={`inline-flex items-center gap-[5px] [font-family:'Lato',Helvetica] font-medium text-sm tracking-[0] leading-[normal] cursor-pointer hover:opacity-80 transition-opacity ${
              location.pathname === item.href ? "text-simblue" : "text-black"
            }`}
          >
            {item.label}
            {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
          </Link>
        ))}
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <Button 
          asChild
          className="bg-colorsmint hover:bg-colorsmint/90 rounded-[153px] px-6 py-3 h-auto [font-family:'Lato',Helvetica] font-extrabold text-[#ffffff] text-sm text-center tracking-[0] leading-[normal]"
        >
          <Link to="/login">Sign In</Link>
        </Button>

        <Button 
          asChild
          className="bg-simblue hover:bg-simblue/90 rounded-[153px] px-6 py-3 h-auto [font-family:'Lato',Helvetica] font-extrabold text-[#ffffff] text-sm text-center tracking-[0] leading-[normal]"
        >
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <XIcon className="w-6 h-6 text-gray-700" />
        ) : (
          <MenuIcon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleNavLinkClick}
                className={`inline-flex items-center justify-between w-full [font-family:'Lato',Helvetica] font-medium text-sm tracking-[0] leading-[normal] cursor-pointer hover:opacity-80 transition-opacity py-2 ${
                  location.pathname === item.href ? "text-simblue" : "text-black"
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
              </Link>
            ))}
            
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <Button 
                asChild
                className="bg-colorsmint hover:bg-colorsmint/90 rounded-[153px] px-6 py-3 h-auto [font-family:'Lato',Helvetica] font-extrabold text-[#ffffff] text-sm text-center tracking-[0] leading-[normal] w-full"
              >
                <Link to="/login">Sign In</Link>
              </Button>

              <Button 
                asChild
                className="bg-simblue hover:bg-simblue/90 rounded-[153px] px-6 py-3 h-auto [font-family:'Lato',Helvetica] font-extrabold text-[#ffffff] text-sm text-center tracking-[0] leading-[normal] w-full"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
