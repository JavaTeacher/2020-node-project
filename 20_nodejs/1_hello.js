// 1. Hello, Node.js를 출력하는 여러가지 방법

/*
1. 크롬 V8 엔진을 사용
크롬에서 V8 엔진이 어떻게 동작하는지 확인하기 -> 크롬 개발자 도구
console.log('hello world')
alert('hello world')

브라우저에는 스크립트를 해석할 수 있는 엔진이 있음
크롬 : v8 엔진, 사파리 : 웹킷, 파이어폭스 : 게코(Gecko)

노드에서는 크롬에서 쓰는 v8이라는 엔진을 가져와 쓰고 있음

2. 이벤트 기반의 비동기 I/O 프레임워크 (Non-blocking I/O)
노드는 기본적으로 비동기로 동작함

3. 모듈 시스템 기반
파일 형태로 모듈을 관리할 수 있는 CommonJS로 모듈 시스템을 구현
*/

// 핵심 개념
// 1. I/O : I/O 성능을 개선하기 위해 비동기 방식과 Non-blocking을 채택함
// 2. 비동기 vs 동기 : 동기화가 되려면 처리할 때까지 기다려야 함
// 3. Non-blocking vs blocking

// REPL로 출력 (인터프리터 방식)
// String.(tab), Number.(tab)

// 콘솔에 출력
console.log("Hello, Node.js");

// 웹서버를 띄워 출력 (nodejs.org의 about)
/*const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// curl localhost:3000 -v (ex: curl www.google.com)
// curl은 Client URL의 약자로 커맨트 상에서 서버와 통신할 수 있도록 해주는 커맨드 명령어 툴

// 새로운 API 추가
// http : http를 처리를 위한 모듈
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
//const port = process.env.PORT;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
  } else if (req.url === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("  <body><h1>Hello, World</h1></body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/json") {
    const data = { msg: "Hello, World" };
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// https
// SSL 프로토콜 추가되어 모든 데이터 처리과정을 암호화
const https = require("https");
const options = {
  hostname: "google.com",
  port: 443,
  path: "/",
  method: "GET",
};
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
  req.on("error", (e) => {
    console.error(e);
  });
});

req.end();
