const express = require('express');
const app = express();
const port = 8080;

app.get('/health', (req, res) => {
  res.send('API is healthy');
});

app.listen(port, () => {
  console.log(`API service running at http://localhost:${port}`);
});