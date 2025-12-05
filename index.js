const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// --- Web server để Fly.io giữ bot awake ---
app.get('/', (req, res) => res.send('Bot Minecraft đang chạy 24/7!'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Web server chạy port ${port}`));

// --- Bot Minecraft offline mode ---
function createBot() {
  const bot = mineflayer.createBot({
    host: 'SMP_Sever_NH1.aternos.me', // Thay bằng host server Aternos offline
    port: 42903,                        // Thay bằng port hiện tại
    username: 'Bot',                     // Tên bot
    auth: 'offline',                     // Offline mode
    version: '1.21.10'                  // Phiên bản Minecraft server
  });

  bot.on('spawn', () => console.log('Bot đã vào server!'));

  // Debug nếu bot bị kick hoặc lỗi
  bot.on('kicked', (reason) => console.log('Bot bị kick:', reason));
  bot.on('error', (err) => console.log('Lỗi bot:', err));

  // Auto reconnect nếu disconnect
  bot.on('end', () => {
    console.log('Bot bị disconnect, sẽ reconnect sau 5s...');
    setTimeout(createBot, 5000);
  });
}

// Tạo bot lần đầu
createBot();
