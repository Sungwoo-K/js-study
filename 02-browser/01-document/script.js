const ul = document.querySelector("ul");
const button = document.querySelector("button");

const addListHandler = () => {
  const inputList = prompt("입력하세요.");
  if (!inputList) {
    return;
  }
  const li = document.createElement("li");
  li.innerText = inputList;
  ul.append(li);
};

button.addEventListener("click", addListHandler);

let dataList = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

let container = document.getElementById("container");

const createTree = (containerBox, data) => {
  containerBox.append(createList(data));
};

const createList = (data) => {
  const ul = document.createElement("ul");

  for (let prop in data) {
    const li = document.createElement("li");
    li.innerText = prop;
    const innerList = createList(data[prop]);

    if (innerList) {
      li.append(innerList);
    }

    ul.append(li);
  }

  return ul;
};

createTree(container, dataList); // container 요소 내에 트리를 생성합니다.
