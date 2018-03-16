const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/authorize/:id', (req, res) => {
  getToken(req, res);
});

async function getToken(req, res){
  try{
    // Authenticate
    // Check the token passed in, and lookup the user
    // For this demo - we'll assume the token is valid and hard code the userid
    const userId = '111111111';

    var alertmeClient = axios.create({
      baseURL: 'http://api.alertmehub.com/api/',
      timeout: 1000,
      headers: {'Authorization': '3f27a22d980134dfc46cf8da5aa1d02ea08802d26804f0db604439281aff14c6'}
    });

    // Retrieve Data
    let npToken = await alertmeClient.get("token/toyita.com/" + userId );

    // Return
    res.status(200).json(npToken.data);
  }
  catch(error){
      res.status(500).send(error);
  }
}


module.exports = router;
