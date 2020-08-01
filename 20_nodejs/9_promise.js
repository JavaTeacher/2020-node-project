// Promise all
const promise1 = new Promise((resolve, reject) => resolve("즉시 호출")); // resolve(반환값)
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("3초 뒤 호출"), 3000);
});

// 실무에서 많이 사용
// api를 호출해서 데이터를 조합해야 할 경우
// 1. user 조회
// 2. 해당 user가 작성한 글 조회
// 3. 1, 2가 끝날 경우 데이터 조합해서 처리
// 가장 마지막 처리될 때 같이 출력
Promise.all([promise1, promise2]).then((values) => console.log(values));

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("2초 뒤 호출"), 2000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("즉시"), 0);
});

// 경주처럼 먼저 실행되는 결과만 출력
Promise.race([promise3, promise4]).then((value) => console.log(value));
