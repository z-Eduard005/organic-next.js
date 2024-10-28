"use client";
import Image from "next/image";
import SearchIcon from "./search-icon.svg";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form
      className="bg-[#fafafa] rounded-[2.25rem] flex gap-2 pr-1.5 pl-2 py-[0.3125rem] text-[--color-secondary] w-[23.5rem] max-2xl:w-[16rem] overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full">
        <input
          type="search"
          className="bg-inherit size-full outline-none [&:focus+hr]:border-[--color-secondary]"
          value={search}
          onChange={handleChange}
        />
        <hr className="absolute bottom-3 left-0 w-full border-t-2 border-transparent" />
      </div>
      <button
        type="submit"
        className="bg-[--color-secondary] transition-opacity hover:opacity-85 rounded-full size-14 relative flex-shrink-0"
      >
        <Image
          src={SearchIcon}
          alt="search"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
    </form>
  );
}
