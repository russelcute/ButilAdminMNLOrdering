import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const serviceAccount = require('./butil-ordering-firebase-adminsdk-7rioz-4a70bff51b.json');

const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const firebaseAdminAuth = getAuth(firebaseAdmin);

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get(['/', '/login', '/404', '/dashboards/*'], (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/:token/user/:uid', (req, res) => {
    const token = req.params.token;
    const uid = req.params.uid;

    if (token !== process.env.BUTIL_API_KEY) {
        res.status(401).json({ error: 'Invalid token.' });
    } else {
        firebaseAdminAuth.getUser(uid).then(data => {
            const userData = data.toJSON();
            res.status(200).send(userData);
        }).catch(err => {
            res.status(400).json({ error: (err as Error).message });
        })
    }
})

app.get('/api/:token/user/delete/:uid', (req, res) => {
    const token = req.params.token;
    const uid = req.params.uid;

    if (token !== process.env.BUTIL_API_KEY) {
        res.status(401).json({ error: 'Invalid token.' });
    } else {
        firebaseAdminAuth.deleteUser(uid).then(data => {
            res.status(200).json({ message: 'User was successfully deleted.' });
        }).catch(err => {
            res.status(400).json({ error: (err as Error).message });
        })
    }
})

app.post('/api/:token/user/create', (req, res) => {
    const token = req.params.token;
    const email: string = req.body.email;
    const name: string = req.body.name;
    const password: string = req.body.password;
    const contact: string = req.body.contact;

    if (token !== process.env.BUTIL_API_KEY) {
        res.status(401).json({ error: 'Invalid token.' });
    }

    else if (!email || !name || !password || !contact) {
        res.status(400).json({ error: 'email, name, contact number and password are required.'});
    }

    else {

        const firstIndex = contact.indexOf('9');
        const validNumber = '+63' + contact.slice(firstIndex);

        firebaseAdminAuth.createUser({
            email: email,
            password: password,
            displayName: name,
            phoneNumber: validNumber,
            disabled: false
        }).then(data => {
            const userData = data.toJSON();
            res.status(200).send(userData);
        }).catch(error => {
            res.status(400).json({ error: (error as Error).message });
        })
    }
})

app.post('/api/:token/user/update/:uid', (req, res) => {
    const token = req.params.token;
    const uid = req.params.uid;
    const email: string | undefined = req.body.email;
    const name: string | undefined = req.body.name;
    const password: string | undefined = req.body.password;
    const contact: string = req.body.contact;

    if (token !== process.env.BUTIL_API_KEY) {
        res.status(401).json({ error: 'Invalid token.' });
    }

    else if (!email && !name && !password && !contact) {
        res.status(400).json({ error: 'email, name, contact number or password is required.'});
    }

    else {

        const firstIndex = contact.indexOf('9');
        const validNumber = '+63' + contact.slice(firstIndex);

        firebaseAdminAuth.updateUser(uid, {
            email: email,
            password: password,
            displayName: name,
            phoneNumber: validNumber
        }).then(data => {
            const userData = data.toJSON();
            res.status(200).send(userData);
        }).catch(error => {
            res.status(400).json({ error: (error as Error).message });
        })
    }
})

app.listen(port, () => {
    console.log('Server listening on port ' + port);
})