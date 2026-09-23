import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connect Succesfully");
    }
    catch(error) {
        console.log("MongoDB is not connected ", error.message);
        process.exit(1);

    }
}

export default connectDB