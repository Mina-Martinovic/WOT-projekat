import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true
        },
        roomNumber: [{ number: Number, unavailableDates: { type: [Date] } }] //its gonna be an array of rooms bc we can have more rooms with the same desc or price etc and they will be different from each other by their room number in this array AND unavailDates is here to make a certain date unav when its has already been reserved so that we dont have two people reserve the same date


    }, { timestamps: true }
);

export default mongoose.model("Room", RoomSchema)