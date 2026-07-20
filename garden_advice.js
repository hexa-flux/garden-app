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
    const Sn = String(season).trim().toLowerCase();
    const Pt = String(plantType).trim().toLowerCase();

    if (adviceData[Sn] && adviceData[Sn][Pt]) {
        return adviceData[Sn][Pt];
    }

    if (adviceData[Sn]) {
        return `No specific advice for "${plantType}" in ${season}. General: ${Object.values(adviceCatalog[s]).join(" ")}`;
    }

    return `No advice for season "${season}".`;
}

function plantsPrompt() {
    const plants = [];

    do {
        const Sn = prompt("Enter the gardening season, or exit to finish.") || "";
        const Pt = prompt("Enter the plant type.") || "";

        if (!Sn || Sn === "") break;

        plants.push({
            season: Sn.trim(),
            plantType: Pt.trim()
        })
    } while (true);

    const report = plants.map(p => ({
        ...p,
        advice: getAdvice(p.season, p.type)
    }));

    console.log(report);
}

plantsPrompt();