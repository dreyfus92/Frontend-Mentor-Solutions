import logo from "../../public/shared/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const routeChecker = useRouter();
  return (
    <nav className="sticky top-0 bg-white z-10 flex justify-between items-center h-[79px] border-b-[1px] border-[#E5E5E5]">
      <div className="ml-[24px]">
        <Link href="/">
          <Image
            src={logo}
            alt={"galleria-logo"}
            width={113.04}
            height={32}
            priority={true}
          />
        </Link>
      </div>
      {routeChecker.pathname === "/" ? (
        <Link href={"/paints/1"}>
          <a className="text-[9px] text-[#7D7D7D] mr-[24px]">START SLIDESHOW</a>
        </Link>
      ) : (
        <Link href={"/"}>
          <a className="text-[9px] text-[#7D7D7D] mr-[24px]">STOP SLIDESHOW</a>
        </Link>
      )}
    </nav>
  );
};
