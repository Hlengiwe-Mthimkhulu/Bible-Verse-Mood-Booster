function generateVerse(event) {
  event.preventDefault();

  new Typewriter("#mood", {
    strings: ["Trust in the lord and lean not in your understanding"],
    autoStart: true,
    delay: 100,
    cursor: "",
    loop: true,
  });
}

let moodFormElement = document.querySelector("#form-generator");
moodFormElement.addEventListener("submit", generateVerse);
