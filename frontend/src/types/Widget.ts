import type { ReactNode } from 'react';

export interface Widget {
  iconHref: string;
  iconAlt: string;
  header: string;
  content: ReactNode | null;
  modal: ReactNode | null;
}