import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    gpsX: {
        type: Number, 
    },
    gpsY: {
        type: Number
    },
    alarm:{
        type: Number
    },
    fuel: {
        type: Number
    },
    ignition: {
        type: Number
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    speed: {
        type: Number
    },
})

export default mongoose.model("data-items", dataSchema)