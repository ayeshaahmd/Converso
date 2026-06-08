import { createTranslatedMessage } from "./server/src/services/chatService.js";
import mongoose from "mongoose";

async function run() {
  await mongoose.connect("mongodb://localhost:27017/chat-app");
  
  const sender = {
    _id: new mongoose.Types.ObjectId(),
    preferredLanguage: "EN",
    blockedUsers: []
  };
  
  const receiver = {
    _id: new mongoose.Types.ObjectId(),
    preferredLanguage: "TR",
    blockedUsers: []
  };

  try {
    const msg = await createTranslatedMessage({
      sender,
      receiver,
      text: "how",
      initialStatus: "sent"
    });
    console.log("how ->", msg);
  } catch(e) {
    console.error(e);
  }
  
  try {
    const msg2 = await createTranslatedMessage({
      sender,
      receiver,
      text: "fine",
      initialStatus: "sent"
    });
    console.log("fine ->", msg2);
  } catch(e) {
    console.error(e);
  }
  
  process.exit(0);
}

run();
