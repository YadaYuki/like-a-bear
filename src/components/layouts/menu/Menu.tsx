import { useState, useCallback } from "react";
import { ArrowIcon } from "./ArrowIcon";
import styles from "./Menu.module.css";
import type { PageType } from "~/consts/page";
import { MenuList } from "./MenuList";

type Props = {
  page: PageType;
};

export const Menu = ({ page }: Props) => {
  const [open, setOpen] = useState(false);
  const onClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div>
      <button
        onClick={onClick}
        className={
          open
            ? `${styles.menu_button} ${styles.menu_button_clicked}`
            : styles.menu_button
        }
      >
        <ArrowIcon fill={open ? "#000" : "#747474"} />
      </button>
      <MenuList activeItem={page} open={open} />
    </div>
  );
};
