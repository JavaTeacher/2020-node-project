// 4. 기본모듈
// fs : 파일 시스템을 다루기 위한 모듈
var fs = require("fs");

// 스트림 생성
var debug = fs.createWriteStream("debug.log");
var error = fs.createWriteStream("error.log");

// 콘솔 클래스 얻기
//var Console = console.Console;

// 콘솔 객체 생성
// console은 전역변수, Console은 class
//var logger = new console.Console(debug, error);
var logger = console.Console(debug, error);

logger.log("log message");
logger.info("info message");
logger.warn("warn message");
logger.error("error message");

// 파일 읽기
// 동기식 : 디폴트가 utf8 or utf-8
try {
  var data = fs.readFileSync("hello.txt", "utf8");
  console.log(data);
} catch (exception) {
  console.error("동기식 Error : " + exception);
  return;
}

console.log("동기식 읽기 완료");

// 비동기식
fs.readFile("hello.txt", "utf8", function (err, data) {
  if (err) {
    console.error("비동기식 Error : " + err); // 비동기식의 경우 호출함수로 에러가 넘어가므로 try~catch 구문 필요없음
    return;
  }
  console.log(data);
});

console.log("비동기식 읽기 완료");

// 파일 쓰기
const content = "something to write";
fs.writeFile("hello.txt", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("쓰기 성공");
});

// Promise로 변경
//const promisify = require("util").promisify
const { promisify } = require("util"); // 비구조화

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

const writeAndRead = async (data = "") => {
  try {
    await write("hello.txt", data);
    return await read("hello.txt");
  } catch (e) {
    console.error(e);
  }
};

writeAndRead("test");
