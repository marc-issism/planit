import { create } from "zustand";
import type { Widget } from "../types/Widget";

interface planCreateWidgetsStore {
  widgets: Widget[];
  addWidget: (widget: Widget) => void;
  removeWidget: (widgetId: number) => void;
}

const usePlanCreateWidgetsStore = create<planCreateWidgetsStore>((set) => ({
  widgets: [],
  addWidget: (widget: Widget) =>
    set((state) => {
      if (
        state.widgets.some(
          (searchWidget) => searchWidget.metadata.id == widget.metadata.id,
        )
      ) {
        return { ...state };
      }

      return { ...state, widgets: [...state.widgets, widget] };
    }),
  removeWidget: (widgetId: number) =>
    set((state) => ({
      widgets: [
        ...state.widgets.filter((widget) => {
          return widget.metadata.id != widgetId;
        }),
      ],
    })),
}));

export default usePlanCreateWidgetsStore;
