/*jslint node: true */
/*jslint nomen: true */
"use strict";

var ObjectID = require('mongodb').ObjectID;

function getCollection(db) {
  return db.collection('recipes');
}

function wrapId(id) {
  return new ObjectID(id);
}

module.exports = {

  getAll: function(db, callback) {
    getCollection(db).find().toArray(callback);
  },

  getById: function(db, id, callback) {
    var params = {
      '_id': wrapId(id)
    };
    getCollection(db).findOne(
      params,
      callback
    );
  },

  deleteOne: function(db, id, callback) {
    var params = {
      '_id': wrapId(id)
    };
    getCollection(db).deleteOne(
      params,
      undefined,
      callback
    );
  },

  save: function(db, object, callback) {
    getCollection(db).save(
      object,
      callback
    );
  },

  update: function(db, id, object, callback) {
    object._id = wrapId(id);
    var params = {
        '_id': wrapId(id)
      },
      operation = {
        $set: object
      },
      opts = {
        upsert: true,
        returnOriginal: false
      };
    getCollection(db).findOneAndUpdate(
      params,
      operation,
      opts,
      callback
    );
  }
};
