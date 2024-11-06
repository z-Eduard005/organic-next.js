"use client";

import { useHeaderContext } from "@/context/headerContext";

const AsideToogle = () => {
  const { asideOpen, setAsideOpen } = useHeaderContext();

  const styles = !asideOpen
    ? ["top-0 w-full", "top-1/2 w-2/3", "top-full w-1/3"]
    : ["w-full my-1.5 rotate-45", "hidden", "w-full my-1.5 -rotate-45"];

  return (
    <button
      className="hidden max-xl:block relative w-11 h-7 [&_span]:absolute [&_span]:right-0 [&_span]:h-0.5 [&_span]:rounded-full [&_span]:bg-[--color-secondary] [&_span]:-mt-[1px] [&_span]:transition-all [&_span]:duration-300 [&:hover_span]:w-full [&:focus_span]:w-full"
      onClick={() => {
        setAsideOpen(!asideOpen);
      }}
      aria-label="Toogle menu"
      aria-expanded={asideOpen}
    >
      <span className={styles[0]} />
      <span className={styles[1]} />
      <span className={styles[2]} />
    </button>
  );
};

export default AsideToogle;
