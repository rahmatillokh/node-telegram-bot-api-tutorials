require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.token, { polling: true });

bot.onText(/start/, (msg, match) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Botimizga xush kelibsiz!");
});

bot.onText(/help/, (msg, match) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Yordam bo'limi");
});
