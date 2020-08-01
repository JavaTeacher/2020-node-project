// Javascript - 1. 변수

// 변수 선언
var a = 1;
var b = 2;
console.log("a: " + a);
console.log("b: %d", b);

var s1 = "Hello";
var s2 = "World!";

console.log("s1: " + s1);
console.log("s2: %s", s2);
console.log(s1 + s2);

// 자료형 확인하기
// JIT compiler에 의해 동적으로 타입이 결정됨
console.log(typeof 1); // number
console.log(typeof a);

console.log(typeof "Hello"); // string
console.log(typeof s1);

console.log(typeof true); // boolean
console.log(typeof c); // undefined

console.log(typeof {}); // object
console.log("array:", typeof []);

// 변수 호이스팅
function foo() {
  console.log(a); // undefined
  var a = 100;
  console.log(a); // 100
}

foo();

// ECMA Script 6 (ES6, ES2015) let, const 추가

// var과 let 차이점 : var로는 변수 중복 선언 가능, let은 에러 발생
// 기본적으로 자바스크립트는 함수 레벨 스코프를 가짐
function foo2() {
  if (true) {
    var tmp = 0; // let으로 바꾸면 에러 (let은 블럭 레벨 스코프임)
    console.log("1:" + tmp);
  }
  console.log("2:" + tmp); // 함수 안에 선언된 변수는 중괄호 밖이어도 접근이 가능
}

foo2();

let v1 = 1;
const v2 = 2;

v1++;
//v2++;

// slice
const str = "01234567890";
console.log(str.slice(0, 5));

let string = "node.js";
let r1 = string.startsWith("n");
let r2 = string.includes("js");
let r3 = string.endsWith("s");

const f = () => {
  if (r1 && r2 && r3) return true;
  return false;
};
console.log(f());
