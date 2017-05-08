const Router = require('express').Router();

Router.get('', (req, res) => {
  res.json({
    result: 'success'
  });
});

module.exports = Router;