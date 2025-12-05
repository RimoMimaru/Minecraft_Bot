const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "play.server.com",
  port: 25565,
  username: "BotUsername"
});

bot.on('spawn', () => {
  console.log("Bot đã vào server!");
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === 'hi') bot.chat('Hello!');
});
