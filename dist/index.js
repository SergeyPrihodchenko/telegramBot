import TelegramBot from "node-telegram-bot-api";
import { config } from 'dotenv';
import crypto from 'crypto';
config();
const tokenBot = process.env['API_KEY_BOT'];
if (typeof tokenBot !== 'string') {
    throw new Error("Unvalid bot's token");
}
const bot = new TelegramBot(tokenBot, {
    polling: true
});
bot.on("polling_error", (err) => console.log(err.data.error.message));
bot.on('text', async (msg) => {
    let hash = msg.text;
    if (typeof hash !== 'string') {
        hash = 'Enter your password!';
    }
    else {
        if (hash == '/start') {
            hash = 'Добро пожаловать!';
        }
        else {
            hash = crypto.createHash('md5').update(hash).digest('hex');
        }
    }
    await bot.sendMessage(msg.chat.id, hash);
    console.log('pass send !');
});
