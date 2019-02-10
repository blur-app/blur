import db from '../database';

const getUsers: Function = () => {
    return db.getAllUsers();
};

const getUser: Function = (args : any) => {
    return db.getUser(args);
};

const createUser:Function = (args:any) => {
    return db.createUser(args);
};

const createOauthCreds:Function = (args:any) =>{
    return db.createOauthCreds(args);
};


// Root resolver
export default {
    getUsers,
    getUser,
    createUser,
    createOauthCreds
};