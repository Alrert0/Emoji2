# 🌐 Emoji Hub

Emoji Hub — это веб-приложение для просмотра эмодзи, использующее внешний API. Проект состоит из двух частей:
- 🖥️ **Клиент (React + Vite)** — фронтенд-интерфейс
- 🌐 **Сервер (Express)** — прокси-сервер для безопасного обращения к внешнему API

---

## 📁 Структура проекта

/Emoji2
├── client/ # React-приложение
│ ├── public/
│ ├── src/
│ ├── index.html
│ └── package.json
├── server/ # Express-сервер
│ └── app.js
└── README.md

yaml
Копировать
Редактировать

---

## 🚀 Быстрый старт (локально)

### 1. Клонируй репозиторий

```bash
git clone https://github.com/your-username/emoji-hub.git
cd Emoji2
2. Установка зависимостей
Клиент:
bash
Копировать
Редактировать
cd client
npm install
Сервер:
bash
Копировать
Редактировать
cd ../server
npm install
3. Запуск проекта
Клиент:
bash
Копировать
Редактировать
cd client
npm run dev
Сервер:
bash
Копировать
Редактировать
cd server
node app.js
🌍 Деплой на Render
🖥️ Клиент (Static Site)
Перейди на Render

Нажми New → Static Site

Настрой параметры:

Параметр	Значение
Name	emoji-client
Root Directory	client
Build Command	npm run build
Publish Directory	dist
Node Version	22.14.0 (или файл .node-version)
Start Command	(не указывать!)

🌐 Сервер (Web Service)
Нажми New → Web Service

Настрой параметры:

Параметр	Значение
Name	emoji-server
Root Directory	server
Start Command	node app.js
Port	5000 (или авто)

🔗 Использование API
js
Копировать
Редактировать
// Пример запроса из клиента
const response = await fetch('https://emoji2-1.onrender.com/api/emojis');
const data = await response.json();
Замените emoji2-1.onrender.com на актуальный URL вашего сервера на Render.

⚙️ Дополнительно
.node-version
Если Render требует указания версии Node.js:

Копировать
Редактировать
22.14.0
🧩 Технологии
React 19 + Vite

Express.js

Axios

Render

CORS

📄 Лицензия
MIT — свободно используй и дорабатывай 🙌
