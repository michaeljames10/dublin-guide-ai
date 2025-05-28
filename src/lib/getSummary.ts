import fs from "fs/promises";
import path from "path";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

const summariesDir = path.resolve(process.cwd(), "public/summaries");

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getSummary = async (area: string): Promise<string | null> => {
  const filePath = path.join(summariesDir, `${area}.html`);
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch {
    return null;
  }
};

export const generateSummary = async (area: string): Promise<void> => {
  const prompt = `You're a knowledgeable and witty Dublin local writing a comprehensive and engaging HTML guide about the neighborhood "${area}". 

Your guide should include the following sections, formatted using proper HTML:

1. <h1> A welcoming title for the guide, use a summary of the rest of the content as context and make sure to include the area name in the title.
2. <h2> History – key events, heritage, and how the area evolved
3. <h2> Attractions – local landmarks, things to do, and interesting spots
4. <h2> Restaurants & Pubs – top local places to eat and drink, what locals recommend
5. <h2> Green Spaces – parks, nature walks, and outdoor activities
6. <h2> Local Life – what it's like to live there, community vibe, personality of the area
7. <h2> Schools – overview of primary and secondary schools, any notable institutions
8. <h2> House Prices – general trends, typical prices for buying a home
9. <h2> Rent Prices – average monthly rents, what types of homes are available. Also:
    - Mention typical rents for 1-bed, 2-bed, and 3-bed places.
    - Describe affordability compared to the Dublin average.
    - Assign an affordability rating from 1 (very expensive) to 10 (very affordable) dont output the 1/10 for example just the visual scale. dont output the 1/10 for example just the visual scale
    - Include a visual scale:
        • A horizontal bar using <div> elements (e.g., a "rentometer"), or
        • An emoji scale like 💸💸💸💸⚪⚪⚪⚪⚪⚪ affordability.
10. <h2> Crime Index – describe the public safety of the area using the crime index. Also:
    - Assign a safety rating from 1 (least safe) to 10 (safest) based on the crime index (where 10 = very safe).
    - Include a simple visual representation such as:
        • A horizontal bar using styled <div> elements (like a progress bar), or
        • An emoji scale (e.g., 🔒🔒🔒⚪⚪⚪⚪⚪⚪⚪ for 3/10) dont output the 1/10 for example just the visual scale.
11. <h2> Commuting & Transport – how locals get around, including Luas, Dart, buses, cycleways, walkability, and commute times to city centre.
12. <h2> Hidden Gems & Local Legends – quirky stories, secret spots, oddball institutions, and famous past residents.
13. <h2> Property Trends & Future Developments – whether it's up-and-coming, undergoing regeneration, or staying charmingly unchanged.
14. <h2> Local Events & Markets – regular community events, pop-up food markets, sports traditions, and more.
15. <h2>Area Vibe Score – summarize the personality of the area</h2>
- Include: <strong>Overall Vibe:</strong> with a one-line summary of the area's personality.
- Provide a list of lifestyle trait scores, each with:
    • Label with emoji (e.g., 🔥 Trendy Factor)  
    • A visual 10-character emoji bar to represent the score. Use:
        - 🟩 for filled (1 point each)  
        - ⬜ for empty  
        - 🟨 optionally for mid-level (e.g., 0.5s if you want to show them)

    • Example format:
      🔥 Trendy Factor: 🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜
- Traits to include:
    - 🔥 Trendy Factor  
    - 👨‍👩‍👧‍👦 Family Friendliness  
    - 🎓 Student Life  
    - 🌳 Green Spaces  
    - 🚶 Walkability  
    - 🔊 Noise Level  

- Add: <strong>Vibe in 5 Emojis:</strong> A row of 5 emojis that capture the area's personality.
Make the tone friendly, conversational, and local—like you're chatting with a newcomer to Dublin. Be informative and warm. Add local flavour, quirks, slang, and insights where appropriate. Mention hidden gems or traditions that make the area unique.

Use only semantic HTML tags: <h1>, <h2>, <p>, <ul>, <li>, <div>, <span>. Do NOT include any CSS or JavaScript. Keep the structure clean, readable, and valid as raw HTML.`;
  const result = await generateText({
    model: openai.chat("gpt-4"),
    prompt,
  });

  const htmlContent = result.text;

  const filePath = path.join(summariesDir, `${area.toLowerCase()}.html`);
  await fs.mkdir(summariesDir, { recursive: true });
  await fs.writeFile(filePath, htmlContent);
};
