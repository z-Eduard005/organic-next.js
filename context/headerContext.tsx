"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type HeaderContext = {
  asideOpen: boolean;
  setAsideOpen: Dispatch<SetStateAction<boolean>>;
};

const HeaderContext = createContext<HeaderContext | null>(null);

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const [asideOpen, setAsideOpen] = useState<boolean>(false);

  return (
    <HeaderContext.Provider value={{ asideOpen, setAsideOpen }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error(
      "useHeaderContext must be used within a HeaderWrapper component"
    );
  }
  return context;
}
