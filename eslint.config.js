import prettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(...tailwind.configs["flat/recommended"], prettier, {
  ignores: [".nuxt/*", ".output/*"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
});
