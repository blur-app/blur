'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    db.createTable('users', {
        user_id: {type: 'int', primaryKey: true, notNull: true, unique: true, autoIncrement: true},
        uuid: {type: 'string', notNull: true, unique: true},
        username: {type: 'string', notNull: true},
        password_hash: {type: 'string', notNull: true},
        first_name: {type: 'string'},
        last_name: {type: 'string'},
    });

    db.createTable('content', {
        content_id: {type: 'int', primaryKey: true, notNull: true, unique: true, autoIncrement: true},
        content_uuid: {type: 'string', notNull: true, unique: true},
        type: {type: 'int', notNull: true},
        source: {type: 'string'}
    });

    db.createTable('posts', {
        post_id: {type: 'int', notNull: true, unique: true, primaryKey: true, autoIncrement: true},
        post_uuid: {type: 'string', notNull: true, unique: true},
        user_id: {type: 'int',
            foreignKey: {
                name: 'posts_user_id_fk',
                table: 'users',
                mapping: 'user_id',
                rules:{
                    onDelete: "NO ACTION"}}},
        content_id: {type: 'int',
            foreignKey: {
                name: 'posts_content_id_fk',
                table: 'content',
                mapping: 'content_id',
                rules:{
                    onDelete: "NO ACTION"}}},
        timestamp: {type: "timestamp", notNull: true}
    });

    db.createTable('postReacts', {
        react_id: {type: 'int',
            foreignKey: {
                name: 'postReacts_post_react_id_fk',
                table: 'reacts',
                mapping: 'react_id',
                rules:{
                    onDelete: "NO ACTION"}}},
        user_id: {type: 'int',
            foreignKey: {
                name: 'postReacts_user_id_fk',
                table: 'users',
                mapping: 'user_id',
                rules:{
                    onDelete: "NO ACTION"}}},

        post_id: {type: 'int',
            foreignKey: {
                name: 'postReacts_post_id_fk',
                table: 'posts',
                mapping: 'post_id',
                rules:{
                    onDelete: "NO ACTION"}}},
        post_react_id: {type: 'int', notNull: true, primaryKey: true, autoIncrement: true},
        timestamp: {type: "timestamp", notNull: true}
    });

    db.createTable('reacts', {
        react_id: {type: 'int', primaryKey: true, notNull: true, unique: true, autoIncrement: true},
        name: {type: 'string', notNull: true, unique: true},
        source: {type: 'string', notNull: true}
    });

    return null;
};

exports.down = function (db) {
    db.dropTable('users');
    db.dropTable('content');
    db.dropTable('posts');
    db.dropTable('postReacts');
    db.dropTable('reacts');
    return null;
};

exports._meta = {
    "version": 1
};
