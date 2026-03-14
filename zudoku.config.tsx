import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    title: "Освітня Платформа API",
    //description: "Документація API для керування курсами та студентами",
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Education Platform API",
      width: "130px",
    },
  },

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
            "/introduction",                    // Простий шлях до сторінки
            "/installation",                     // Інсталяція
            "/authorization",                     // Авторизація
          ],
        },
        {
          type: "category",
          label: "API та SDK",
          icon: "code",
          items: [
            {
              type: "link",
              //icon: "api",
              label: "API Reference",
              to: "/api",
            },
            "/sdk-usage",                         // Використання SDK
          ],
        },
        {
          type: "category",
          label: "Корисні посилання",
          collapsible: false,
          icon: "link",
          items: [
            "/about",                              // Про автора
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
      input: "./openapi.yaml",  // Змінено шлях на кореневий
      path: "/api",
    },
  ],
};

export default config;
