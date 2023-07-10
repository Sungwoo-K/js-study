function checkAge(age) {
  return age > 18 ? true : confirm('보호자의 동의를 받으셨나요?');
}

function checkAge2(age) {
  return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

let age = 11;
checkAge(age);
checkAge2(age);

const min = (a, b) => {
  return a <= b ? a : b;
}

alert(min(11, 12));

const pow = (x, n) => {
  return x ** n;
}

const a = prompt("숫자를 입력해주세요");
const b = prompt("몇 제곱 입니까?");

alert(pow(a, b));