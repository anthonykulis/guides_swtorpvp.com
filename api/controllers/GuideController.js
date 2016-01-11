/**
 * GuidesController
 *
 * @description :: Server-side logic for managing Guides
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req,res){
    Guide.find().exec(function(err, guides){
      console.log('on find')
      if(err) res.json(500, err);
      else res.json(guides);
    });
  }
};

