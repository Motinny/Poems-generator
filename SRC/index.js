function displayPoem(response){
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
event.preventDefault();
 
let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "b0ec9t0dcd25f24cd4b29a53f7f0oe9b";
let prompt = `User Instructions: Generate a short poem about ${instructionsInput.value}`;
let context = "You are a poem expert and love to write short poems,you are requested to write a 5 letter poem.Follow the user instructions.Do not include the title of the poem.";
let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);



}


let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);