import mongoose from 'mongoose'

let contentSchema = new mongoose.Schema(
    {
        corporateId: { type: String, required: true, unique: true }
    }
)

export default mongoose.model('Content', contentSchema)