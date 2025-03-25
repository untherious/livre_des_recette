let style = document.querySelector("style");
if (!style) {
    style = document.createElement("style");
    document.head.appendChild(style);
}

style.textContent += `
.card:hover {
  background-color:rgba(28, 90, 110, 0.08);
}
`;