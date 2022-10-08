const { getDb } = require("../utils/dbConnect");
const verifyJWT = require("../utils/verifyJWT")
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports.user = async (req, res) => {
    try {
        const db = getDb()
        const email = req.params.email;
        const user = req.body;
        const filter = { email: email };
        const options = { upsert: true };
        const updateDoc = {
            $set: user,
        };
        const result = await db.collection("users").updateOne(filter, updateDoc, options);
        const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN, { expiresIn: '1d' })
        res.send({ result, accessToken: token });
    } catch (error) {

    }
}

module.exports.addClient = async (req, res) => {
    try {
        const db = getDb();
        const client = req.body;
        const result = await db.collection("client").insertOne(client);
        res.send(result)
    } catch (error) {

    }
};
