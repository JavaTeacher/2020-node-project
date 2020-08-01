// npm -v
// 전역(글로벌)설치
// - npm i nodemon - g, npm i supervisor - g
// 지역(로컬)설치
// - npm init - package.json -> 계속 엔터치기 귀찮으면 npm init -y
// - npm i morgan -> npm un morgan
// - npm i body-parser --save -> npm un body-parser --save
// - npm i mocha --save-dev
// - npm list
// package.json 파일 새폴더에 복사
// - npm i

// version 설명 (https://docs.npmjs.com/about-semantic-versioning)
// First release : 1.0.0
// 하위 버전과 호환이 되는 버그 픽스 : 1.0.1
// 하위 버전과 호환이 되는 기능 추가 : 1.1.0
// 하위 버전과 호환이 되지 않는 변화 : 2.0.0

// npm : 실제 설치, 실행
// npx : 프로젝트에 설치해보지 않고 테스트, 일회성으로 사용해보고 싶다
//       ex) npx cowsay "hello"
//       불필요한 의존성이 생김, circular 의존성도 가능, 의존성 모듈은 최소화해야 함

// urlencode : url 인코딩/디코딩을 위한 확장 모듈
// npm install urlencode
var urlencode = require("urlencode");
var url = require("url");

// URL 만들기
var urldata = {
  protocol: "http",
  host: "dimigo.in",
  pathname: "dimibap/today",
  search: "main=" + urlencode("제육덮밥") + "&soup=" + urlencode("떡국"),
};

// format : Object -> String 변환
var newUrl = url.format(urldata);

console.log(newUrl);
console.log(urlencode.decode("%EC%A0%9C%EC%9C%A1%EB%8D%AE%EB%B0%A5"));
