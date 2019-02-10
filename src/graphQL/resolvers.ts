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

// Root resolver
export default {
    getUsers,
    getUser,
    createUser
};