/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  singleAttributePerLine: true,
  multilineArraysWrapThreshold: 1,
  plugins: [
    'prettier-plugin-sort-json',
    'prettier-plugin-astro',
    'prettier-plugin-multiline-arrays',
  ],
};

export default config;
