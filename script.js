const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const mini = document.getElementById("mini");

const search = document.getElementById("search");
const searchMini = document.getElementById("search-mini");
const input = document.getElementById("input");
const inputMini = document.getElementById("input-mini");

let counter = 0;

const hideBlock = (el) => {
  el.style.opacity = 0;
  counter = 0;
};

const showBlock = (el) => {
  el.style.visibility = "visible";
  counter = 1;
};

const switchBlocks = (el, block, opacity) => {
  el.addEventListener("click", () => {
    if (counter === 0) {
      showBlock(block);
      block.style.opacity = opacity;
    } else {
      hideBlock(block);
      setTimeout(() => {
        block.style.visibility = "hidden";
      }, 300);
    }
  });
};

switchBlocks(menuBtn, mini, 1);
switchBlocks(search, input, ".8");
switchBlocks(searchMini, inputMini, ".8");

// menuBtn.addEventListener("click", () => {
//   if (counter === 0) {
//     showBlock(mini);
//     mini.style.opacity = 1;
//   } else {
//     hideBlock(mini);
//     setTimeout(() => {
//       mini.style.visibility = "hidden";
//     }, 300);
//   }
// });

closeBtn.addEventListener("click", () => {
  hideBlock(mini);
  setTimeout(() => {
    mini.style.visibility = "hidden";
  }, 300);
});

// search.addEventListener("click", () => {
//   if (counter === 0) {
//     showBlock(input);
//     input.style.opacity = ".8";
//   } else {
//     hideBlock(input);
//     setTimeout(() => {
//       input.style.visibility = "hidden";
//     }, 300);
//   }
// });

// searchMini.addEventListener("click", () => {
//   if (counter === 0) {
//     showBlock(inputMini);
//     inputMini.style.opacity = ".8";
//   } else {
//     hideBlock(inputMini);
//     setTimeout(() => {
//       inputMini.style.visibility = "hidden";
//     }, 300);
//   }
// });
