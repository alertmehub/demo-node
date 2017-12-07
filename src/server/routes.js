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

    // Retrieve Data
    const npTokenUrl = "http://np-service.azurewebsites.net/api/token/40ea0c05e0019d264230e0d69c292ddc9f46acc3e827f34012a24de4c3feca83/toyita.com/";

    let npToken = await axios.get(npTokenUrl + userId );

    // Return
    res.status(200).json(npToken.data);
  }
  catch(error){
      res.status(500).send(error);
  }
}


module.exports = router;
