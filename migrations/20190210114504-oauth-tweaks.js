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
  db.removeColumn('oauth_creds', 'client_id');
  db.removeColumn('oauth_creds', 'client_secret');
  db.addColumn('oauth_creds', 'access_token', {type:'string', notNull: true});
  return null;
};

exports.down = function(db) {
  db.addColumn('oauth_creds', 'client_id', {type:'string', notNull: true});
  db.addColumn('oauth_creds', 'client_secret', {type:'string', notNull: true});
  db.removeColumn('oauth_creds', 'access_token');
  return null;
};

exports._meta = {
  "version": 1
};
