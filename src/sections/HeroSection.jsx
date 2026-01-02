import { Button } from "../components/ui/button";


export const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex flex-col items-start justify-center gap-8 lg:gap-[50px] flex-1 w-full lg:w-auto">
            <div className="flex flex-col items-start gap-6 w-full">
              <h1 className="w-full [font-family:'Lato',Helvetica] font-normal text-3xl sm:text-4xl lg:text-[40px] tracking-[0] leading-tight lg:leading-10">
                <span className="font-semibold text-[#141414] block">
                  quick &amp; reliable{" "}
                </span>
                <span className="font-bold text-[#0088ff] text-4xl sm:text-5xl lg:text-5xl block">
                  warehousing{" "}
                </span>
                <span className="font-bold text-[#0088ff] text-4xl sm:text-5xl lg:text-5xl block">and</span>
                <span className="font-bold text-[#0088ff] text-4xl sm:text-5xl lg:text-5xl block">
                  {" "}
                  logistics{" "}
                </span>
                <span className="font-semibold text-[#141414] text-3xl sm:text-4xl lg:text-[40px] inline">solution</span>
                <span className="font-bold text-[#141414] text-3xl sm:text-4xl lg:text-[40px] inline">.</span>
              </h1>

              <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#333333] text-sm sm:text-base lg:text-sm tracking-[0] leading-[21px] lg:leading-[21px]">
                ShipUp delivers an unparalleled customer service through dedicated
                customer teams, engaged people working in an agile culture, and a
                global footprint
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button className="bg-simblue hover:bg-simblue/90 rounded-xl px-8 py-4 h-auto w-full sm:w-auto">
                <span className="[font-family:'Lato',Helvetica] font-extrabold text-[#ffffff] text-sm">
                  Join Now
                </span>
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              className="w-full max-w-[400px] sm:max-w-[500px] lg:w-[700px] lg:h-[594px] object-contain h-auto"
              alt="Img"
              src="/91fa59e6781adbdced82e349bb595d99-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
