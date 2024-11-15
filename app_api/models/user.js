// Mengimspor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Definisikan skema untuk fakultas
const fakultasSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: trusted
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre("save", async function (next){
    // jika password tidak diubah, lanjutkan tanpa enkripsi
    if(!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); // enkripsi password
    next();
})

module.exports = mongoose.model("User", UserSchema);