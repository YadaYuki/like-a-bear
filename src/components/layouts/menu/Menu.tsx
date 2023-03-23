import { useState, useCallback, useEffect, useRef } from "react";
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
  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCloseDropDown = useCallback((e: MouseEvent) => {
    if (!dropdownRef.current) {
      return;
    }
    if (!buttonRef.current) {
      return;
    }
    if (buttonRef.current.contains(e.target as Node)) {
      return;
    }
    if (!dropdownRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleCloseDropDown);
    return () => {
      window.removeEventListener("click", handleCloseDropDown);
    };
  }, [handleCloseDropDown]);

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={onClick}
        className={
          open
            ? `${styles.menu_button} ${styles.menu_button_clicked}`
            : styles.menu_button
        }
      >
        <ArrowIcon fill={open ? "#000" : "#747474"} />
      </button>
      {open ? <MenuList ref={dropdownRef} activeItem={page} /> : null}
    </div>
  );
};
