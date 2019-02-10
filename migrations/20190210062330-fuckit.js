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
  db.dropTable('oauth_creds');

  db.createTable('oauth_creds',{
    client_id:{type:'string', notNull: true},
    client_secret:{type:'string', notNull:true},
    user_id: {type: 'int', primaryKey:true,
      foreignKey: {
        name: 'posts_user_id_fk',
        table: 'users',
        mapping: 'user_id',
        rules:{
          onDelete: "NO ACTION"}}},
    service: {type:'string', notNull:true, primaryKey: true}
  });  return null;
};

exports.down = function(db) {
  db.dropTable('oauth_creds');
  return null;
};

exports._meta = {
  "version": 1
};
