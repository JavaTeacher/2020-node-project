// 4. 기본모듈
// url : URL 처리하는 모듈
const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  // 요청메시지 분석
  console.log("Method:", req.method);
  console.log("URL:", req.url);

  // http://127.0.0.1:3000?id=3301
  var parsed = url.parse(req.url, true);
  //var parsed = url.parse(req.url, false);

  console.log(parsed.query);
  const id = parsed.query.id;

  // 응답 메세지 헤더부 작성
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  // 응답 메시지 바디부 작성
  const users = [
    { id: "3301", name: "홍길동" },
    { id: "3302", name: "홍길서" },
  ];

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(400).end();
  }

  res.statusCode = 200;
  res.end(JSON.stringify(user));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
