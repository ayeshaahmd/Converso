import { createTranslatedMessage } from "./server/src/services/chatService.js";
import mongoose from "mongoose";
import { User } from "./server/src/models/User.js";
import { env } from "./server/src/config/env.js";

async function test() {
  console.log("Testing full message creation with translation...");
  try {
    await mongoose.connect(env.mongoUri);
    const admin = await User.findOne({ username: "admin" });
    const partner = await User.findOne({ username: "silentsoul" });

    if (!admin || !partner) {
      console.error("Users not found");
      process.exit(1);
    }

    console.log(`Admin Lang: ${admin.preferredLanguage}, Partner Lang: ${partner.preferredLanguage}`);

    // Simulate partner sending a message to admin
    const msg = await createTranslatedMessage({
      sender: partner,
      receiver: admin,
      text: "How are you today?",
    });

    console.log("Message created:");
    console.log(`Original: ${msg.originalText}`);
    console.log(`Receiver Translation: ${msg.receiverTranslatedText}`);
    console.log(`Sender Translation: ${msg.senderTranslatedText}`);
    console.log(`Provider: ${msg.translationProvider}`);

    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

test();
