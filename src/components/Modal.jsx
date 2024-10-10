import { useNavigate } from "react-router-dom";
import cls from "./Modal.module.css";

export default function PageModal(props) {
  const navigate = useNavigate();

  function closeModalHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={cls.backdrop} onClick={closeModalHandler} />
      <dialog open className={cls.modal}>
        {props.children}
      </dialog>
    </>
  );
}
