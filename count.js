let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 100;



const countCharacters = () => {
    // Calculate the number of characters entered into the textarea
    let numOfEnteredChars = textArea.value.length;
    // Calculate the number of characters left
    let counter = maxNumOfChars - numOfEnteredChars;
    // Display this number in the span tag
    characterCounter.textContent = counter + "/100";

    if (counter < 0) {
        characterCounter.style.color = "red";
    } else if (counter < 20) {
        characterCounter.style.color = "orange";
    } else {
        characterCounter.style.color = "black";
    }
    
};

textArea.addEventListener("input", countCharacters);