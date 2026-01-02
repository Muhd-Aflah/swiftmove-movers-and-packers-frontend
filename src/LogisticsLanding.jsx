import { ContactSection as FooterSection } from "./components/features/Contact/ContactSection";
import { Header as HeaderSection } from "./components/layout/Header";
import { HeroSection } from "./components/features/Hero/HeroSection";
import { OperationsSection as OperationModeSection } from "./components/features/Operations/OperationsSection";
import { Footer as SearchBarSection } from "./components/layout/Footer";
import { ServicesSection } from "./components/features/Services/ServicesSection";
import { WarehouseSection as WarehouseMapSection } from "./components/features/Warehouse/WarehouseSection";

export const LogisticsLanding = () => {
  return (
    <div className="bg-[#ffffff] overflow-hidden w-full relative">
      <img
        className="absolute top-0 left-0 w-[499px] h-[873px] pointer-events-none z-0 lg:block hidden"
        alt="Group"
        src="/group-7031.png"
      />

      <img
        className="absolute top-[179px] right-[100px] w-[110px] h-[110px] pointer-events-none z-0 lg:block hidden"
        alt="Group"
        src="/group-6922.png"
      />

      <img
        className="absolute top-0 left-px w-[348px] h-[165px] pointer-events-none z-0 lg:block hidden"
        alt="Gemini generated"
        src="/gemini-generated-image-txpkkltxpkkltxpk-removebg-preview-2.png"
      />

      <div className="relative z-10 flex flex-col w-full">
        <HeaderSection />
        <HeroSection />
        <OperationModeSection />
        <WarehouseMapSection />
        <ServicesSection />
        <FooterSection />
        <SearchBarSection />
      </div>
    </div>
  );
};
