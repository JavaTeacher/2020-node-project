// 4. 기본모듈
// path: 파일의 경로를 다루는 모듈
var pathUtil = require("path");

console.log(__dirname); // 디렉토리 경로
console.log(__filename); // 파일 경로

// 경로 분석
var path = __filename;

// 디렉토리 경로
console.log(pathUtil.dirname(path));

// 파일명 (확장자 포함)
console.log(pathUtil.basename(path));

// 확장자 (. 포함)
console.log(pathUtil.extname(path));

var obj = pathUtil.parse(path);

console.log(obj);

// obj.dir + obj.base == __filename
console.log(pathUtil.join(obj.dir, obj.base));

console.log(obj.dir + pathUtil.sep + obj.base);
