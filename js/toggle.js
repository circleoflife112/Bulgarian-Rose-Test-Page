const meritMenu = document.getElementsByClassName("brmerit");
const meritTitle = document.getElementsByClassName("merit_subhead");
const hiddenMenu = document.getElementsByClassName("hiddenmerit");

// meritMenu.addEventListner('click', () => {
//   hiddenMenu.classList.toggle('act');
// }) 

function openHiddenMenu() {
  hiddenMenu.classList.toggle("act");
}

meritTitle.addEventListner("click", openHiddenMenu);
