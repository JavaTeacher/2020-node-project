// exports.xxx 형태로 property 방식으로 사용
// module.exports 는 바로 사용가능
// exports객체는 module.exports와 같음
// exports 객체는 module.exports 객체를 call by reference방식으로 바라보고 있음

exports.add = function (a, b) {
  return a + b;
};
exports.sub = (a, b) => {
  return a - b;
};

var myCalc = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
};

exports.calc = myCalc;
