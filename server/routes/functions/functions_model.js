import mongoose from 'mongoose'

let functionsSchema = new mongoose.Schema(
    {
        plugins: { type: String, required: true, unique: true }
    }
)

export default mongoose.model('Functions', functionsSchema)