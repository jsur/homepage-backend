const express = require('express');
const router = express.Router();
const contentful = require('contentful');
const axios = require('axios');

require('dotenv').config({'path': '.env'});

const space = process.env.CONTENTFUL_SPACEID;
const accessToken = process.env.CONTENTFUL_API_KEY;
const apiurl = `https://cdn.contentful.com/spaces/${space}/entries?access_token=${accessToken}&content_type=`

const headerContentType = 'sFzTZbSuM8coEwygeUYes'
const productDescContentType = 'productDescriptionCards'

router.get('/homepage', async (req, res, next) => {
  
  homepageData = {};
  
  const header = await axios.get(`${apiurl}${headerContentType}`);
  const productDesc = await axios.get(`${apiurl}${productDescContentType}`);
  
  homepageData['header'] = header.data;
  homepageData['productDesc'] = productDesc.data;
  
  res.send(homepageData);
  
});

module.exports = router;
