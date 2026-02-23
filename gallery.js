const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");

function openLightbox(img) {
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  captionText.innerText = img.nextElementSibling.innerText; // gets caption
}

function closeLightbox() {
  lightbox.style.display = "none";
}