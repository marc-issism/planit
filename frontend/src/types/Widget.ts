import type { ReactNode } from "react";

export interface WidgetMetadata {
  id: number;
  name: string;
  display_name: string;
  description: string;
}

export interface Widget {
  metadata: WidgetMetadata;
  iconHref?: string;
  iconAlt?: string;
  content: ReactNode | null;
  modal?: ReactNode | null;
}

export interface WidgetPreviewCardProps {
  id: number;
  display_name: string;
  description: string;
}
