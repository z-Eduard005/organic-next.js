"use client";
import Image from "next/image";
import CartIcon from "./cart-icon.svg";
import Link from "next/link";
import { useState } from "react";

const Cart = () => {
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  return (
    <Link
      href="/cart"
      className="relative flex items-center rounded-[2.25rem] px-1.5 py-[0.3125rem] max-md:p-[0.3125rem] max-sm:p-1 outline outline-1 outline-[#e0e0e0] [&_*]:transition-opacity [&:hover_*]:opacity-85 [&:focus_*]:opacity-85"
      aria-label="Cart"
    >
      <div className="bg-[--color-primary] rounded-full size-14 max-sm:size-12 relative flex-shrink-0">
        <Image
          src={CartIcon}
          alt="cart"
          className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-6 max-sm:h-auto"
        />
      </div>
      <div className="hidden max-md:block bg-white outline outline-1 outline-[#e0e0e0] absolute -bottom-2 left-1/2 -translate-x-1/2 size-6 max-sm:size-5 max-sm:text-[1rem] rounded-full">
        <p className="text-center">{cartQuantity}</p>
      </div>
      <p className="ml-3 mr-[1.125rem] max-md:hidden">Cart ({cartQuantity})</p>
    </Link>
  );
};

export default Cart;
