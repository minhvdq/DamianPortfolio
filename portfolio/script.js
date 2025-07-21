// --- MODAL SCRIPT (Existing, no changes needed) ---
var modal = document.getElementById("myModal");
var imgs = document.getElementsByClassName("myImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
const backToTopButton = document.getElementById("back-to-top-arrow");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
});


// --- NEW SCRIPT for Active Timeline Navigation on Scroll ---
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.timeline-item');
    const navLinks = document.querySelectorAll('#timeline-nav a');

    const options = {
        root: null, // relative to the viewport
        rootMargin: '-50% 0px -50% 0px', // trigger in the middle of the screen
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));

                // Get the id of the intersecting section
                const id = entry.target.getAttribute('id');
                
                // Find the corresponding nav link and add active class
                const activeLink = document.querySelector(`#timeline-nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});