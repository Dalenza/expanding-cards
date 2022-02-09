const cards = document.querySelectorAll(".container__card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    removeActiveStates();
    card.classList.add("active");
  });
});

function removeActiveStates() {
  cards.forEach(card => {
    card.classList.remove("active");
  });
}
