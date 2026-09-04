import { useEffect, useState } from "react";
import Modal from "../Modal";

const WidgetSelectModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

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

  if (!isOpen) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} close={handleClose} width={500} height={500}>
      <>TEXT HERE</>
    </Modal>
  );
};

export default WidgetSelectModal;
