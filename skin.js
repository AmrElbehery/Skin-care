let icon = document.querySelector(".fas.fa-bars");

let list = document.querySelector("ul");

count = 1;

icon.addEventListener("click", () => {
  icon.classList.toggle("fa-times");
  list.classList.toggle("active");
});
