let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);

























// const TelegramBot = require('node-telegram-bot-api');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000

// const token = '6067105307:AAFDNNBsD45UN-p9qQTrjqVkhAxqC802TS4';
// const bot = new TelegramBot(token);

// //Подключенные файлы
// const keyboards = require('./keyboards.js')

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const text = msg.text;
//     if(text === '/start'){
//         bot.sendMessage(chatId, 'Привет! Выбери одну из функций.',keyboards.keyboardMain)
//         bot.getChat('@avtoimotomoto').then((chat) => {
//             console.log('Информация о канале:', chat);
//           })
        
//     }
//     if (msg.chat.id === -1001928827238) {
//         // Ваш код для обработки сообщения
//         console.log('Получено сообщение из канала:', msg.text);
//     }
// });

// // Обработка входящих обновлений

  
 
  


// // Настройка вебхука на сервере
// app.use(bodyParser.json());
// app.post('/webhook', (req, res) => {
//   bot.processUpdate(req.body);
//   res.sendStatus(200);
// });

  
//   // Запуск сервера
//   app.listen(port, () => {
//     console.log(`Сервер запущен на порту ${port}`);
//     // Установка вебхука на сервере Telegram
//     bot.setWebHook('https://c707-5-144-74-134.ngrok.io/webhook')
//   });