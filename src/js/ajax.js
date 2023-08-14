function textSubtitle() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://baconipsum.com/api/?type=lucky");
  xhr.onload = function () {
    const text = document.querySelector(".main-block__text");
    const data = JSON.parse(xhr.response);
    const randomIndex = Math.floor(Math.random() * data.length);
    text.textContent = data[randomIndex];
  };
  xhr.send();
}
textSubtitle();
