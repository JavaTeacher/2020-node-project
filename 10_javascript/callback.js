const search = () => {
  setTimeout(() => {
    console.log("search 수행");
    return { number: 10 };
  }, 1000);
};

const calc = (result) => {
  result.number++;
  console.log("calc 수행 : " + result.number);
};

const update = (result) => {
  setTimeout(() => {
    console.log("update 수행 : " + result.number);
  }, 1000);
};

// 순차호출하면 될까?
//update(calc(search()));

/*const result = search();
calc(result);
update(result);*/

// 해결 1. 콜백함수
const search2 = (callback, callback2) => {
  setTimeout(() => {
    console.log("search 수행");
    callback({ number: 10 }, callback2);
  }, 1000);
};

const calc2 = (result, callback) => {
  result.number++;
  console.log("calc 수행 : " + result.number);
  callback(result);
};

const update2 = (result) => {
  setTimeout(() => {
    console.log("update 수행 : " + result.number);
  }, 1000);
};

//search2(calc2, update2);

// 해결 2. Promise
const search3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("search 수행");
      resolve({ number: 10 });
    }, 1000);
  });
};

const calc3 = (result) => {
  return new Promise((resolve, reject) => {
    result.number++;
    console.log("calc 수행 : " + result.number);
    resolve(result);
  });
};

const update3 = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("update 수행 : " + result.number);
      resolve(result);
    }, 1000);
  });
};

/*search3()
  .then(calc3)
  .then(update3)
  .then((result) => console.log(result));*/

// 해결 3. async + await
const runTask = async () => {
  try {
    let result = await search3();
    result = await calc3(result);
    result = await update3(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

runTask();
