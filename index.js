const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "SMP_Sever_NH1.aternos.me",
  port: 42903,
  username: "BotAFK"
});

bot.on('spawn', () => {
  console.log("Bot đã vào server!");
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === 'hi') bot.chat('Hello!');
});
