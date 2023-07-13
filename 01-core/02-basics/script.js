// const ucFirst = (str) => {
//   const arr = str.split('');
//   arr[0] = arr[0].toUpperCase();
//   return arr.join('');
// }

const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);

console.log(ucFirst("john") == "John");

console.log("------------------------");

const checkSpan = (str) => str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx");
console.log(checkSpan('buy ViAgRA now') == true);
console.log(checkSpan('free xxxxx') == true);
console.log(checkSpan("innocent rabbit") == false);

console.log("------------------------");

const truncate = (str, maxlength) => str.length < maxlength ? str : str.slice(0, maxlength - 1) + "…";

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

console.log("------------------------");

const extractCurrencyValue = (str) => {
  const arr = str.split("");
  for (let index in arr) {
    if (isNaN(+arr[index])) {
      arr[index] = "";
    }
  }
  return arr.join('');
};

console.log(extractCurrencyValue('$asdsd123fsdasdas120sdfsdf'));

console.log("------------------------배열문제");



const getMaxSubSum = (arr) => {

  let maxSubSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j]
      if (sum > maxSubSum) {
        maxSubSum = sum
      }
    }
  }
  return maxSubSum
}

console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);

