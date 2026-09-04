import type { ModalProps } from "../../types/Modal";
import "./Modal.scss";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  width,
  height,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div
            className="modal__content"
            style={{
              height: height,
              width: width,
            }}
          >
            <div className="modal__content__icon">
              <img
                src="/public/icons/x-24.svg"
                alt="Close Modal"
                onClick={() => {
                  handleClose();
                }}
              />
            </div>
            <div className="modal__content__container">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
