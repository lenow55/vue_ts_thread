onmessage = function (e) {
  const num = e.data;
  console.log("worker");
  let temp = 0;
  if (Number.isInteger(parseInt(num))) {
    while (temp < 9999999999) {
      temp++;
    }
    const result = num + 1;
    self.postMessage(result);
  } else {
    throw new Error("Is not a number");
  }
};

export {};
