const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const startApplication = async () => {
  await app.listen(PORT);
  console.log(`Successfully listening on port ${PORT}`);
}

startApplication();
