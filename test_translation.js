import { translateHybrid } from "./server/src/services/translationService.js";

async function run() {
  const senderTranslation = await translateHybrid("fine", "en", "EN");
  console.log("fine -> EN (source=en):", senderTranslation);
}

run().catch(console.error);
