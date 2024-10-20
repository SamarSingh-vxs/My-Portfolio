const originalName = "SAMAR"; 
const changeableLetters = document.querySelectorAll(".change");  
function getRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
function randomizeLetters() {
  changeableLetters.forEach(span => {
    const randomLetter = getRandomLetter(); 
    span.textContent = randomLetter;  
    span.classList.add("slot-spin");  
  });
}
function restoreOriginalName() {
  changeableLetters.forEach((span, index) => {
    span.textContent = originalName[index + 1];
    span.classList.add("slot-spin");  
  });
}
function fadeOutScreen() {
  document.body.classList.add("fade-out");
  span.classList.add("slot-spin");

}
let interval = setInterval(randomizeLetters, 300);
setTimeout(() => {
  clearInterval(interval);  
  restoreOriginalName();  
}, 3900);

setTimeout(fadeOutScreen, 4900);