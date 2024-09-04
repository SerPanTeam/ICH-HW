"use strict";
/**
 *
 * @param {array} arrNum
 */
async function processNumbers(arrNum) {
  const newArr = [];
  for (let item of arrNum) newArr.push(await processNumber(item));
  return newArr;
}

async function processNumber(num) {
  return num ** 2;
}

const arrNums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4156];
processNumbers(arrNums).then((res) => {
  console.log(res);
});

async function getNumberIfEven(num) {
  return new Promise((res, rej) => {
    if (num % 2 == 0) res(num);
    else rej("The number is odd");
  });
}
getNumberIfEven(7324658)
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
