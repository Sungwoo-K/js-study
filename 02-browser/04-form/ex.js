(() => {
  const container = document.querySelector("form");

  /** submit할때 option에서 선택된것이 select의 value로 지정됨 */
  const engine = container.querySelector("select");

  const link = {
    google: "https://www.google.com/search",
    daum: "https://search.daum.net/search",
    bing: "https://www.bing.com/search",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    container.action = link[engine.value];
    container.submit();
    container.reset();
  };

  container.addEventListener("submit", handleSubmit);
})();
