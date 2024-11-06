import Link from "next/link";
import Image from "next/image";
import LogoSvg from "./logo.svg";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 max-2xs:gap-1 font-bold textSecondary"
    >
      <Image
        src={LogoSvg}
        alt="logo"
        className="w-[36.58px] h-auto max-2xs:w-[28px]"
      />
      <span className="text-[2.375rem] max-md:text-[2rem] max-2xs:text-[1.375rem]">
        Organic
      </span>
    </Link>
  );
}
