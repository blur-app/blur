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

const getUser:Function = async (args: Object) => {
    const data = await db.any('SELECT * FROM users WHERE user_id = $<user_id>', args);
    return data;
};

const getAllUsers:Function = async () => {
    const data = await db.any('SELECT * FROM users');
    return data;
};

const createUser:Function = (args: Object) => {
    console.warn('in insert dood');
    const values: Object = Object.assign({}, args, {uuid: uuidv4()});
    db.none('INSERT INTO users(uuid, username, password_hash, first_name, last_name) VALUES($<uuid>, $<username>, $<password_hash>, $<first_name>, $<last_name>)', values)
        .then((data: any) => console.warn('Hiya', data));
};

export default {
    getUser,
    getAllUsers,
    createUser
};