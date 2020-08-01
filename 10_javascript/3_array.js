// Javascript - 2. 배열

// 배열 선언
var arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5
console.log(arr[2]); // 3

var arr2 = [1, 2, "apple", "banana"];

console.log(arr2[2]); // apple

// 반복문 사용하기
for (i = 0; i < arr2.length; i++) {
  console.log(i + ":" + arr2[i]);
}

// for-in
for (i in arr2) {
  console.log(i + ":" + arr2[i]); // i는 인덱스
}

// for-of (ES6에 추가)
for (i of arr2) {
  console.log(i);
}

arr2.forEach(function (item, index) {
  console.log(index + ":" + item);
});

var a = ["a", "b", "c"];
a.push("d");
console.log(a);

console.log(a.pop());
console.log(a);

console.log("******");
// splice 사용하기
// index, howmany, element1 .. n
// index : 배열에 추가할 위치를 가르키는 index
// howmany : index에서부터 삭제될 원소들의 수, 0이면 삭제되지 않음
// element : 추가될 값
var a = ["a", "b", "c"];
a.splice(1, 0, "d");
console.log(a); //['a', 'd', 'b', 'c']

a = ["a", "b", "c"];
a.splice(1, 1, "x", "y"); // b를 리턴함
console.log(a); //['a', 'x', 'y', 'c']

a = [1, 2, 3, 4, 5];
a.splice(2); // index2부터 전부다 삭제
console.log(a); //[1, 2]

var li = ["c", "e", "a", "b", "d"];
console.log(li.sort());
console.log(li.reverse());

// map, filter, slice 추가
const friends = ["alice", "bob", "chris", "dolly"];
const new_friends = friends.map((item, index) => {
  console.log(item, index);
  return item + "0";
});

console.log(new_friends);
console.log(friends === new_friends);

const a2 = [1, 2, 3, 4, 5];
const b2 = a2.map((number) => number * 2);
console.log(b2);

// 3제거
const a3 = [1, 2, 3, 4, 5];
const b3 = a3.filter((num) => num >= 3);
console.log(b3);

// 6추가
// push : 기존 배열에 추가
// concat : 새로운 배열 생성
const newarr = a3.push(5);
const newarr2 = a3.concat(6);
console.log("*******");
console.log(a3);
console.log(newarr);
console.log(a3);
console.log(newarr2);

// 큐 구현 (FIFO)
const queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue);
const r = queue.shift(); // 먼저 들어간 요소를 빼냄
console.log(r, queue);

// 스택 구현 (LIFO)
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
const s = stack.pop();
console.log(s, stack);

// Set (중복을 허용하지 않는 자료구조)
const set = new Set();
set.add(1);
set.add(1);
set.add(2);
set.add(2);
set.add(3);

for (const item of set) {
  console.log(item);
}

const ret = set.has(2);
console.log(ret);

// ES6 문법 : every (조건에 모두 만족할 경우 true)
// 새로운 배열 객체가 만들어짐
const arr3 = [2, 3, 4];
const r1 = arr3.every((key) => key > 1);
console.log(r1);
const r2 = arr3.every((key) => key > 2);
console.log(r2);

// some : 조건에 해당하는 것이 하나라도 있으면 true
const arr7 = [1, 0, -1, -2];
const r7 = arr7.some((key) => key < 0);
console.log(r7);

// ES6 문법 : find, includes
const arr4 = ["node.js", "react"];
const r3 = arr4.find((key) => key === "react"); // 찾고자 하는 데이터 리턴
console.log(r3);
const r4 = arr4.includes("react"); // 있는지만 체크
console.log(r4);

// forEach
const arr5 = [1, 2, 3];
const arr6 = [];
arr5.forEach((item) => {
  console.log(item);
  arr6.push(item);
});
console.log(arr6);

const test = [1, 2, 3];
const test2 = [...test, 4];
console.log(test2);
