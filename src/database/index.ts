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
    return await db.one('SELECT * FROM users WHERE user_id = $<user_id>;', args);
};
// Return all Users
const getAllUsers:Function = async () => {
    return await db.any('SELECT * FROM users;');
};
// Create new user based on args
const createUser:Function = (args: Object) => {
    const values: Object = Object.assign({}, args, {uuid: uuidv4()});
    db.none('INSERT INTO users(uuid, username, password_hash, first_name, last_name, email) VALUES($<uuid>, $<username>, $<password_hash>, $<first_name>, $<last_name>, $<email>)', values)
        .then((data: any) => console.warn('Hiya', data));
};

//
const authUser:Function = async (args: User) => {
    const userData = await db.one('SELECT * FROM users WHERE username = $<username>', args);
    if(userData.password_hash === args.password_hash) {
        return userData
    }
    throw Error('You tried authing with the wrong password bro')
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
    return await db.any('SELECT posts.* FROM posts left outer join post_reacts on posts.user_id = post_reacts.user_id order by posts.timestamp');
};
// Return n posts
const getNPosts:Function = async (args: Object) => {
    return await db.any('SELECT * FROM posts order by timestamp limit $<n> ', args);
};
// Create new post based on args
const createPost:Function = (args: Object) => {
    const values: Object = Object.assign({}, args, {uuid: uuidv4()});
    console.warn(args);
    db.none('INSERT INTO posts(post_id, post_uuid, user_id, timestamp, host, source) VALUES($<post_id>, $<uuid>, $<user_id>, $<timestamp>, $<host>, $<source>)', values)
        .then((data: any) => console.warn('Success', data));
};


/*
OathCreds Table Queries
 */

//
const createOauthCreds:Function = (args: Object)=>{
  const values: Object = Object.assign({}, args);
  db.none('INSERT INTO oauth_creds(service, user_id, refresh_token, access_token) VALUES($<service>, $<user_id>, $<refresh_token>, $<access_token>)', values)
      .then((data: any) => console.warn('Success', data));

};
// Returns access token, service, and refresh token
const getUserTokens: Function = async (args: Object)=> {
    return await db.any('SELECT access_token, service, refresh_token FROM oauth_creds WHERE user_id = $<user_id>', args);
};




/*
Following Table Queries
 */

// Return all followings
const getAllFollowings: Function = async () => {
    return await db.any('SELECT * FROM following');
};

// Return user followings in which the user is being followed
const getUserFollowings: Function = async (args: Object) => {
    return await db.any('SELECT * FROM following WHERE user_id = $<user_id>', args);
};

// Create new following
const createFollowing: Function = (args: Object) => {
    const values: Object = Object.assign({}, args, {uuid: uuidv4()});
    db.none('INSERT INTO following(follower, followee) VALUES($<follower>, $<followee>', values)
        .then((data: any) => console.warn('Hiya', data));
};


//
export default {
    getUser,
    getAllUsers,
    createUser,
    authUser,
    getAllPosts,
    getNPosts,
    createPost,
    getAllReacts,
    createOauthCreds,
    getAllFollowings,
    getUserFollowings,
    getUserTokens,
    createFollowing
};
