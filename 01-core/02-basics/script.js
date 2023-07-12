const numFilter = () => parseInt(prompt("나이를 아라비아 숫자로 다시 입력하세요:"));
const boundaryNumFilter = () => parseInt(prompt("올바른 나이를 입력하세요(범위 0<나이<130)"));


function checkAge(age, case1, case4) {
  //isNaN : 숫자가 아니면 true
  //prompt로 반환 받는 값은 문자열, 숫자는 isNaN("숫자") === false!!!!!!!!!!!!!
  while (isNaN(age) || (age <= 0 || age >= 130)) {
    if (isNaN(age)) {
      age = case1();
    }
    if (age <= 0 || age >= 130) {
      age = case4();
    }
  }

  if (age > 18 && age < 130) {
    alert("성인")
  }

  if (age < 0 && age <= 18) {
    alert("미성년자");
  }
  alert("종료");
}

const inputAge = prompt("나이입력");

checkAge(inputAge, numFilter, boundaryNumFilter);
