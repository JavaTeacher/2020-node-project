// Javascript - 3. 함수

// 함수 선언 (첫번째 방식)
function add(a, b) {
  return a + b;
}

// 함수 호출
console.log(add(2, 3));

// 두번째 방식 (익명함수)
var add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));

// 세번째 방식 : IIFE (즉시실행함수)
var result = (function (a, b) {
  return a + b;
})(2, 3);

console.log(result);

// 네번째 방식 (람다)
var result = ((a, b) => {
  return a + b;
})(2, 3);

console.log(result);

// 함수 호이스팅
foo();

function foo() {
  console.log("출력");
}

// 합성함수 예제 (Curried Function)
// f(x) = x + 1, g(x) = x^2, h(x) = f(g(x))
// 회원등급별로 할인율을 다르게 가야 된다면? 회원등급도 여러개라면?
const getDiscount = (price, rate) => price * rate;

// price라는 내부 Closure 함수를 반환 (https://babeljs.io/에서 확인)
const getDiscount2 = (rate) => (price) => rate * price;
const ret = getDiscount2(0.1)(10000);
console.log(ret);
