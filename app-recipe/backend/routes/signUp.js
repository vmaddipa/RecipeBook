const express = require('express');
const router = express.Router();
const debug = require('debug')('node-angular');
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('', (req, res, next) => {
    debug('User' + JSON.stringify(req.body));
    bcrypt.hash(req.body.password).then(() => {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });
        user
            .save()
            .then(result => {
                res.status(201).json({
                    message: 'User Signed up Successfully.'
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    });

    // debug('User ' + user);
});

module.exports = router;
