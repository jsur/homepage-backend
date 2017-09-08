const express = require('express');
const router = express.Router();
const contentful = require('contentful');

require('dotenv').config({'path': '.env'});

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACEID,
  accessToken: process.env.CONTENTFUL_API_KEY
});

router.get('/homepage', (req, res, next) => {

  client.getEntries()
    .then(function (entry) {
      res.json(entry);
    })
    .catch(function (error) {
      res.json(error);
    }
  );
});

module.exports = router;
