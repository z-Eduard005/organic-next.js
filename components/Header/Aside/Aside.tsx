"use client";

import { useHeaderContext } from "@/context/headerContext";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { trapTabKey } from "../utils";
import { useParams } from "next/navigation";

const Aside = ({ children }: { children: React.ReactNode }) => {
  const { asideOpen, setAsideOpen } = useHeaderContext();
  const navigationParams = useParams();
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    !asideOpen
      ? asideRef.current?.setAttribute("inert", "")
      : asideRef.current?.removeAttribute("inert");

    const handleKeyboard = (e: KeyboardEvent) => {
      if (!asideOpen || asideRef.current?.offsetWidth !== window.innerWidth)
        return;

      trapTabKey(e, asideRef);

      e.key === "Escape" && setAsideOpen(false);
    };

    asideRef.current?.addEventListener("keydown", handleKeyboard);
    return () =>
      asideRef.current?.removeEventListener("keydown", handleKeyboard);
  }, [asideOpen]);

  useEffect(() => {
    asideOpen && setAsideOpen(false);
  }, [navigationParams]);

  const [headerHeight, setHeaderHeight] = useState<number>(98);

  useLayoutEffect(() => {
    setHeaderHeight(
      document.body.querySelector("header")?.offsetHeight || headerHeight
    );
  }, [asideOpen]);

  return (
    <aside
      style={{ top: `${headerHeight}px` }}
      className={`fixed z-10 right-0 shadow-2xl h-full bg-[--color-secondary] rounded-tl-3xl max-sm:rounded-none hidden max-xl:block text-white font-bold transition-all duration-300 text-[1.5rem] ${
        !asideOpen ? "w-0" : "w-1/4 max-lg:w-2/5 max-md:w-3/5 max-sm:w-full"
      }`}
      ref={asideRef}
      aria-expanded={asideOpen}
    >
      {children}
    </aside>
  );
};

export default Aside;
