let shareBtn = document.getElementById("shareBtn"); 
let sharePopUp = document.querySelector(".share-popup"); 
let shareContainer = document.querySelector(".share-container"); //


shareBtn.addEventListener('click', () =>{
  sharePopUp.classList.toggle("show");
  shareContainer.classList.toggle("active");
});
