const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_SERVER,
    username: process.env.MC_USER,
    password: process.env.MC_PASS,
    version: false
  })

  // Khi bot vào server
  bot.on('spawn', () => {
    console.log("Bot đã vào server!")

    // Auto chat mỗi 60 giây
    setInterval(() => {
      bot.chat("Hello! Bot vẫn đang ở đây :D")
    }, 60000)

    // Anti-AFK: xoay nhẹ mỗi 5 giây
    setInterval(() => {
      bot.look(Math.random() * Math.PI, Math.random() * Math.PI)
    }, 5000)
  })

  // Auto reconnect
  bot.on('end', () => {
    console.log("Mất kết nối! Bot đang reconnect...")
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log("Lỗi:", err)
  })
}

createBot()
