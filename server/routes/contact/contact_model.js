import mongoose from 'mongoose'

let contactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true }
    }
)

export default mongoose.model('Contact', contactSchema)