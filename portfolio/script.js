// Get the modal
var modal = document.getElementById("myModal");

// Get the images and insert them inside the modal - use their "alt" text as a caption
var imgs = document.getElementsByClassName("myImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through all images and assign the click event
for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function() {
    console.log("Image clicked: " + this.alt); // For debugging
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
};
