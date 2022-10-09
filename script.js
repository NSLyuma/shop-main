const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const mini = document.getElementById("mini");
let counter = 0;

menuBtn.addEventListener("click", () => {
  if (counter === 0) {
    mini.style.visibility = "visible";
    mini.style.opacity = 1;
    counter = 1;
  } else {
    mini.style.opacity = 0;
    setTimeout(() => {
      mini.style.visibility = "hidden";
    }, 300);
    counter = 0;
  }
});

closeBtn.addEventListener("click", () => {
  mini.style.opacity = 0;
  setTimeout(() => {
    mini.style.visibility = "hidden";
  }, 300);
  counter = 0;
});
