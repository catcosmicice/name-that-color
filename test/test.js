const { ntc } = require('../dist/index');

const color = ntc.name('#eeeeee');

console.log(`Color: ${color.color}\nName: ${color.name}\nExact?: ${color.isExact}`);