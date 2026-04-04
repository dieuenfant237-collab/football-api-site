const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.send('API Football fonctionne 🚀');
});

app.get('/matches', async (req, res) => {
  try {
    const response = await axios.get('https://v3.football.api-sports.io/fixtures?live=all', {
      headers: {
        'x-apisports-key': '1a75b32YmFdbseEwfMCsY3lcuycW8DRN1BULcaQOBmy3FqX32UCBmwruz6S5
      }
    });

    res.json(response.data);
  } catch (error) {
    res.send('Erreur API');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running');
});
