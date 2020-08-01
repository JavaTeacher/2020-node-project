// yield 사용
// generator는 arrow function 사용 불가
function* log() {
  console.log(0, yield);
  console.log(1, yield);
  console.log(2, yield);
}

const gen = log();
gen.next("zero");
gen.next("one");
gen.next("two");

const obj = {
  *gen() {
    let cnt = 0;
    yield ++cnt;
    yield ++cnt;
    yield ++cnt;
  },
};

const g = obj.gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
