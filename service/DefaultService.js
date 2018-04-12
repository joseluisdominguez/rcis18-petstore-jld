'use strict';


/**
 * Creates a new pet in the store.  Duplicates are allowed
 *
 * pet Pet Pet to add to the store
 * returns pet
 **/
exports.addPet = function(pet) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "bobby",
  "tag" : "dog"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * deletes a single pet based on the ID supplied
 *
 * name String Name of pet to delete
 * no response value expected for this operation
 **/
exports.deletePet = function(name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns a user based on a single ID, if the user does not have access to the pet
 *
 * name String name of pet to fetch
 * returns pet
 **/
exports.findPet = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "bobby",
  "tag" : "dog"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all pets from the system that the user has access to
 *
 * returns List
 **/
exports.findPets = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "bobby",
  "tag" : "dog"
}, {
  "name" : "bobby",
  "tag" : "dog"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

