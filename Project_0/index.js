const { Telegraf } = require("telegraf");
require("dotenv").config();
const { message } = require("telegraf/filters");
const bot = new Telegraf(process.env.BOT_TOKEN);

try {
  bot.start((ctx) => ctx.reply("Hello, I am bot of all the bots."));
  bot.command("hello", (ctx) => ctx.reply("Hello, how can I help you?"));
  bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
  bot.launch();
} catch (err) {
  console.log("Error");
}
