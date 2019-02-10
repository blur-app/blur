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

const createOauthCreds:Function = (args:any) =>{
    return db.createOauthCreds(args);
};


// Root resolver
export default {
    getUsers,
    getUser,
    createUser,
    getAllPosts,
    getNPosts,
    createPost,
    getAllReacts,
    createOauthCreds
};