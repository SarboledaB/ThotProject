const express = require('express');
const router = express.Router();

router.get('/books', (req, res) => {
    res.send('Lista de libros');
});



module.exports = router;