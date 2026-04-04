
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API Football fonctionne 🚀');
});

app.get('/matches', (req, res) => {
  res.send('Route matchs OK ⚽');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
