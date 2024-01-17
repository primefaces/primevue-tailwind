import { CarouselPassThroughOptions } from "primevue/carousel";

export default {
  root: {
    class: [
      // Flexbox
      "flex flex-col",
    ],
  },
  content: {
    class: [
      // Flexbox & Overflow
      "flex flex-col overflow-auto",
    ],
  },
  container: ({ props }) => ({
    class: [
      // Flexbox
      "flex",

      // Orientation
      {
        "flex-row": props.orientation !== "vertical",
        "flex-col": props.orientation == "vertical",
      },
    ],
  }),
  previousButton: {
    class: [
      // Flexbox & Alignment
      "flex justify-center items-center self-center",

      // Sizing & Overflow
      "overflow-hidden w-8 h-8",

      // Spacing
      "mx-2",

      // Shape
      "rounded-full",

      // Border & Background
      "border-0 bg-transparent",

      // Color
      "text-surface-600",

      // Transitions
      "transition duration-200 ease-in-out",
    ],
  },
  nextButton: {
    class: [
      // Flexbox & Alignment
      "flex justify-center items-center self-center",

      // Sizing & Overflow
      "overflow-hidden w-8 h-8",

      // Spacing
      "mx-2",

      // Shape
      "rounded-full",

      // Border & Background
      "border-0 bg-transparent",

      // Color
      "text-surface-600",

      // Transitions
      "transition duration-200 ease-in-out",
    ],
  },
  itemsContent: {
    class: [
      // Overflow & Width
      "overflow-hidden w-full",
    ],
  },
  itemsContainer: ({ props }) => ({
    class: [
      // Flexbox
      "flex",

      // Orientation & Sizing
      {
        "flex-row": props.orientation !== "vertical",
        "flex-col h-full": props.orientation == "vertical",
      },
    ],
  }),
  item: ({ props }) => ({
    class: [
      // Flexbox
      "flex shrink-0 grow",

      // Width
      {
        "w-1/3": props.orientation !== "vertical",
        "w-full": props.orientation == "vertical",
      },
    ],
  }),
  indicators: {
    class: [
      // Flexbox & Alignment
      "flex flex-row justify-center flex-wrap",
    ],
  },
  indicator: {
    class: [
      // Spacing
      "mr-2 mb-2",
    ],
  },
  indicatorButton: ({ context }) => ({
    class: [
      // Sizing & Shape
      "w-8 h-2 rounded-0",

      // Transitions
      "transition duration-200",

      // Focus Styles
      "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50",

      // Color & Background
      {
        "bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600": !context.highlighted,
        "bg-primary-500 hover:bg-primary-600": context.highlighted,
      },
    ],
  }),
} satisfies CarouselPassThroughOptions;
