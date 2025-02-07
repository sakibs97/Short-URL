import mongoose, { model, Schema } from "mongoose"

const userSchema = new Schema({
    displayname: String,
    email: {
        typeof: String,
        unique: true
    },
    password: String,
    emailVerified: {
        typeof: Boolean,
        default: false
    },
}, { timestamps: true });


export const User = model("User", userSchema);