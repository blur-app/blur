import promise from 'bluebird';
import pgpromise, {IDatabase, IMain} from 'pg-promise';

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

export default {
    getAll
};