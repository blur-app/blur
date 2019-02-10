'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('following', {
    follower: {type: 'int',
      foreignKey: {
        name: 'follower_user_id_fk',
        table: 'users',
        mapping: 'user_id',
        rules:{
          onDelete: "NO ACTION"}}},
    followee: {type: 'int',
      foreignKey: {
        name: 'followee_id_fk',
        table: 'users',
        mapping: 'user_id',
        rules:{
          onDelete: "NO ACTION"}}},
  });
  return null;
};

exports.down = function(db) {
  db.dropTable('following');
  return null;
};

exports._meta = {
  "version": 1
};
