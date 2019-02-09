import promise from 'bluebird';
import pgpromise from 'pg-promise';

const options: any = {
    promiseLib: promise
};

const pgp = pgpromise(options);
const connectionString = 'postgres://localhost:5432/blur';
const db = pgp(connectionString);

// This is a sample, please please do it differently
const getAll: Function = () : any => {
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