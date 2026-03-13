import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    title: "Освітня Платформа API",
    description: "Документація API для керування курсами та студентами",
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Education Platform API",
      width: "130px",
    },
  },

  // Додайте assetPrefix для GitHub Pages
  assetPrefix: "/education-platform-api-docs/", // Назва вашого репозиторію

  navigation: [
    {
      type: "category",
      label: "Документація",
      items: [
        {
          type: "category",
          label: "Початок роботи",
          icon: "sparkles",
          items: [
            "/introduction",
            "/installation",
            "/authorization",
          ],
        },
        {
          type: "category",
          label: "API та SDK",
          icon: "code",
          items: [
            {
              type: "link",
              icon: "api",
              label: "API Reference",
              to: "/api",
            },
            "/sdk-usage",
          ],
        },
        {
          type: "category",
          label: "Корисні посилання",
          collapsible: false,
          icon: "link",
          items: [
            "/about",
            {
              type: "link",
              icon: "github",
              label: "GitHub Repository",
              to: "https://github.com/Louskil/education-platform-api-docs",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],

  redirects: [{ from: "/", to: "/introduction" }],

  apis: [
    {
      type: "file",
      input: "./openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
