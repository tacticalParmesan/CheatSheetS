// Influencing a box hovering on list item


const option = document.querySelector(".flex-row");
const box = document.querySelector(".dir-showbox");
console.log(box.style.display);
option.addEventListener("mouseover", () => {box.style.display = "flex"});
option.addEventListener("mouseout", () => {box.style.display = "block"});