const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// --- Web server để Railway giữ project awake ---
app.get('/', (req, res) => res.send('Bot Minecraft đang chạy 24/7!'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Web server chạy port ${port}`));

// --- Bot Minecraft ---
function createBot() {
  const bot = mineflayer.createBot({
    host: 'SMP_Sever_NH1.aternos.me', // thay bằng server Aternos của bạn
    port: 42903,                     // port server Minecraft
    username: 'Bot',        // tài khoản Microsoft/Mojang
    auth: 'offline'
  });

  bot.on('spawn', () => console.log('Bot đã vào server!'));
  bot.on('end', () => setTimeout(createBot, 5000)); // auto reconnect
}

createBot();
