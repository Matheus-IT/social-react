import cls from "./Modal.module.css";

export default function Modal(props) {
  return (
    <>
      {props.isVisible && (
        <>
          <div className={cls.backdrop} onClick={props.onHideNewPostModal} />
          <dialog open className={cls.modal}>
            {props.children}
          </dialog>
        </>
      )}
    </>
  );
}
