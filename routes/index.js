const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'GICC' }); // render index.ejs and pass the json object {title:GICC}
});

module.exports = router;
