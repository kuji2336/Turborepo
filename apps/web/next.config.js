const withTM = require("next-transpile-modules")(["ui", "math-helpers"]);

module.exports = withTM({
  reactStrictMode: true,
});
