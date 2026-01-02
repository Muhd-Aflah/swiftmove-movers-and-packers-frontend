import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useState } from "react";

const navigationItems = [
  { label: "Services", hasDropdown: true },
  { label: "Solutions", hasDropdown: false },
  { label: "Industries", hasDropdown: false },
  { label: "Insights", hasDropdown: false },
];

export const HeaderSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between pt-8 pb-0 px-4 sm:px-6 lg:px-[150px] w-full">
      {/* Logo placeholder - you can add your logo here */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-simblue rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-[30px]">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className="inline-flex items-center gap-[5px] [font-family:'Lato',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] cursor-pointer hover:opacity-80 transition-opacity"
          >
            {item.label}
            {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
          </button>
        ))}
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <Button className="bg-colorsmint hover:bg-colorsmint/90 rounded-[153px] px-6 py-3 h-auto [font-family:'Lato',Helvetica] font-extrabold text-[#ffffff] text-sm text-center tracking-[0] leading-[normal]">
          Sign In
        </Button>

        <Button className="bg-simblue hover:bg-simblue/90 rounded-[153px] px-6 py-3 h-auto [font-family:'Lato',Helvetica] font-extrabold text-[#ffffff] text-sm text-center tracking-[0] leading-[normal]">
          Sign Up
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
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="inline-flex items-center justify-between w-full [font-family:'Lato',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] cursor-pointer hover:opacity-80 transition-opacity py-2"
              >
                {item.label}
                {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
              </button>
            ))}
            
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <Button className="bg-colorsmint hover:bg-colorsmint/90 rounded-[153px] px-6 py-3 h-auto [font-family:'Lato',Helvetica] font-extrabold text-[#ffffff] text-sm text-center tracking-[0] leading-[normal] w-full">
                Sign In
              </Button>

              <Button className="bg-simblue hover:bg-simblue/90 rounded-[153px] px-6 py-3 h-auto [font-family:'Lato',Helvetica] font-extrabold text-[#ffffff] text-sm text-center tracking-[0] leading-[normal] w-full">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
