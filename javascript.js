const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".buttonContainer");
let divisor;
let divDivisor;
let number;
function grid(num){
    container.innerHTML = '';
    for (let i = 0; i < num; i++){
        divisor = document.createElement("div");
        divisor.style.display = "flex";
        for (let j = 0; j < num; j++){
            divDivisor = document.createElement("div");
            divDivisor.style.outline = "2px solid red";
            divDivisor.style.flexBasis = "40px";
            divDivisor.style.flexGrow = "0";
            divDivisor.style.flexShrink = "1";
            divDivisor.style.alignItems = "center";
            divDivisor.addEventListener("click", (event) => event.target.style.backgroundColor = "blue");
            // divDivisor.textContent = "okayyyyyyyyyyyuvuy";
            divisor.appendChild(divDivisor);
        }
        // divisor.style.outline = "2px solid red";
        divisor.style.flexBasis = "40px";
        divisor.style.justifyContent = "center";
        divisor.style.flexGrow = "0";
        divisor.style.flexShrink = "1";
        container.appendChild(divisor);
    }
}
grid(16);
buttonContainer.style.display = "flex";
buttonContainer.style.height = "50px"
buttonContainer.style.justifyContent = "center";
const button = document.createElement("button");
button.style.width = "auto";
button.style.height = "40px";
// button.style.flexGrow = "auto";
// button.style.flexShrink = "0";
button.style.flex = "0 1 auto";
button.style.alignSelf = "center";
button.textContent = "Number of squares per side?";
button.style.fontSize = "20px";
button.addEventListener("click", function(){
    number = prompt("Give me a number to make screen 'number x number'");
    if (number < 1 || number > 100){
        alert("Number should be between 1 and 100");
        return
    }
    grid(number);
});
buttonContainer.appendChild(button);
