let shareBtn = document.getElementById("shareBtn"); 
let sharePopUp = document.querySelector(".share-popup"); 


shareBtn.addEventListener('click', () =>{
  sharePopUp.classList.toggle("show");
});
