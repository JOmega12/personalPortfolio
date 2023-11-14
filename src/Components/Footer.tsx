import { FooterSkills } from "./FooterSkills";

export const Footer = () => {
  return (
    <section className="font-Montserrat font-Inter font-sans items-center text-white">
      <div className="bg-[#B1D2EA0A] w-full h-full min[360px]:p-4 md:px-10 lg:p-4 flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl font-bold">Jensen Omega</h2>
        <p className="text-base font-normal min-[360px]:">
          Designed with love, all rights reserved for Jensen Omega
        </p>
        <div className="flex flex-row gap-2 pb-4">
          {/* map items here */}
          <FooterSkills />
        </div>
      </div>
    </section>
  );
};
