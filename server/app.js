const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'dist'))); // Отдаём статику

app.get('/api/emojis', async (req, res) => {
  try {
    const response = await axios.get('https://emojihub.yurace.pro/api/all');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching emojis' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
