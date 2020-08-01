// 2. 전역객체
// - console : 콘솔과 관련된 기능
// - process : 프로그램과 관련된 기능
// - exports : 모듈과 관련된 기능
global.console.log("Hello");

console.time("time");
console.timeEnd("time");

console.log(process.version); // Node.js 버전
console.log(process.env); // 환경변수
console.log(process.arch); // 프로세서의 아키텍처
console.log(process.platform); // 플랫폼
console.log(process.memoryUsage()); // 메모리 사용정보
console.log(process.uptime()); // 프로그램 실행 시간

// 실행 매개 변수
console.log(process.argv[0]);

// for-each
process.argv.forEach(function (item, index) {
  console.log(index + " : " + item);
});

process.exit();

console.log("찍을까?");
