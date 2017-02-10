var util = require('util');
var {Router} = require('express');

export function createTodoApi() {

  var router = Router()

  router.route('/todos').get(function(req, res) {
      console.log('GET');
      setTimeout(function() {
        res.json({lul:"kappa"});
      }, 0);
    })

  return router;
};
