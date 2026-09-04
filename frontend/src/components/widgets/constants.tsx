import type { ReactNode } from "react";
import type { WidgetMetadata } from "../../types/Widget";

export const WIDGET_METADATA: WidgetMetadata[] = [
  {
    id: 1,
    name: "date_and_time_widget",
    display_name: "Date and Time",
    description: "Pick a date and time for when to meet up for your hangout.",
  },
  {
    id: 2,
    name: "location_widget",
    display_name: "Location",
    description: "Pick a place or several places for your hangout.",
  },
  {
    id: 3,
    name: "itinerary_widget",
    display_name: "Itinerary",
    description: "Create an itinerary as a list of activities for your hangout",
  },
  {
    id: 4,
    name: "budget_widget",
    display_name: "Budget",
    description: "Create a proposed budget for your hangout.",
  },
];

export const WIDGET_ID_CONTENT_MAP: Record<number, ReactNode | null> = {
  1: null,
};

export const WIDGET_ID_MODAL_MAP: Record<number, ReactNode | null> = {
  1: null,
};
