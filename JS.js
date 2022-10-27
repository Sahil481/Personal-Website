const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var btn = document.getElementById("submit-btn");
btn.addEventListener('click', function(e){
    e.preventDefault()
    alert("This is not setup yet, send a email manually")
})

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function (){
  this.classList.toggle('is-active');
})