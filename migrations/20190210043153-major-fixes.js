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
  db.changeColumn('following', 'follower', {primaryKey:true});
  db.changeColumn('following', 'followee', {primaryKey: true});
  db.removeColumn('posts', 'content_id');
  db.dropTable('content');
  db.addColumn('posts' , 'host', {type:'string'});
  db.addColumn('posts' , 'source', {type:'string'});

  return null;
};

exports.down = function(db) {
  db.changeColumn('following', 'follower', {primaryKey: false});
  db.changeColumn('following', 'followee', {primaryKey: false});
  db.createTable('content', {
    content_id: {type: 'int', primaryKey: true, notNull: true, unique: true, autoIncrement: true},
    content_uuid: {type: 'string', notNull: true, unique: true},
    type: {type: 'int', notNull: true},
    source: {type: 'string'}
  });
  db.addColumn('posts', 'content_id', {type: 'int',
      foreignKey: {
    name: 'posts_content_id_fk',
        table: 'content',
        mapping: 'content_id',
        rules:{
      onDelete: "NO ACTION"}}},);
  db.removeColumn('posts', 'host');
  db.removeColumn('posts', 'source');

  return null;
};

exports._meta = {
  "version": 1
};
