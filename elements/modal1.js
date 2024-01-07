var modal = document.getElementById("artModal");
var modalImg = document.getElementById("modalImg");


function zoomImage(imgSource){
  modalImg.src = imgSource;
  modal.style.display = "block";
}

var close = document.getElementById("closeButton");
close.onclick = function(){
  modal.style.display = "none";
}