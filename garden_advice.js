// Variable to hold gardening advice
let advice = "";

// Determine advice based on the season
function seasonAdvice(season) {
    const text = advice;

    if (season === "summer") {
        text += "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        text += "Protect your plants from frost with covers.\n";
    } else {
        text += "No advice for this season.\n";
    }
}

// Determine advice based on the plant type
function TypeAdvice(plantType) {
    const text = advice;

    if (plantType === "flower") {
        text += "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        text += "Keep an eye out for pests!";
    } else {
        text += "No advice for this type of plant.";
    }
}

function getGardeningdetails() {
    // Hardcoded values for the season and plant type
    let season = prompt("Enter the gardening season.");
    let plantType = prompt("Enter the plant type.");

    seasonAdvice(season);
    TypeAdvice(plantType);

    // Log the generated advice to the console
    console.log(advice);
}

getGardeningdetails();

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.