const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('Sonarr and Radarr Sync Webhook');
});

module.exports = router;
