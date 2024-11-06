export type DropdownItem = {
  label: string;
  dropdown: {
    path: string;
    label: string;
  }[];
};

type NavigationItem = (
  | {
      path: string;
      label: string;
      dropdown?: undefined;
    }
  | DropdownItem
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

export const FOCUSEBLE_ELEMENTS = [
  "button",
  "[href]",
  "input",
  "select",
  "textarea",
  "iframe",
  "[contentEditable=true]",
  "[tabindex]",
]
  .map((el: string) => el + ':not([tabindex="-1"]):not([disabled])')
  .join(",");
