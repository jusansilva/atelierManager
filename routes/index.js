var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Atelier Manager' });
});

router.get('/cadastro', (req, res) => {
    res.render('cadastro', { title: 'Atelier Manager' });
});

module.exports = router;
