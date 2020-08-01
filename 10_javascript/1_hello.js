// javascript 학습 사이트
// - javascript.info
// - https://developer.mozilla.org/ko/docs/Web/JavaScript

const limit = parseInt("123adf", 10);

console.log(limit);
if (Number.isNaN(limit)) {
  console.log("number 타입 아님");
} else {
  console.log("number 타입");
}
