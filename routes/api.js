const express = require('express');
const router = express.Router();
const contentful = require('contentful');
const axios = require('axios');

require('dotenv').config({'path': '.env'});

const space = process.env.CONTENTFUL_SPACEID;
const accessToken = process.env.CONTENTFUL_API_KEY;
const apiurl = `https://cdn.contentful.com/spaces/${space}/entries?access_token=${accessToken}&content_type=`

router.get('/homepage', async (req, res, next) => {

  let [
    header,
    productDesc,
    whatIs,
    comparison,
    simpleProcessHeader,
    simpleProcessCards,
    customersSayHeader,
    customersSayCards,
    inBeta,
    security,
    teamHeader,
    teamCards,
    contact,
    contactPhone,
    footer
    ] = await Promise.all([
     axios.get(`${apiurl}sFzTZbSuM8coEwygeUYes`),
     axios.get(`${apiurl}productDescriptionCards`),
     axios.get(`${apiurl}whatIsConsentio`),
     axios.get(`${apiurl}comparison`),
     axios.get(`${apiurl}processCardHeader`),
     axios.get(`${apiurl}simpleProcess`),
     axios.get(`${apiurl}customersSayHeader`),
     axios.get(`${apiurl}customersSayCard`),
     axios.get(`${apiurl}inBeta`),
     axios.get(`${apiurl}security`),
     axios.get(`${apiurl}teamHeader`),
     axios.get(`${apiurl}teamCard`),
     axios.get(`${apiurl}contact`),
     axios.get(`${apiurl}contactPhoneNumber`),
     axios.get(`${apiurl}footer`)
   ]);

  homepageData = {};

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
  homepageData['contact'] = contact.data;
  homepageData['contactPhone'] = contactPhone.data;
  homepageData['footer'] = footer.data;

  res.send(homepageData);

});

module.exports = router;
