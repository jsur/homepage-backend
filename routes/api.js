const express = require('express');
const router = express.Router();
const contentful = require('contentful');
const axios = require('axios');

require('dotenv').config({'path': '.env'});

const space = process.env.CONTENTFUL_SPACEID;
const accessToken = process.env.CONTENTFUL_API_KEY;
const apiurl = `https://cdn.contentful.com/spaces/${space}/entries?access_token=${accessToken}&content_type=`

const headerContentType = 'sFzTZbSuM8coEwygeUYes';
const productDescContentType = 'productDescriptionCards';
const whatIsContentType = 'whatIsConsentio';
const comparisonContentType = 'comparison';
const simpleProcessHeaderContentType = 'processCardHeader';
const simpleProcessCardContentType = 'simpleProcess';
const customersSayHeaderContentType = 'customersSayHeader';
const customersSayCardContentType = 'customersSayCard';
const inBetaContentType = 'inBeta';
const securityContentType = 'security';
const teamHeaderContentType = 'teamHeader';
const teamCardsContentType = 'teamCard';

router.get('/homepage', async (req, res, next) => {

  homepageData = {};

  const header = await axios.get(`${apiurl}${headerContentType}`);
  const productDesc = await axios.get(`${apiurl}${productDescContentType}`);
  const whatIs = await axios.get(`${apiurl}${whatIsContentType}`);
  const comparison = await axios.get(`${apiurl}${comparisonContentType}`);
  const simpleProcessHeader = await axios.get(`${apiurl}${simpleProcessHeaderContentType}`);
  const simpleProcessCards = await axios.get(`${apiurl}${simpleProcessCardContentType}`);
  const customersSayHeader = await axios.get(`${apiurl}${customersSayHeaderContentType}`);
  const customersSayCards = await axios.get(`${apiurl}${customersSayCardContentType}`);
  const inBeta = await axios.get(`${apiurl}${inBetaContentType}`);
  const security = await axios.get(`${apiurl}${securityContentType}`);
  const teamHeader = await axios.get(`${apiurl}${teamHeaderContentType}`);
  const teamCards = await axios.get(`${apiurl}${teamCardsContentType}`);

  homepageData['header'] = header.data;
  homepageData['productDesc'] = productDesc.data;
  homepageData['whatIs'] = whatIs.data;
  homepageData['comparison'] = comparison.data;
  homepageData['simpleProcessHeader'] = simpleProcessHeader.data;
  homepageData['simpleProcessCards'] = simpleProcessCards.data;
  homepageData['customersSayHeader'] = customersSayHeader.data;
  homepageData['customersSayCards'] = customersSayCards.data;
  homepageData['inBeta'] = inBeta.data;
  homepageData['security'] = security.data;
  homepageData['teamHeader'] = teamHeader.data;
  homepageData['teamCards'] = teamCards.data;

  res.send(homepageData);

});

module.exports = router;
