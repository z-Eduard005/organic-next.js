"use client";

import Link from "next/link";
import ArrowSvg from "../ArrowSvg/ArrowSvg";
import { useState } from "react";
import type { DropdownItem } from "../constants";

const DropdownItem = ({ item }: { item: DropdownItem }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <li
      className="relative flex gap-1 cursor-pointer [&:hover_ul]:block [&:focus-within_ul]:block [&:hover_svg]:rotate-180 [&:focus-within_svg]:rotate-180"
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={expanded}
    >
      <span className="select-none">{item.label}</span>
      <ArrowSvg className="transition-transform" />
      <ul className="absolute top-full rounded-lg bg-white p-2 outline outline-1 outline-[#e0e0e0] hidden">
        {item.dropdown.map((dropdownItem) => (
          <li key={dropdownItem.label}>
            <Link href={dropdownItem.path}>{dropdownItem.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropdownItem;
