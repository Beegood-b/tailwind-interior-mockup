const navTriggerBtn = document.getElementById("nav-trigger-btn");
const menuList = document.getElementById("menu-list");

navTriggerBtn.addEventListener("click", () => {
  menuList.classList.toggle("nav-is-open");
});
