import mongoose from 'mongoose'

let projectSchema = new mongoose.Schema(
    {
        webApp: { type: String, required: true, unique: true }
    }
)

export default mongoose.model('Project', projectSchema)