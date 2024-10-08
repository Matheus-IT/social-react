import { useState } from "react";
import cls from "./Modal.module.css";

export default function Modal(props) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <>
          <div className={cls.backdrop} onClick={() => setIsVisible(false)} />
          <dialog open className={cls.modal}>
            {props.children}
          </dialog>
        </>
      )}
    </>
  );
}
