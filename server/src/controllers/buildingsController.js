const buildings = require('../models/buildings');


let buildingsController = {

    buildings: function(req,res){

        buildings.find()
        .then(allBuildings => res.json(allBuildings))
      },
    
      buildingsID:function(req,res){

        const {buildings_id} = req.params

        buildings
        .findById(buildings_id)
        .then(buildings => res.json(buildings))
      }}


    module.exports = buildingsController;