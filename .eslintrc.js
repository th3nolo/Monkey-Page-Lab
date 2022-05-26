module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "next",
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
};
