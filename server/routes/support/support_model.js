import mongoose from 'mongoose'

let supportSchema = new mongoose.Schema(
    {
        maintenance: { type: String, required: true, unique: true }
    }
)

export default mongoose.model('Support', supportSchema)