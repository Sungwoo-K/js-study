const input = document.querySelector("input");
const button = document.querySelector("button");
const listBox = document.querySelector("article:nth-of-type(2)");

const deleteList = (e) => {
  e.target.remove();
};

const handleAddList = () => {
  // listBox에 ul이 없으면 ul 생성
  // 없으면 새로 만들어진, 있으면 기존의 ul에 li 지속적으로 넣기
  let ul = listBox.querySelector("ul"); // 있는지 없는치 체킹
  if (!ul) {
    ul = document.createElement("ul"); // 없으면 ul 생성
    listBox.prepend(ul); // 성성한 ul listBox에 넣기
  }

  //list 생산공장
  const li = document.createElement("li");
  const value = input.value;
  li.addEventListener("click", deleteList);
  li.textContent = value;
  ul.prepend(li);
  input.value = "";
};

button.addEventListener("click", handleAddList);
