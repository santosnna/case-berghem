var ncc = document.querySelector(".next-course-chevron");
var pcc = document.querySelector(".previous-course-chevron");
var gb1 = document.querySelector("#gb1");
var gb2 = document.querySelector("#gb2");


ncc.addEventListener('click', () => {
  gb1.classList.toggle("hide");
  gb2.classList.toggle("hide");
});


pcc.addEventListener('click', () => {
  gb1.classList.toggle("hide");
  gb2.classList.toggle("hide");
});

// Como que será a lógica quando tiver 3? não dá pra togglear 2 de uma vez...