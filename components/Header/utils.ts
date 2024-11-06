import { RefObject } from "react";
import { FOCUSEBLE_ELEMENTS } from "./constants";

export const trapTabKey = (
  e: KeyboardEvent,
  elRef: RefObject<HTMLElement> | null
) => {
  const focusableNodes =
    elRef!.current!.querySelectorAll<HTMLElement>(FOCUSEBLE_ELEMENTS);
  const firstEl = focusableNodes[0];
  const lastEl = focusableNodes[focusableNodes.length - 1];

  if (e.key === "Tab") {
    if (e.shiftKey) {
      if (document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      }
    } else {
      if (document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  }
};
