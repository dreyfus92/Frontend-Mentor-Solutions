import logo from "../../public/shared/logo.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[79px] border-b-[1px] border-[#E5E5E5]">
      <div className="ml-[24px]">
        <Image src={logo} alt={"galleria-logo"} width={113.04} height={32} />
      </div>
      <button className="text-[9px] text-[#7D7D7D] mr-[24px]">
        START SLIDESHOW
      </button>
    </nav>
  );
};
