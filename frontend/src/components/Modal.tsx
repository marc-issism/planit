import { useEffect, useState } from "react";
import type { ModalProps } from "../types/Modal";

//TODO: Style Modal Layout

const InnerModal: React.FC<ModalProps & { isOpen: boolean }> = ({
  isOpen,
  width,
  height,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: height,
          width: width,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({ width, height, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleEscKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        event.preventDefault();
      }
    };
    window.addEventListener("keyup", handleEscKeyDown);

    return () => {
      window.removeEventListener("keyup", handleEscKeyDown);
    };
  });
  return (
    <>
      <InnerModal isOpen={isOpen} width={width} height={height}>
        {children}
      </InnerModal>
    </>
  );
};

export default Modal;
