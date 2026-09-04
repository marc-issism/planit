import type { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  width: number;
  height: number;
  children?: ReactNode;
}

export interface UseModalToggle {
  open: () => void;
  close: () => void;
  shouldBeOpen: boolean;
}
