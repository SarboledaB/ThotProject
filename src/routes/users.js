const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.send('Logueado En Thot');
})

router.get('/users/signup', (req, res)=>{
    res.send('Registro en Thot');
})

module.exports = router;