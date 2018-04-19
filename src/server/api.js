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
    // For this demo - we'll assume the user is valid and hard code the userid
    const userId = 'bob';

    var alertmeClient = axios.create({
      baseURL: 'https://api.alertmehub.com/api/v1',
      timeout: 1000,
      headers: {'Authorization': '57cb16692a9a96daa177432bfa95ba1527762b24e2c2fc7b5e78c316660763b5'}
    });

    // Retrieve Data
    let npToken = await alertmeClient.get("subscriber/token/" + userId );

    // Return
    res.status(200).json(npToken.data);
  }
  catch(error){
      res.status(500).send(error);
  }
}


module.exports = router;
