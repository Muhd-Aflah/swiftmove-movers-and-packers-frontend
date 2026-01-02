import { HeroSection } from "../sections/HeroSection";
import { ServicesSection } from "../sections/ServicesSection";
import { OperationModeSection } from "../sections/OperationModeSection";
import { WarehouseMapSection } from "../sections/WarehouseMapSection";
import { FooterSection } from "../sections/FooterSection";

export function HomePage() {
  return (
    <div className="bg-[#ffffff] overflow-hidden w-full relative">
      {/* Background Decorative Images */}
      <img
        className="absolute top-0 left-0 w-[499px] h-[873px] pointer-events-none z-0 lg:block hidden"
        alt="Background decoration"
        src="/group-7031.png"
      />

      <img
        className="absolute top-[179px] right-[100px] w-[110px] h-[110px] pointer-events-none z-0 lg:block hidden"
        alt="Background decoration"
        src="/group-6922.png"
      />

      <img
        className="absolute top-0 left-px w-[348px] h-[165px] pointer-events-none z-0 lg:block hidden"
        alt="Background decoration"
        src="/gemini-generated-image-txpkkltxpkkltxpk-removebg-preview-2.png"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <OperationModeSection />
        <WarehouseMapSection />
        <ServicesSection />
      </div>
    </div>
  );
}
