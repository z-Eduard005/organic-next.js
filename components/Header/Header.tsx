import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/img/logo.svg";
import Arrow from "./img/arrow.svg";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NAVIGATION_ITEMS } from "@/app/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <div className="max-w-[1600px] mx-auto px-3 py-[4.375rem]">
        <div className="flex items-center justify-between font-bold textSecondary">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="logo" className="w-[36.58px] h-auto" />
            <p className="text-[2.375rem]">Organic</p>
          </Link>
          <nav>
            <ul className="flex items-center gap-11 max-2xl:gap-7 text-[1.25rem] [&_a:hover]:text-[--color-secondary] [&_a]:transition-colors">
              {NAVIGATION_ITEMS.map((item) =>
                item.dropdown ? (
                  <li className="flex gap-1 cursor-pointer [&_ul]:hidden [&:hover_ul]:block relative">
                    <p>{item.label}</p>
                    <Image src={Arrow} alt="arrow" />
                    <ul className="absolute top-full rounded-lg bg-[--color-primary] text-white p-2">
                      {item.dropdown.map((dropdownItem) => (
                        <li>
                          <Link href={dropdownItem.path}>
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <Link href={item.path}>{item.label}</Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="flex gap-[1.125rem] font-semibold">
            <Search />
            <Cart />
          </div>
          <button className="hidden max-xl:block">
            <MenuRoundedIcon className="size-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
