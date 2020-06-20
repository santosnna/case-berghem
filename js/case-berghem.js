/*******************************************/
// VARIABLES
var btnFilter = document.querySelector("#btn-filter");
var checkBoxes = document.getElementsByTagName("input");
/* CHECKBOXES RETORNA UM OBJECT NÃO UM ARRAY, POR ISSO NÃO CONSIGO USAR FOREACH */


/*******************************************/
// EVENT LISTENERS
btnFilter.addEventListener("click", function () {
  var asideSection = document.querySelector("#filters");
  makeInv(asideSection);
});


checkBoxes[0].addEventListener("change", function(){
  filterByObj(this.getAttribute("value"));
});

checkBoxes[1].addEventListener("change", function(){
  filterByObj(this.getAttribute("value"));
});

checkBoxes[3].addEventListener("change", function(){
  filterByObj(this.getAttribute("value"));
});


checkBoxes[6].addEventListener("change", function(){
  filterByArea(this.getAttribute("value"));
});

checkBoxes[7].addEventListener("change", function(){
  filterByArea(this.getAttribute("value"));
});

checkBoxes[8].addEventListener("change", function(){
  filterByArea(this.getAttribute("value"));
});

/*******************************************/
// FUNCTIONS
function makeInv(e) {
  e.classList.toggle("remove");
}

function filterByObj(e){
  var s = document.getElementsByTagName("section");
 
  for(i=0;i<s.length;i++){
    var a = s[i].getAttribute("id");
    if (e !== a) {
      s[i].classList.toggle("remove");
     }
  }
}

function filterByArea(e){
  var c = document.getElementsByClassName("card");

  for (i=0;i<c.length;i++) {
    if(!c[i].classList.contains(e)){
      c[i].classList.toggle("remove");
    }
  }
}
