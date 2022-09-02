module.exports = {
  // extends: ["stylelint-config-standard", 'stylelint-config-recess-order'],
  // 只需要排序，简单处理就好
  extends: ['stylelint-config-recess-order'],

  rules: {
    // your rules
  },
  // 忽略其他文件，只校验样式相关的文件
  ignoreFiles: [
    "node_modules/**/*",
    "public/**/*",
    "dist/**/*",
    "**/*.js",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.ts",
  ],
};
