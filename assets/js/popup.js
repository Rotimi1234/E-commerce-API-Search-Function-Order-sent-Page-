// Automatic show popup after 3 seconds of page load

const popup = document.querySelector(".popupBox");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(() => {
    popup.style.display = "block";
  }, 1000);
};

close.addEventListener("click", () => {
  popup.style.display = "none";
});

function cloose(){
    popup.style.display = "none";
}

