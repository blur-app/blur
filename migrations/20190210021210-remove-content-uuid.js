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
  db.removeColumn('content', 'content_uuid');
  return null;
};

exports.down = function(db) {
  db.addColumn()('content', 'content_uuid', {type: 'string', notNull: true, unique: true});

  return null;
};

exports._meta = {
  "version": 1
};
