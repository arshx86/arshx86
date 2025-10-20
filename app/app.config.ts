export default defineAppConfig({
  ui: {
    icons: {
      loading: "svg-spinners:eclipse",
    },
    input: {
      variants: {
        variant: {
          soft: {
            base: "border-border border-muted",
          },
        },
      },
      defaultVariants: {
        variant: "soft",
      },
    },
    textarea: {
      defaultVariants: {
        variant: "soft",
      },
    },
    button: {
      variants: {
        color: {
          primary: {
            base: "border",
          },
        },
      },
      defaultVariants: {
        size: "md",
        variant: "soft",
      },
    },
    card: {
      defaultVariants: {
        variant: "soft",
      },
    },
  },
});
