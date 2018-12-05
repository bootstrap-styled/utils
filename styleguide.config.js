const { createConfig } = require('@rollup-umd/documentation');
const config = createConfig({
  "pagePerSection": true
});

console.log(config);

module.exports = config;
