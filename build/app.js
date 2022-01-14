"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const admin = __importStar(require("firebase-admin"));
const auth_1 = require("firebase-admin/auth");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const serviceAccount = require('./butil-ordering-firebase-adminsdk-7rioz-4a70bff51b.json');
const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firebaseAdminAuth = (0, auth_1.getAuth)(firebaseAdmin);
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.get(['/', '/login', '/404', '/dashboards/*'], (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/api/:token/user/:uid', (req, res) => {
    const token = req.params.token;
    const uid = req.params.uid;
    if (token !== process.env.BUTIL_API_KEY) {
        res.status(401).json({ error: 'Invalid token.' });
    }
    else {
        firebaseAdminAuth.getUser(uid).then(data => {
            const userData = data.toJSON();
            res.status(200).send(userData);
        }).catch(err => {
            res.status(400).json({ error: err.message });
        });
    }
});
app.get('/api/:token/user/delete/:uid', (req, res) => {
    const token = req.params.token;
    const uid = req.params.uid;
    if (token !== process.env.BUTIL_API_KEY) {
        res.status(401).json({ error: 'Invalid token.' });
    }
    else {
        firebaseAdminAuth.deleteUser(uid).then(data => {
            res.status(200).json({ message: 'User was successfully deleted.' });
        }).catch(err => {
            res.status(400).json({ error: err.message });
        });
    }
});
app.post('/api/:token/user/create', (req, res) => {
    const token = req.params.token;
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const contact = req.body.contact;
    if (token !== process.env.BUTIL_API_KEY) {
        res.status(401).json({ error: 'Invalid token.' });
    }
    else if (!email || !name || !password || !contact) {
        res.status(400).json({ error: 'email, name, contact number and password are required.' });
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
            res.status(400).json({ error: error.message });
        });
    }
});
app.post('/api/:token/user/update/:uid', (req, res) => {
    const token = req.params.token;
    const uid = req.params.uid;
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const contact = req.body.contact;
    if (token !== process.env.BUTIL_API_KEY) {
        res.status(401).json({ error: 'Invalid token.' });
    }
    else if (!email && !name && !password && !contact) {
        res.status(400).json({ error: 'email, name, contact number or password is required.' });
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
            res.status(400).json({ error: error.message });
        });
    }
});
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
//# sourceMappingURL=app.js.map