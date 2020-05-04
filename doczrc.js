const defaultFont =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif";
// eslint-disable-next-line import/no-default-export
export default {
  typescript: true,
  port: 3339,
  src: "src",
  menu: ["Find My Blocks", "Design System", "Components"],
  themeConfig: {
    fonts: {
      body: defaultFont,
      heading: defaultFont,
    },
    colors: {
      primary: "var(--fmb-red--light)",
      sidebar: {
        bg: "var(--fmb-red)",
        navGroup: "#fff",
        navLinkActive: "#fff",
        tocLink: "#eee",
        tocLinkActive: "#fff",
      },
    },
  },
};
