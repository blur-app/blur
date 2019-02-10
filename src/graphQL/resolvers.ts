import db from '../database';

const userData = [
    {
        user_id: 1,
        username: 'jsbond',
        first_name: 'john',
        last_name: 'stein'
    },
    {
        user_id: 2,
        username: 'yeetmaster',
        first_name: 'ben',
        last_name: 'stills'
    },
    {
        user_id: 3,
        username: 'joons',
        first_name: 'huh',
        last_name: 'asdfsa'
    }
];

const getUsers: Function = () => {
    return db.getAllUsers();
};

const getUser: Function = (args : any) => {
    return db.getUser(args);
};

const createUser:Function = (args:any) => {
    return db.createUser(args);
}


// Root resolver
export default {
    getUsers,
    getUser,
    createUser
};