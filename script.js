const textInput = document.getElementById("number");
const button = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

button.addEventListener("click", () => {
    const input = textInput.value;
    console.log(input);

    if (!cleanInput(input)) {
        outputText.textContent = "Please enter a valid number.";
        outputText.classList.add("error")
        outputText.classList.remove("valid")

    }
    else {
        const number = Number(input);

        if (number < 1) {
            outputText.textContent = "Please enter a number greater than or equal to 1.";
            outputText.classList.add("error")
            outputText.classList.remove("valid")


        }
        else if (number > 3999) {
            outputText.textContent = "Please enter a number less than or equal to 3999.";
            outputText.classList.add("error")
            outputText.classList.remove("valid")
        }
        else {
            outputText.textContent = convertToRoman(number);
            outputText.classList.add("valid")
            outputText.classList.remove("error")



        }
    }

});

function cleanInput(input) {
    return (input.includes("e") || input.includes(".") || input === "") ? false : true;
}

function convertToRoman(input) {

    if (input === 0) {
        return "";
    }

    if (input >= 1000) {
        return "M" + convertToRoman(input -= 1000);
    }
    else if (input >= 900) {
        return "CM" + convertToRoman(input -= 900);
    }
    else if (input >= 500) {
        return "D" + convertToRoman(input -= 500);
    }
    else if (input >= 400) {
        return "CD" + convertToRoman(input -= 400);
    }
    else if (input >= 100) {
        return "C" + convertToRoman(input -= 100);
    }
    else if (input >= 90) {
        return "XC" + convertToRoman(input -= 90);
    }
    else if (input >= 50) {
        return "L" + convertToRoman(input -= 50);
    }
    else if (input >= 40) {
        return "XL" + convertToRoman(input -= 40);
    }
    else if (input >= 10) {
        return "X" + convertToRoman(input -= 10);
    }
    else if (input >= 9) {
        return "IX" + convertToRoman(input -= 9);
    }
    else if (input >= 5) {
        return "V" + convertToRoman(input -= 5);
    }
    else if (input >= 4) {
        return "IV" + convertToRoman(input -= 4);
    }
    else {
        return "I" + convertToRoman(input -= 1);
    }
}
