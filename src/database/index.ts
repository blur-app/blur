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

// This is a sample, please please do it differently
const getAll: Function = () => {
    db.any('select * from blur')
        .then((data: any) => {
            return data;
        })
        .catch((err: Error) => {
            return console.warn(err);
        });
};

const getAllUsers:Function = async () => {
    const data = await db.any('SELECT * FROM users');
    return data;
};

const createUser:Function = (params: Object) => {
    console.warn('in insert dood');
    const values: Object = Object.assign({}, params, {uuid: uuidv4()});
    db.none('INSERT INTO users(uuid, username, password_hash, first_name, last_name) VALUES($<uuid>, $<username>, $<password_hash>, $<first_name>, $<last_name>)', values)
        .then((data: any) => console.warn('Hiya', data));
};

export default {
    getAll,
    getAllUsers,
    createUser
};