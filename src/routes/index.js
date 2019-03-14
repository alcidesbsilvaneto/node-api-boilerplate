import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import user from '../controller/user';

let router = express();

initializeDb(db => {

    //Internal middleware
    router.use(middleware({ config, db }));

    // API routes v1 (/v1)
    router.use('/user', user({ config, db }));

})

export default router;