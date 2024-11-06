import Link from "next/link";
import { Fragment } from "react";
import ArrowSvg from "../ArrowSvg/ArrowSvg";
import { NAVIGATION_ITEMS } from "../constants";

export default function Navigation() {
  return (
    <nav className="m-3 mt-6">
      <ul className="[&_a]:transition-colors [&_a:hover]:text-[--color-primary] [&_a:focus]:text-[--color-primary]">
        {NAVIGATION_ITEMS.map((item) => (
          <Fragment key={item.label}>
            {item.dropdown ? (
              <li className="mb-1">
                <div className="relative flex gap-1 p-1">
                  <span className="select-none text-[--color-dark]">
                    {item.label}
                  </span>
                  <ArrowSvg stroke="#525c60" />
                </div>
                <ul className="ml-4">
                  {item.dropdown.map((dropdownItem) => (
                    <li
                      key={dropdownItem.label}
                      className="border-b-2 border-white"
                    >
                      <Link
                        href={dropdownItem.path}
                        className="block w-full p-1"
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className="border-b-2 border-white">
                <Link href={item.path} className="block w-full p-1">
                  {item.label}
                </Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
