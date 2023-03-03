import { useState, useCallback } from "react";
import { ArrowIcon } from "./ArrowIcon";
import styles from "./Menu.module.css";

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const onClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
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
      <MenuList open={open} />
    </>
  );
};

type MenuListProps = {
  open: boolean;
};

const MenuList = ({ open }: MenuListProps) => {
  return open ? <div>あああああああ</div> : null;
};
