// Javascript - 4. 객체

// 객체 선언
var a = {}; // 빈객체
var b = new Object(); // {}와 동일
console.log(typeof a);
console.log(typeof b);

// 속성 추가
var Person = {};
Person.age = 18;
Person["name"] = "홍길동";

console.log("나이 : %d", Person["age"]);
console.log("이름 : %s", Person.name);

var Person2 = {
  age: 19,
  name: "홍길서",
};

console.log("나이 : %d", Person2["age"]);
console.log("이름 : %s", Person2.name);

// 메소드 추가
var Person = {
  age: 18,
  name: "홍길동",
};

Person.add = function () {
  this.age++;
};

Person.add();
console.log(Person.age); // 19

var Person2 = {
  age: 19,
  name: "홍길순",
  add: function () {
    this.age++;
  },
};

Person2.add();
console.log(Person2.age); // 20

var Users = [
  {
    name: "홍길동",
    age: 18,
  },
  {
    name: "홍길서",
    age: 19,
  },
];

Users.push({ name: "홍길남", age: 20 });

console.log(Users.length); // 3
console.log(Users[0]);
// 홍길동을 출력하려면?
console.log(Users[0].name);

// 객체 연습
var grades = { kor: 100, mat: 90, eng: 95 };
console.log("1:", grades["kor"]);
//console.log("2:", grades[kor]);
console.log("3:", grades.kor);
//console.log("4:", grades."kor");
console.log("5:", grades["k" + "or"]);

var test = { 1: 100, 2: 90, 3: 95 }; // key는 string타입
for (key in test) {
  console.log(typeof key);
}

// 반복문 사용
for (subject in grades) {
  console.log(subject); // key
  console.log(grades[subject]); // value  (grades.key는 안됨)
}

var grades = {
  data: { kor: 100, mat: 90, eng: 95 },
};

console.log(grades["data"]["mat"]);
console.log(grades["data"].mat);
console.log(grades.data.mat);

console.log("**********************************");
var grades = {
  data: { kor: 100, mat: 90, eng: 96 },
  print: function () {
    // print() {..} 써도 됨
    console.log(this); // typeof
    console.log(typeof this);
    console.log(this.data);
    for (name in this.data) {
      console.log(name + ", " + this.data[name]);
    }
  },
  sum() {
    return this.data.kor + this.data.mat + this.data.eng;
  },
  avg() {
    console.log(Object.keys(this.data)); // object의 key값을 array로 변환
    console.log(Object.keys(this.data).length);
    return this.sum() / 3.0;
  },
};

grades["print"]();
grades.print();
console.log(grades.sum());
console.log(grades.avg().toFixed(2));

// 구조 분해 할당 : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 해줌
const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

//const { key1, key2, key4 = "value4" } = obj;
//console.log(key1, key2, key4);

const { key1, ...key2 } = obj;
console.log(key1);
console.log(key2);

const arr = [
  { id: 0, txt: "hello" },
  { id: 1, txt: "hi" },
  { id: 2, txt: "hiru" },
];

const arr2 = arr.map((item) =>
  item.id === 1 ? { ...item, txt: "world" } : item
);
console.log(arr2);

// Object assign
const oldObj = {
  title: "testA",
};

const newObj = {
  name: "testB",
};

const r = Object.assign({}, oldObj, newObj);
console.log(r);

// 스프레드(spread)
const r2 = {
  ...oldObj,
  ...newObj,
};
console.log(r2);

const oldArr = [1, 2, 3];
const newArr = [4, 5, 6];
const r3 = [...oldArr, ...newArr];
console.log(r3);
