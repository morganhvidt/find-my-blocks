// eslint-disable-next-line import/no-default-export
export default {
  typescript: true,
  files: "src/**/*.{md,markdown,mdx}",
  menu: ["Find My Blocks", "Getting Started", "Components"],
  themeConfig: {
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
