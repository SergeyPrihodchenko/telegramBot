import TelegramBot from "node-telegram-bot-api";
import { config } from 'dotenv';
import { Dotnet } from "./types/types";
import CryptoController from "./controllers/Crypto";

config();

const tokenBot: Dotnet = process.env['API_KEY_BOT'];

if (typeof tokenBot !== 'string') {
    throw new Error("Unvalid bot's token");
}

const bot: TelegramBot = new TelegramBot(tokenBot, {

    polling: true

});

bot.on("polling_error", (err: any) => console.log(err.data.error.message));

bot.on('text', async msg => {

    let hash = msg.text;
    if (typeof hash !== 'string') {
        hash = 'Enter your password!';
    } else {
        if (hash == '/start') {
            const keyboard = [
                [
                    { text: 'Кнопка 1', callback_data: 'button_1' },
                    { text: 'Кнопка 2', callback_data: 'button_2' }
                ],
                [
                    { text: 'Кнопка 3', callback_data: 'button_3' }
                ]
            ];
            bot.sendMessage(msg.chat.id, 'Выберите кнопку:', {
                reply_markup: {
                    inline_keyboard: keyboard
                }
            });
        } else {
            hash = new CryptoController(hash).hash();
        }
    }

    await bot.sendMessage(msg.chat.id, hash);
    console.log('pass send !');
})