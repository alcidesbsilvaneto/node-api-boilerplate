import mongoose from 'mongoose';
import { Router } from 'express';
import User from '../model/user';


export default ({ config, db }) => {
    let api = Router();

    // '/v1/user'
    api.post('/', (req, res) => {
        let newUser = new User();
        newUser.name = req.body.name;

        newUser.save(error => {
            if (error) {
                res.send(error)
            } else {
                res.json({ message: 'User created successfully!' });
            }
        });
    });

    return api;

}