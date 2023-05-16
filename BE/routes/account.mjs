import express from 'express';
import User from '../models/user.mjs';
import * as Util from './util.mjs';

const router = express.Router();

router.get('/find', async function (req, res) {
    res.setHeader('Connection', 'close');

    if (!(await Util.isAdminLoggedIn(req))) {
        res.status(403).end();
        return;
    }

    if (Object.keys(req.params).length === 0) {
        res.send(await User.find().exec());
    } else {
        let filter = {};
        for (let key in req.params) {
            if (key === 'id') {
                filter['_id'] = req.params.id;
            } else {
                filter[key] = req.params[key];
            }
        }
        res.send(await User.find(filter).exec());
    }
});

router.post('/login', async function (req, res) {
    res.setHeader('Connection', 'close');

    if (Util.isLoggedIn(req)) {
        res.status(400).send('User is already logged in');
        return;
    }

    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
        const query = await User.findOne({
            username: username,
            password: password,
        }).exec();
        if (query) {
            req.session.userId = query._id;

            res.status(200).send();
        } else {
            res.status(400).send('Invalid username or password');
        }
    } else {
        res.status(400).send('Missing username or password');
    }
});

router.post('/logout', async function (req, res) {
    res.setHeader('Connection', 'close');

    if (Util.isLoggedIn(req)) {
        try {
            req.session.destroy();
            res.status(200).end();
        } catch (error) {
            res.status(400).send(error);
        }
    } else {
        res.status(401).send('No user logged in');
    }
});

router.post('/register', async function (req, res) {
    res.setHeader('Connection', 'close');

    if (Util.isLoggedIn(req)) {
        res.status(400).send('User is logging in');
        return;
    }

    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
    });

    try {
        await newUser.save();
        res.status(200).end();
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

router.post('/add', async function (req, res) {
    res.setHeader('Connection', 'close');

    if (!(await Util.isAdminLoggedIn(req))) {
        res.status(403).end();
        return;
    }

    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
    });

    try {
        await newUser.save();
        res.status(200).end();
    } catch (error) {
        res.status(400).send(error);
        return;
    }
});

router.post('/edit', async function (req, res) {
    res.setHeader('Connection', 'close');

    if (!Util.isLoggedIn(req)) {
        res.status(401).end();
        return;
    }

    if (await Util.isAdmin(req)) {
        if (req.params.id) {
            const query = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            ).exec();
            if (query) {
                res.status(200).send(query);
            } else {
                res.status(404).send('User not found');
            }
        } else {
            res.status(400).send('Missing id');
        }
    } else {
        if (req.params.id) {
            res.status(400).send('User is not admin, id is not handled');
        } else {
            const query = await User.findByIdAndUpdate(
                req.session.userId,
                { $set: req.body },
                { new: true }
            ).exec();
            if (query) {
                res.status(200).send(query);
            } else {
                res.status(404).send('User not found');
            }
        }
    }
});

router.post('/remove', async function (req, res) {
    res.setHeader('Connection', 'close');

    if (!Util.isLoggedIn(req)) {
        res.status(401).end();
        return;
    }

    let id;
    if (await Util.isAdmin(req)) {
        if (req.params.id) {
            id = req.params.id;
        } else {
            res.status(400).send('Missing id');
            return;
        }
    } else {
        id = req.session.userId;
    }

    const query = await User.findByIdAndDelete(id).exec();
    if (query) {
        req.status(200).end();
    } else {
        req.status(400).send("User doesn't exist");
    }
});

router.get('/info', async function (req, res) {
    res.setHeader('Connection', 'close');

    if (!Util.isLoggedIn(req)) {
        res.status(401).end();
        return;
    }

    let id;
    if (await Util.isAdmin(req)) {
        if (req.params.id) {
            id = req.params.id;
        } else {
            res.status(400).send('Missing id');
            return;
        }
    } else {
        id = req.session.userId;
    }

    const queryInfo = await User.findById(id).exec();
    if (queryInfo) {
        res.status(200).send(queryInfo);
    } else {
        res.status(404).send('User not found');
    }
});

export default router;
