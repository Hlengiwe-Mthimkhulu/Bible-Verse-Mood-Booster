function displayVerse(response) {
  let verseElement = document.querySelector("#mood");
  verseElement.innerHTML = "✨ Here’s your verse:";

  new Typewriter("#mood", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateVerse(event) {
  event.preventDefault();

  let moodInput = document.querySelector("#mood-input").value;
  let randomSeed = Math.floor(Math.random() * 1000);

  let apiKey = "1521eab90o8d6c3ad79f5t2266f5a4a4";
  let prompt = `Mood: "${moodInput}". Variation: ${randomSeed}`;
  let context = `You are a warm and uplifting Christian assistant. 
                 Provide exactly ONE different Bible verse each time for the same mood. 
                 Include the full text and reference (e.g., John 3:16). 
                 After the verse, write one short encouraging sentence about how it applies to the mood. 
                 Format in basic HTML: Verse and reference on one line, then <br /><br />, then encouragement.
                 `;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let boosterElement = document.querySelector("#mood");
  boosterElement.classList.remove("hidden");
  boosterElement.innerHTML = `<div class="blink">⌛Finding your verse...</div>`;

  axios.get(apiUrl).then(displayVerse);
}

let moodFormElement = document.querySelector("#form-generator");
moodFormElement.addEventListener("submit", generateVerse);
