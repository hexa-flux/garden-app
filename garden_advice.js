// Create advice object with arrays of advice
const adviceData = {
  summer: {
    flower: "Water regularly, provide some shade, and deadhead spent blooms. Ideal flowers to grow include sunflowers, zinnias, marigolds, and lavender.",
    vegetable: "Water deeply in the morning; mulch to retain moisture. Ideal vegetables to grow include tomatoes, cucumbers, peppers, and beans."
  },
  winter: {
    flower: "Protect from frost with covers and avoid heavy pruning. Ideal flowers to grow include hellebores, camellias, and winter jasmine.",
    vegetable: "Use cold frames or row covers to extend season. Ideal vegetables to grow include broccoli, cabbage, cauliflower, kale and lettuce."
  },
  spring: {
    flower: "Feed with a balanced fertilizer to encourage blooms. Ideal flowers to grow in the spring include sweet alyssum, petunias and daffodils.",
    vegetable: "Prepare beds and start sowing cool-season crops. Ideal vegetables to grow in the spring include lettuce, spinach, kale and carrots."
  }
};

function getAdvice(season, plantType) {
    // Safeguards for inputs
    const Sn = String(season).trim().toLowerCase();
    const Pt = String(plantType).trim().toLowerCase();

    // Return advice with matching season and plantType
    if (adviceData[Sn] && adviceData[Sn][Pt]) {
        return adviceData[Sn][Pt];
    }

    // Return all seasonal advice if no plantType is given
    if (adviceData[Sn]) {
        return `No specific advice for "${plantType}" in ${season}. General: ${Object.values(adviceCatalog[s]).join(" ")}`;
    }

    // Fallback for invalid season input
    return `No advice for season "${season}".`;
}

function plantsPrompt() {
    // Initialize input array
    const plants = {};

    // Create object array, requesting multiple season/plantType inputs until manually exiting
    do {
        const Sn = prompt("Enter the gardening season, or exit to finish.") || "";
        const Pt = prompt("Enter the plant type.") || "";

        if (!Sn || Sn === "") break;

        plants.push({
            season: Sn.trim(),
            plantType: Pt.trim()
        })
    } while (true);

    // When array creation is complete, use map() to create report with advice based on inputs
    const report = plants.map(p => ({
        ...p,
        advice: getAdvice(p.season, p.type)
    }));

    console.log(report);
}

// Run prompting function
plantsPrompt();