// 3. 모듈 사용하기

// 모듈 가져오기
var calc = require("./3_module");
var calc2 = require("./3_module2");

console.log(calc.add(1, 2)); // exports.add
console.log(calc.sub(1, 2)); // exports.sub

//console.log(calc2.mul(1, 2)); // module.exports = myCalc;
//console.log(calc2.div(1, 2));

console.log(calc.calc.add(1, 2)); // exports.calc = myCalc;
console.log(calc.calc.sub(1, 2));

console.log(calc2.name);
