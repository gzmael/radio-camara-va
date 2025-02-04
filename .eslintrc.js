// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "eslint:recommended"],
  ignorePatterns: ["/dist/*"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
