const mongoose = require("mongoose");

const db = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DataBase Connected ");
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
module.exports = {
    db,
};
