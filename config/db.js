const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Kết nối tới MongoDB thành công");
    } catch (err) {
        console.error("Lỗi kết nối tới MongoDB:", err.message);
    }
}

module.exports = connectDB;
