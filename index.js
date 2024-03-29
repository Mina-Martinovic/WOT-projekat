import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js" /*dodato je .js jer koristimo express u fajlu dok za biblioteke nije potrebno*/
import usersRoute from "./routes/users.js"
import cabinsRoute from "./routes/cabins.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})
/*middlewares*/

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute) //whenever we make a req for the auth endpoint its gonna use aithRouter and go there and look for any other endpoints if they exist
app.use("/api/users", usersRoute)
app.use("/api/cabins", cabinsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.listen(8801, () => {
    connect()
    console.log("Connected to backend!")
}) 
