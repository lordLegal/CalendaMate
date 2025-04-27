// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat();

export default [
  // Übernehme alle deine bisherigen Extends & Plugins …
  ...compat.extends("plugin:@typescript-eslint/recommended", "next/core-web-vitals"),
  // … und dann deine Ignorier-Regeln:
  {
    ignores: [
      "src/generated/**",        // Prisma-Client u. Ä.
    ],
  },
  // Anschließend deine regulären Regeln
  {
    rules: {
      "@typescript-eslint/no-unused-expressions": ["error", {
        allowShortCircuit: true,
        allowTernary: true,
        enforceForJSX: false,
      }],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // … weitere Regeln …
    },
  },
];
