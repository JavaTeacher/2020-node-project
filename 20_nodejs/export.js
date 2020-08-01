console.log(module);
console.log(exports);
console.log(module.exports === exports);

// module.exports에 assign되어 있으면 exports는 더이상 modules.export를 reference하고 있지 않음
// 그냥 exports라는 단순 변수임
exports.name = "펭수";
console.log(exports === module.exports); // true
console.log(module.exports); // {a : 'A'}

module.exports = { name: "펭수" };
exports.name = "펭순";
console.log(exports === module.exports); // false
console.log(module.exports); // { name: '펭수' }
console.log(exports); // { name: '펭순' }
