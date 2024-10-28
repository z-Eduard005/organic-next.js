"use client";
import Image from "next/image";
import CartIcon from "./cart-icon.svg";
import Link from "next/link";

// Full page!
export default function Cart() {
  return (
    <Link
      href="/cart"
      className="flex items-center rounded-[2.25rem] px-1.5 py-[0.3125rem] outline outline-1 outline-[#e0e0e0] [&_*]:transition-opacity [&:hover_*]:opacity-85"
    >
      <div className="bg-[--color-primary] rounded-full size-14 relative">
        <Image
          src={CartIcon}
          alt="cart"
          width={23.53}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <p className="ml-3 mr-[1.125rem]">Cart ({0})</p>
    </Link>
  );
}
