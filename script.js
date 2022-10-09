const closeBtn = document.getElementById("close");
const mini = document.getElementById("item1");
const search = document.getElementById("search");
const input = document.getElementById("input");
let counter = 0;

const hideBlock = (el) => {
  el.style.opacity = 0;
  counter = 0;
  setTimeout(() => {
    el.style.visibility = "hidden";
  }, 300);
};

const showBlock = (el) => {
  el.style.visibility = "visible";
  counter = 1;
};

search.addEventListener("click", () => {
  if (counter === 0) {
    showBlock(input);
    input.style.opacity = ".8";
  } else {
    hideBlock(input);
  }
});

closeBtn.addEventListener("click", () => {
  hideBlock(mini);
  setTimeout(() => {
    mini.hidden = true;
  }, 400);
});

const openbox = (id, opacity) => {
  let el = document.getElementById("item" + id);

  if (el.hidden) {
    document.querySelectorAll(".item").forEach((item) => {
      item.hidden = true;
      item.style.visibility = "hidden";
      item.style.opacity = 0;
    });
    el.hidden = false;
    el.style.visibility = "visible";
    setTimeout(() => {
      el.style.opacity = opacity;
    });
  } else {
    setTimeout(() => {
      el.hidden = true;
      el.style.visibility = "hidden";
    }, 400);
    el.style.opacity = 0;
  }
};
