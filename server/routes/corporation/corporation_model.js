import mongoose from 'mongoose'

let corporationSchema = new mongoose.Schema(
    {
        business_name: { type: String, required: true, unique: true }
    }
)

export default mongoose.model('Corporation', corporationSchema)