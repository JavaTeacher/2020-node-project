// 1. 변수 선언
// ES5 : 함수 스코프 -> ES6 : 블록 스코프 추가(let)
var a = 10;

function func() {
  console.log(a);
  if (true) {
    var a = 10;
  }
  console.log(a);
}

func();

// 상수
const c = 10;
//b++;

// 2. 템플릿 문자열
var a = "펭",
  b = "수";
var name = "My name is " + a + " " + b + ".";
console.log(name);

// ES6 : 템플릿 문자열(template string) 추가 (` 백틱 사용)
let name2 = `My name is ${a} ${b}.`;
console.log(name2);

console.log`Hello World!!!`; // 바로 함수의 인자로 전달 가능

// 3. 화살표 함수 (arrow function)
// ES5
function hello() {
  console.log("hello");
}
hello();

var hello = function () {
  console.log("hello");
};

hello();
console.log(typeof hello);

(function () {
  console.log("hello2");
})();

// ES6
var hello = () => {
  console.log("hello");
};

hello();

var hello = () => console.log("hello");
hello();

(() => console.log("hello"))();

// 매개변수 있는 함수
// ES5
function print(a) {
  console.log(a);
}
print("hello2");

var print = function (a) {
  console.log(a);
};
print("hello2");

(function (a) {
  console.log(a);
})("hello2");

// ES6
var print = (a) => {
  console.log(a);
};
print("hello2");

var print = (a) => console.log(a);
print("hello2");

((a) => console.log(a))("hello2");

// 매개변수 2개
// ES5
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

var myAdd = function (a, b) {
  return a + b;
};
console.log(myAdd(2, 3));

var result = (function (a, b) {
  return a + b;
})(2, 3);
console.log(result);

// ES6
var myAdd = (a, b) => {
  return a + b;
};
console.log(myAdd(2, 3));

var myAdd = (a, b) => a + b;
console.log(myAdd(2, 3));

console.log(((a, b) => a + b)(2, 3));
