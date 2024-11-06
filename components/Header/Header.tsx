import Link from "next/link";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import { NAVIGATION_ITEMS } from "./constants";
import { Fragment } from "react";
import Logo from "../ui/Logo/Logo";
import AsideToogle from "./AsideToogle/AsideToogle";
import DropdownItem from "./DropdownItem/DropdownItem";
import Aside from "./Aside/Aside";
import Navigation from "./Navigation/Navigation";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-3 max-2xs:px-2 py-[4.375rem] max-xl:py-4 max-2xs:py-3">
          <div className="flex items-center justify-between font-bold textSecondary">
            <Logo />
            <nav className="max-xl:hidden">
              <ul className="flex items-center gap-11 max-2xl:gap-7 text-[1.25rem] [&_a:hover]:text-[--color-secondary] [&_a:focus]:text-[--color-secondary] [&_a]:transition-colors">
                {NAVIGATION_ITEMS.map((item) => (
                  <Fragment key={item.label}>
                    {item.dropdown ? (
                      <DropdownItem item={item} />
                    ) : (
                      <li>
                        <Link href={item.path}>{item.label}</Link>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-[1.125rem] max-sm:gap-3 max-2xs:gap-2 font-semibold">
              <Search />
              <Cart />
              <AsideToogle />
            </div>
          </div>
        </div>
      </header>
      <Aside>
        <Navigation />
      </Aside>
    </>
  );
}
