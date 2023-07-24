const addContactForm = document.querySelector("section > article > form");
const addContactInput = addContactForm.querySelectorAll("input");
const addContactBtn = addContactForm.querySelector("button");
const contactList = document.querySelector("article:nth-of-type(2) > div");
const deleteContactForm = document.querySelector(
  "section > article:nth-of-type(3) > form"
);
const deleteContactInput = deleteContactForm.querySelector("input");
const deleteContactBtn = deleteContactForm.querySelector("button");

/** 연락처가 하나도 존재하지 않을 시 텍스트 보여주기 */
const nonExist = () => {
  if (!contactList.firstElementChild) {
    const h4 = document.createElement("h4");
    h4.textContent = "연락처가 비어있습니다.";
    contactList.append(h4);
  }
};

nonExist();

/** 01012345678 => 010-1234-5678 로 맵핑 */
const mappingPhoneNumber = (value) => {
  const arrNumber = Array.from(value).filter((num) => num >= 0);
  result = [
    ...arrNumber.slice(0, 3),
    "-",
    ...arrNumber.slice(3, 7),
    "-",
    ...arrNumber.slice(-4),
  ].join("");
  return result;
};

/** 찾을 요소의 갯수의 값을 리턴한다.
 * 첫번째 매개변수 : 탐색할 리스트,
 * 두번째 매개변수 : 찾을 요소
 */
const numberOfElementsFoundInList = (nodeList, findElement) => {
  return Array.from(nodeList).filter((td) => td.textContent === findElement)
    .length;
};

// 연락처를 리스트에 추가하는 기능
const handleAddContact = (event) => {
  event.preventDefault();
  const name = addContactForm.querySelector("#name");
  const phoneNumber = addContactForm.querySelector("#phoneNumber");
  const email = addContactForm.querySelector("#email");
  const allNumber = contactList.querySelectorAll("tr td:nth-of-type(3)");

  //요소 갯수 체크
  if (Array.from(phoneNumber.value).filter((num) => num >= 0).length !== 11) {
    alert("번호가 잘못되었습니다.");
    return;
  }

  //공백 체크
  if (Array.from(phoneNumber.value).find((element) => element === " ")) {
    alert("공백을 빼주세요.");
    return;
  }

  // 010으로 시작하는 것 체크
  if (!phoneNumber.value.startsWith("010")) {
    alert("010으로 시작해 주세요.");
    return;
  }

  // 모든 input value 입력 체크
  if (!(name.value && phoneNumber.value && email.value)) {
    alert("3가지 정보를 모두 입력해주세요.");
    return;
  }

  // 밑에 쓰여질 phoneNumber.value를 원하는 값으로 매핑
  phoneNumber.value = mappingPhoneNumber(phoneNumber.value);

  // 핸드폰 번호가 이미 존재하는 번호 체크(전화번호의 고유함을 위한 if문)
  if (numberOfElementsFoundInList(allNumber, phoneNumber.value) === 1) {
    alert("이미 존재하는 번호입니다.");
    return;
  }

  // nodeName에 h4가 존재한다는 것은 nonExist();가 실행된 상태라는 것
  if (contactList.firstElementChild.nodeName === "H4") {
    contactList.firstElementChild.remove();
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.append(tbody);
    contactList.append(table);
  }

  //연락처 리스트에 추가
  const tbody = contactList.querySelector("tbody");
  const tr = document.createElement("tr");
  const tdNum = document.createElement("td");
  const tdName = document.createElement("td");
  const tdPhoneNumber = document.createElement("td");
  const tdEmail = document.createElement("td");
  tdNum.textContent = tbody.querySelectorAll("tr").length + 1;
  tdName.textContent = name.value;
  tdPhoneNumber.textContent = phoneNumber.value;
  tdEmail.textContent = email.value;
  tr.append(tdNum);
  tr.append(tdName);
  tr.append(tdPhoneNumber);
  tr.append(tdEmail);
  tbody.append(tr);
  for (let prop of addContactInput) {
    prop.value = "";
  }
};

//연락처 삭제 기능
//고유값 전화번호로 삭제하기로 하면 되나
//이름으로 삭제하는 기능을 원한다고 했을 때
//이름이 중복되었을시 고유값 전화번호로 삭제하는 기능
const haddledeleteContact = (event) => {
  event.preventDefault();
  const allName = contactList.querySelectorAll("tr td:nth-of-type(2)");
  const allNumber = contactList.querySelectorAll("tr td:nth-of-type(3)");
  const tbody = contactList.querySelector("tbody");
  const findName = deleteContactInput.value;
  let exist = false;
  if (!findName) {
    alert("삭제할 이름을 입력해주세요.");
    return;
  }

  // 이름이 여러개 존재할 시
  if (numberOfElementsFoundInList(allName, findName) > 1) {
    const findNumber = prompt("전화번호를 입력해주세요.");
    if (!findNumber) {
      alert("번호를 입력하지 않았습니다.");
      return;
    }
    const mappingFindNumber = mappingPhoneNumber(findNumber);
    if (numberOfElementsFoundInList(allNumber, mappingFindNumber) === 1) {
      for (let prop of allNumber) {
        if (prop.textContent === mappingFindNumber) {
          prop.closest("tr").remove();
          exist = true;
        }
      }
    }
  }

  // 이름이 1개만 있을 때
  if (
    Array.from(allName).filter((td) => td.textContent == findName).length === 1
  ) {
    for (let prop of allName) {
      if (prop.textContent === findName) {
        prop.closest("tr").remove();
        exist = true;
      }
    }
  }

  //삭제한 뒤 숫자 재정렬
  if (exist) {
    const allNum = contactList.querySelectorAll("tr td:nth-of-type(1)");
    let count = 1;
    for (let prop of allNum) {
      prop.textContent = count++;
    }
  }

  //연락처 존재하지 않을 시
  if (!exist) {
    alert("연락처가 일치하지 않거나 존재하지 않습니다.");
    return;
  }

  if (!tbody.firstElementChild) {
    //빈 테이블 요소 삭제
    tbody.closest("table").remove();
    nonExist();
  }

  deleteContactInput.value = "";
};

addContactBtn.addEventListener("click", handleAddContact);
deleteContactBtn.addEventListener("click", haddledeleteContact);
