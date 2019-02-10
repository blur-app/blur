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
Post and Content Table Queries
 */

// Return all Posts
const getAllPosts:Function = async () => {
    const data = await db.any('SELECT * FROM posts orderby timestamp');
    return data;
};
//Return n posts
const getNPosts:Function = async (n: number) => {
    const data = await db.any('SELECT * FROM posts orderby timestamp limit ' + String(n));
    return data;
};
// Create new post based on args
const createPost:Function = (args: Object) => {
    const values: Object = Object.assign({}, args, {uuid: uuidv4()});
    db.none('INSERT INTO users(post_id, uuid, user_id, timestamp, host, source) VALUES($<post_id>, ' +
        '$<uuid>, $<user_id>, $<timestamp>, $<host>, $<source>)', values)
        .then((data: any) => console.warn('Success', data));
};

const createOauthCreds:Function = (args:Object)=>{
  const values: Object = Object.assign({}, args);
  db.none('INSERT INTO oauth_creds(client_id, client_secret, service, user_id, refresh_token) VALUES(' +
      '$<client_id>, $<client_secret>, $<service>, $<user_id>, $<refresh_token>)', values)
      .then((data: any) => console.warn('Success', data));

};



/*
React Table Queries
 */



/*
PostReact Table Queries
 */



// login to services
const daLogin:Function = (args: Object) => {
    const values: Object = Object.assign({}, args, )
}


//
export default {
    getUser,
    getAllUsers,
    createUser,
    getAllPosts,
    getNPosts,
    createPost,
    createOauthCreds
};