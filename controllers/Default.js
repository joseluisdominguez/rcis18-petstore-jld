'use strict';

var pets = new Map();
pets.set("rufo",{ "name": "rufo", "tag" : "dog" });


module.exports.addPet = function addPet (req, res, next) {
  var pet = req.swagger.params['pet'].value;
  
  if (pets.has(pet.name)){
    res.sendStatus(409);
  } else {
    pets.set(pet.name, pet)
    res.sendStatus(201);
  }
  
};

module.exports.deletePet = function deletePet (req, res, next) {
  var name = req.swagger.params['name'].value;
  
  if (pets.has(name)){
    pets.delete(name)
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
  
};

module.exports.findPet = function findPet (req, res, next) {
  var name = req.swagger.params['name'].value;
  
  if (pets.has(name)){
    var pet = pets.get(name);
    res.send(JSON.stringify(pet));
  } else {
    res.sendStatus(404);
  }
  
};

module.exports.findPets = function findPets (req, res, next) {
  
  var petsArray = Array.from( pets.values() );
  
  res.send(JSON.stringify(petsArray));
};