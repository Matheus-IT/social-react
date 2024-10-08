import cls from "./Modal.module.css";

export default function Modal(props) {
  return (
    <>
      <div className={cls.backdrop} />
      <dialog open className={cls.modal}>
        {props.children}
      </dialog>
    </>
  );
}
