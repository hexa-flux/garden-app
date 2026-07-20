const adviceData = {
  summer: {
    flower: "Water regularly, provide some shade, and deadhead spent blooms.",
    vegetable: "Water deeply in the morning; mulch to retain moisture."
  },
  winter: {
    flower: "Protect from frost with covers and avoid heavy pruning.",
    vegetable: "Use cold frames or row covers to extend season."
  },
  spring: {
    flower: "Feed with a balanced fertilizer to encourage blooms.",
    vegetable: "Prepare beds and start sowing cool-season crops."
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

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Suggest plants that thrive in the given season.