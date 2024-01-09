/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-sort-json'],
};

export default config;
