const express = require('express');
const router = express.Router();

router.get('/query/author', (req, res) => {
    res.send('Busqueda por Autor');
})

router.get('/query/category', (req, res)=>{
    res.send('Busqueda por categoria');
})

router.get('/query/title', (req, res)=>{
    res.send('Busqueda por titulo');
})

module.exports = router;