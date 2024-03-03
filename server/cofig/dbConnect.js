
import mongoose from 'mongoose'

const dbConnect = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);

        mongoose.connection.once("open", () => {
            console.log("mongoose connections is successful");
        });
    } catch (error) {
        console.log("database error");
    }
}

export default dbConnect

