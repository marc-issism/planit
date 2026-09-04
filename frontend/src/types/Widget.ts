import type { ReactNode } from "react";

export interface Widget {
  id: number;
  iconHref?: string;
  iconAlt?: string;
  header: string;
  content: ReactNode | null;
  modal?: ReactNode | null;
}
