import express from 'express';
import User from '../models/user.mjs';
const router = express.Router();

router.get('/all', async function (req, res) {
    res.setHeader('Connection', 'close');

    res.send(await User.find().exec());
});

router.post('/login', async function (req, res) {
    res.setHeader('Connection', 'close');

    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
        const query = await User.findOne({
            username: username,
            password: password,
        }).exec();
        if (!query.errors) {
            req.session.loggedin = true;
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

    if (req.session.loggedin) {
        try {
            req.session.destroy();
        } catch (error) {
            res.status(400).send(error);
        }
    } else {
        res.status(401).send('No user logged in');
    }
});

router.post('/register', async function (req, res) {
    res.setHeader('Connection', 'close');

    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        type: 'customer',
        phone: '0338574764',
        email: 'test@email.com',
        address: 'ha',
    });

    try {
        await newUser.save();
        // res.set(200);
    } catch (error) {
        res.set(400);
    }
    res.end();
});

export default router;
