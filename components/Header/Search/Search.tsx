"use client";
import Image from "next/image";
import SearchIcon from "./search.svg";
import ClearIcon from "./clear.svg";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form
      className="bg-[#fafafa] rounded-[2.25rem] flex gap-2 pr-1.5 pl-2 py-[0.3125rem] text-[--color-secondary] w-[23.5rem] max-2xl:w-[16rem] max-md:w-[14rem] max-sm:w-fit max-sm:gap-0 max-sm:p-[0.3125rem] overflow-hidden"
      onSubmit={handleSubmit}
      onReset={() => setSearch("")}
    >
      <div className="relative w-full">
        <input
          type="search"
          className="bg-inherit size-full outline-none [&:focus+hr]:border-[--color-secondary] max-sm:hidden"
          value={search}
          onChange={handleChange}
        />
        <hr className="absolute bottom-3 left-0 w-full border-t-2 border-transparent" />
      </div>
      {search && (
        <button type="reset" className="flex-shrink-0">
          <Image src={ClearIcon} alt="clear" />
        </button>
      )}
      <button
        type="submit"
        className="bg-[--color-secondary] transition-opacity hover:opacity-85 focus:opacity-85 rounded-full size-14 max-sm:size-12 relative flex-shrink-0"
      >
        <Image
          src={SearchIcon}
          alt="search"
          className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
    </form>
  );
};

export default Search;
