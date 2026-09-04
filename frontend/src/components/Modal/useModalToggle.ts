import { useEffect, useState } from "react";
import type { UseModalToggle } from "../../types/Modal";

export const useModalToggle = (
  initialValue = false,
  closeOnEscape = true,
): UseModalToggle => {
  const [shouldBeOpen, setShouldBeOpen] = useState(initialValue);

  useEffect(() => {
    if (!closeOnEscape) {
      return;
    }

    const handleEscKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShouldBeOpen(false);
        event.preventDefault();
      }
    };
    window.addEventListener("keyup", handleEscKeyDown);

    return () => {
      window.removeEventListener("keyup", handleEscKeyDown);
    };
  });

  const open = () => setShouldBeOpen(() => true);
  const close = () => setShouldBeOpen(() => false);

  return { open, close, shouldBeOpen };
};

export default useModalToggle;
