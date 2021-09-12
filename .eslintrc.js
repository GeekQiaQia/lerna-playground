module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: ["prettier"], // 关闭和eslint 冲突的规则；走prettier风格
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  env: {
    node: true,
    jest: false,
  },
};
