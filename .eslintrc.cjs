module.exports = {
  "env": {
    "es2021": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  // "parser": "@typescript-eslint/parser",
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
    "no-extra-parens": "error",  // 禁止不必要的括号
    "eqeqeq": "error",           // 要求使用 === 和 ==
    "require-await": "error",    // 使用 async awiat
    "block-spacing":  "error",   // 花括号前空格
    "eol-last": "error",         // 文件末尾空行
    "indent": ['error',2],       // 2个缩进
    "no-var": "error",           // 禁止使用var
  }
}
