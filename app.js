const faqs = document.querySelectorAll("ul li a");
console.log(faqs);

const toggle = (e) => {
  console.log(e);
  console.log(e.target);
  const li = e.target.closest("li");
  console.log(li);

  if (li.classList.contains("expand")) {
    li.classList.remove("expand");
    li.querySelector(".answer").setAttribute("style", `height:0px;`);
  } else {
    li.classList.add("expand");
    const blockWithContentHeight = li.querySelector(".answer").scrollHeight;
    console.log(blockWithContentHeight);
    li.querySelector(".answer").setAttribute(
      "style",
      `height: ${blockWithContentHeight}px;`
    );
  }
};

for (let i = 0; i < faqs.length; i++) {
  console.dir(faqs[i]);
  faqs[i].addEventListener("click", toggle);
}
