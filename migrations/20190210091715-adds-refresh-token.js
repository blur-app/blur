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
  db.addColumn('oauth_creds', 'refresh_token', {type: 'string'});
  return null;
};

exports.down = function(db) {
  db.removeColumn('oauth_creds', 'refresh_token');
  return null;
};

exports._meta = {
  "version": 1
};
