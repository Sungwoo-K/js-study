const largeImg = document.querySelector("#largeImg");
const thumbs = document.querySelector("#thumbs");

const changeImg = (e) => {
  e.preventDefault();
  const img = e.target.src;
  if (img) {
    largeImg.src = img;
  }
};

thumbs.addEventListener("click", changeImg);
