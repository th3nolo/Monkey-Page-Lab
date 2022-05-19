module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "latest",
    },
  },
  rules: {
    "spaced-comment": ["error", "always", { line: { markers: ["/"] } }],
    "require-jsdoc": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
