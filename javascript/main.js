const body = document.body;

const htmlElementMaker = (htmlName = "div") => {
  return document.createElement(htmlName);
};

const neededTag = ["div", "a", "img", "ul", "li", "button", "span", "div"];
const tag = neededTag.map((item) => {
  return htmlElementMaker(item);
});

const [div, a, img, ul, li, button, , container] = tag;

//object to style navbar

const wrapperStyle = {
  width: "100%",
  height: "80px",
  backgroundColor: "gray",
};

for (let key in wrapperStyle) {
  div.style[key] = wrapperStyle[key];
}

console.log(container);

body.appendChild(div);
