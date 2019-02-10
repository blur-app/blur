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
    return userData;
};

const getUser: Function = (args : any) => {
    return userData.find((item) => item.user_id === args.id);
};

const createUser:Function = (args:any) => {
    return db.insertDood(args);
}


// Root resolver
export default {
    getUsers,
    getUser,
    createUser
};