import styles from "./MenuList.module.css";
import { PageType, PAGES_TO_LABEL_MAP } from "~/consts/page";
import { PORTFOLIO_URL, CONTACT_URL } from "~/consts/url";
import * as React from "react";

type MenuItems = PageType | "about" | "contact";

type MenuListProps = {
  activeItem: MenuItems;
};

type MenuListItemType = {
  menuItem: MenuItems;
  label: string;
  url: string;
  target?: React.HTMLAttributeAnchorTarget;
};

const MENU_LIST_ITEMS: MenuListItemType[] = [
  { menuItem: "notes", label: PAGES_TO_LABEL_MAP["notes"], url: "/" },
  { menuItem: "works", label: PAGES_TO_LABEL_MAP["works"], url: "/works" },
  { menuItem: "about", label: "About", url: PORTFOLIO_URL, target: "_blank" },
  { menuItem: "contact", label: "Contact", url: CONTACT_URL, target: "_blank" },
];

export const MenuList = React.forwardRef(function Coponent(
  { activeItem }: MenuListProps,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  return (
    <ul ref={ref} className={styles.menu_list}>
      {MENU_LIST_ITEMS.map((item) => {
        const isActive = item.menuItem === activeItem;
        const className = isActive
          ? `${styles.menu_list_item} ${styles.menu_list_item_active}`
          : `${styles.menu_list_item} ${styles.menu_list_item_non_active}`;
        return (
          <li className={className} key={item.menuItem}>
            <a href={item.url} target={item.target}>
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
});
