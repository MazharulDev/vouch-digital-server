const { getDb } = require("../utils/dbConnect");

module.exports.addClient = async (req, res) => {
    try {
        const db = getDb();
        const client = req.body;
        const result = await db.collection("client").insertOne(client);
        res.send(result)
    } catch (error) {

    }
};
