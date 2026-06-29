const shareBtn = document.getElementById("shareBtn"); 
const sharePopUp = document.querySelector(".share-popup"); 
const shareContainer = document.querySelector(".share-container"); 


shareBtn.addEventListener('click', () =>{
  sharePopUp.classList.toggle("show");
  shareContainer.classList.toggle("active");
});
