import db from '../database';


/*
User Table Queries
 */

// returns all Users
const getUsers: Function = () => {
    return db.getAllUsers();
};
// Return user based on given id
const getUser: Function = (args : any) => {
    return db.getUser(args);
};
// Create new user based on args
const createUser: Function = (args: User) => {
    return db.createUser(args);
};

const authUser: Function = (args: Object) => {
    return db.authUser(args);
};


/*
React Table Queries
 */

// Return all Reacts
const getAllReacts: Function = () => {
    return db.getAllReacts();
};


/*
Post and PostReact Table Queries
 */

// Return all Posts
const getAllPosts: Function = () => {
    return db.getAllPosts();
};
//Return n posts
const getNPosts: Function = (n: number) => {
    return db.getNPosts(n);
};
// Create new post based on args
const createPost: Function = (args: Post) => {
    return db.createPost(args);
};



/*
OathCreds Table Queries
 */

//
const createOauthCreds:Function = (args:any) =>{
    return db.createOauthCreds(args);
};

const getUserTokens: Function= async() =>{
    return db.getUserTokens();
}

/*
Following Table Queries
 */

// Return all followings
const getAllFollowings: Function = async () => {
    return db.getAllFollowings();
};
// Return user followings in which the user is being followed
const getUserFollowings: Function = async (args: Object) => {
    return db.getUserFollowings(args);
};
// Create new following
const createFollowing: Function = (args: Following) => {
  return db.createFollowing(args);
};



// Root resolver
export default {
    getUsers,
    getUser,
    createUser,
    authUser,
    getAllPosts,
    getNPosts,
    createPost,
    getAllReacts,
    createOauthCreds,
    getUserTokens,
    getAllFollowings,
    getUserFollowings,
    createFollowing
};