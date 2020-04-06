module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "prettier"],

  plugins: [
    'prettier'
  ],

  parserOptions: {
    ecmaVersion: 2017,
    parser: "babel-eslint",
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "nuxt/no-this-in-fetch-data": 0,
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    // Force this rules for auto fix
    quotes: [2, "single", "avoid-escape"],
    semi: [2, "never"],
    "comma-dangle": ["error", "always-multiline"],
  },
};
