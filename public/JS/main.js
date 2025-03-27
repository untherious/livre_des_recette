let style = document.querySelector("style");
if (!style) {
    style = document.createElement("style");
    document.head.appendChild(style);
}

  style.textContent += `
.card:hover {
  background-color:rgba(28, 90, 110, 0.08);
}
`;



const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {

  card.addEventListener('click', function() {
    card.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.4)';
  });
});



const images = document.querySelectorAll('.card img');

images.forEach(function(image) {
  image.addEventListener('dblclick', function() {
    image.remove();
  });
});



const emailInput = document.getElementById('newsletter-email');
const newsletterBtn = document.getElementById('newsletter-btn');
const message = document.getElementById('newsletter-message');

newsletterBtn.addEventListener('click', function() {
  if (emailInput.value !== "") {
    message.textContent = "Merci pour votre inscription !";
  } else {
    message.textContent = "Veuillez entrer un email.";
  }
});
