const { generateSummary } = require("../src/lib/getSummary");
const { getAreas } = require("../src/lib/getAreas");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
  const areas = await getAreas();
  for (const area of areas) {
    console.log(`📝 Generating summary for ${area}...`);
    await generateSummary(area);
  }
  console.log("✅ Done generating all summaries.");
}

main();
