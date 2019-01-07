import mongoose from 'mongoose'

let trainingSchema = new mongoose.Schema(
    {
        training: { type: String, required: true, unique: true }
    }
)

export default mongoose.model('Training', trainingSchema)