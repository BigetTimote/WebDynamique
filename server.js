const express = require('express');
const app = express();
const port = 3000; // Le port sur lequel votre serveur écoutera

// Middleware pour simuler une page d'erreur Apache
app.use((req, res) => {
    res.status(404).send(`
      <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
      <html>
      <head>
        <title>404 Not Found</title>
      </head>
      <body>
        <h1>Not Found</h1>
        <p>The requested URL ${req.url} was not found on this server.</p>
        <hr>
        <address>Apache/2.4.41 (Ubuntu) Server at ${req.hostname} Port ${port}</address>
      </body>
      </html>
    `);
  });

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
