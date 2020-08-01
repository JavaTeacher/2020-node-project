// 기존 객체, 함수를 바탕으로 새로운 클래스, 함수를 만들 수 있도록 함

function fullstack(backend, frontend) {
  this.backend = backend;
  this.frontend = frontend;

  // 프로토타입을 활용한 내부 클로저 함수 선언
  // 클로저 : 함수가 내부 함수로 정의, 해당 함수가 함수 외부에 있는 변수에 접근 가능
  // arrow function내 this는 외부 global 객체의 this
  fullstack.prototype.getBackend = () => this.backend;
  fullstack.prototype.setBackend = (backend) => (this.backend = backend);

  fullstack.prototype.getFrontend = () => this.frontend;
  fullstack.prototype.setFrontend = (frontend) => (this.frontend = frontend);
}

const Fullstack = new fullstack("node.js", "react");
console.log(Fullstack.getBackend());
console.log(Fullstack.getFrontend());
Fullstack.setFrontend("vue");
console.log(Fullstack.getFrontend());

// class로 변경
class Fullstack2 {
  constructor(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;
  }

  getBackend() {
    return this.backend;
  }
  setBackend(backend) {
    this.backend = backend;
  }

  getFrontend() {
    return this.frontend;
  }
  setFrontend(frontend) {
    this.frontend = frontend;
  }
}

const fullstack2 = new Fullstack2("node.js2", "react2");
console.log(fullstack2.getBackend());
console.log(fullstack2.getFrontend());
fullstack2.setFrontend("vue2");
console.log(fullstack2.getFrontend());
