type NavigationItem = (
  | {
      path: string;
      label: string;
      dropdown?: undefined;
    }
  | {
      label: string;
      dropdown: {
        path: string;
        label: string;
      }[];
      path?: undefined;
    }
)[];

export const NAVIGATION_ITEMS: NavigationItem = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  {
    label: "Pages",
    dropdown: [
      { path: "/team", label: "Team" },
      { path: "/portfolio", label: "Portfolio" },
      { path: "/licenses", label: "Licenses" },
      { path: "/changelog", label: "Changes" },
    ],
  },
  { path: "/shop", label: "Shop" },
  { path: "/contact", label: "Contact" },
  { path: "/blog", label: "News" },
];
