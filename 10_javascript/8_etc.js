// setInterval
/*setInterval(() => {
  console.log("hi");
}, 1000);
*/

// Error Handling
try {
  a;
} catch (e) {
  console.log("Err " + e);
}

// class
class Robot {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is speaking`);
  }
}

const r = new Robot("James");
r.speak();

class Ai extends Robot {
  constructor(name) {
    super(name);
  }
  walk() {
    console.log(`${this.name} is walking`);
  }
  static func() {
    console.log("static method");
  }
}

const ai = new Ai("Ted");
ai.speak();
ai.walk();

Ai.func();
//ai.func();

// 구조화, 비구조화
const obj = {
  title: "Tom",
  value: "100",
};

// ES5 비구조화(Destructuring)
//const title = obj.title;
//const value = obj.value;

// ES6 비구조화(Destructuring)
const { title, value } = obj;

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

const [, a2, b2] = arr;
console.log(a2, b2);

// timer
const obj1 = setTimeout(() => {
  console.log("first");
}, 1000); // 최소지연시간 (1초 or 1.1초 or 더 걸릴 수 있음)

const obj2 = setImmediate(() => {
  console.log("second");
});

const obj3 = setInterval(() => {
  console.log("third");
}, 1000);

// 비할당
clearTimeout(obj1);
clearImmediate(obj2);
clearInterval(obj3);

// Event Emitter
const EventEmitter = require("events");

class ChatManager extends EventEmitter {}

const chatManager = new ChatManager();
chatManager.on("join", (user) => {
  console.log(`${user} joined`);
}); // 이벤트 선언

chatManager.emit("join", "Alice");
chatManager.emit("join", "Bob");
chatManager.emit("join", "Chris");

// DNS
const dns = require("dns");

dns.lookup("google.com", (err, address, family) => {
  console.log(`address: ${address}, ${family}`);
  // family 4 -> Ipv4 버전 사용
});

dns.resolve4("google.com", (err, addresses) => {
  if (err) throw err;
  const res = JSON.stringify(addresses);
  console.log(res);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) throw err;
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});
