import axios from "axios";

async function test() {
  console.log("Testing MyMemory with empty source for mixed message...");
  try {
    const text = "Merhaba, how are you today?";
    const target = "tr";
    const response = await axios.get(
      "https://api.mymemory.translated.net/get",
      {
        params: {
          q: text,
          langpair: `|${target}`,
        },
        timeout: 8000,
      },
    );
    console.log("Result:", response.data?.responseData?.translatedText);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

test();
