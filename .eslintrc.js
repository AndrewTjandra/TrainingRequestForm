module.exports = {
  "plugins": ["react-hooks"],
  "extends": ["airbnb"],
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};