const button = document.querySelector("button");
const p = document.querySelector("p");

const handleHidden = () => {
  p.classList.toggle("hidden");
};

button.addEventListener("click", handleHidden);
