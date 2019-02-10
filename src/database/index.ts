import promise from 'bluebird';
import pgpromise, {IDatabase, IMain} from 'pg-promise';
import uuidv4 from 'uuid/v4';

const options: any = {
    promiseLib: promise,
};

const pgp:IMain = pgpromise(options);

const cn:any = {
    host: process.env.PG_GCLOUD_HOST,
    port: 5432,
    database: process.env.PG_GCLOUD_DB,
    user: process.env.PG_GCLOUD_USER,
    password: process.env.PG_GCLOUD_PW
};

const db:IDatabase<any> = pgp(cn);


/*
User Table Queries
 */

// Return user based on given id
const getUser:Function = async (args: Object) => {
    const data = await db.any('SELECT * FROM users WHERE user_id = $<user_id>', args);
    return data;
};
// Return all Users
const getAllUsers:Function = async () => {
    const data = await db.any('SELECT * FROM users');
    return data;
};
// Create new user based on args
const createUser:Function = (args: Object) => {
    const values: Object = Object.assign({}, args, {uuid: uuidv4()});
    db.none('INSERT INTO users(uuid, username, password_hash, first_name, last_name) VALUES($<uuid>, $<username>, $<password_hash>, $<first_name>, $<last_name>)', values)
        .then((data: any) => console.warn('Hiya', data));
};



/*
React Table Queries
 */

// Return all Reacts
const getAllReacts:Function = async () => {
    return await db.any('SELECT * FROM reacts orderby name');
};



/*
Post and PostReact Table Queries
 */

// Return all Posts
const getAllPosts:Function = async () => {
    return await db.any('SELECT * FROM posts outer join postReacts on posts.user_id = postReacts.user_id' +
        'group by postReacts.post_id order by post.timestamp');
};
//Return n posts
const getNPosts:Function = async (n: number) => {
    return await db.any('SELECT * FROM posts order by timestamp limit ' + String(n));
};
// Create new post based on args
const createPost:Function = (args: Object) => {
    console.warn('in insert dood');
    const values: Object = Object.assign({}, args, {uuid: uuidv4()});
    db.none('INSERT INTO users(post_id, uuid, user_id, content_id, timestamp, host, source) VALUES($<post_id>, ' +
        '$<uuid>, $<user_id>, $<content_id>, $<timestamp>, $<host>, $<source>)', values)
        .then((data: any) => console.warn('Hiya', data));
};




//
export default {
    getUser,
    getAllUsers,
    createUser,
    getAllPosts,
    getNPosts,
    createPost,
    getAllReacts
}