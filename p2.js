let bgColorInputE = document.getElementById('bgColorInput');
let fontColorInputE = document.getElementById('fontColorInput');
let fontSizeInputE = document.getElementById('fontSizeInput');
let fontWeightInputE = document.getElementById('fontWeightInput');
let paddingInputE = document.getElementById('paddingInput');
let borderRadiusInputE = document.getElementById('borderRadiusInput');
let customButtonE = document.getElementById('customButton');
let buttonDetailsE = document.getElementById('buttonDetails');

function applybutton() {
    let bgValue = bgColorInputE.value;
    let colorValue = fontColorInputE.value;
    let sizeValue = fontSizeInputE.value;
    let weightValue = fontWeightInputE.value;
    let paddingValue = paddingInputE.value;
    let radiusValue = borderRadiusInputE.value;

    customButtonE.style.backgroundColor = bgValue;
    customButtonE.style.color = colorValue;
    customButtonE.style.fontSize = sizeValue;
    customButtonE.style.fontWeight = weightValue;
    customButtonE.style.padding = paddingValue;
    customButtonE.style.borderRadius = radiusValue;

  

    const buttonDetailsText = `
    {
        <strong>background-color: </strong>${bgValue}
        <strong>font-color: </strong>${colorValue}
        <strong>font-size: </strong>${sizeValue}
        <strong>font-weight: </strong>${weightValue}
        <strong>padding: </strong>${paddingValue}
        <strong>border-radius: </strong>${radiusValue}  
    }`;

    buttonDetailsE.innerHTML = `
        <h3>Applied Button Details:</h3>
        <p id="detailsText">${buttonDetailsText.replace(/\n/g, "<br>")}</p>
        <button onclick="copyDetails()">Copy Details</button>
    `;
}

function copyDetails() {
    const detailsText = document.getElementById("detailsText").innerText;
    navigator.clipboard.writeText(detailsText).then(() => {
        alert("Details copied to clipboard!");
    }).catch(() => {
        alert("Failed to copy details.");
    });
}






// \n:

// This is the pattern being matched, which represents a newline character in a string.
// g:

// The g flag ensures that all newline characters in the string are replaced, not just the first one. Without the g flag, only the first occurrence of \n would be replaced.
// "<br>":

// This is the replacement string, which converts each newline character (\n) into an HTML <br> tag to display line breaks in the browser.
