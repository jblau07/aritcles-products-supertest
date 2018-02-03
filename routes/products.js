const express = require('express');
const router = express.Router();

const db = require('../db/products');

router.route('/')
  .get((req, res) => {
    const result = db.findAll();
    res.json(result);
  })
  .post((req, res) => {
    const data = req.body;
    const result = db.create(data);
    if (result === 1) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  })

router.route('/:id')
  .get()
  .put()
  .delete()

module.exports = router;