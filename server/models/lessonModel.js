import mongoose from 'mongoose'

const lessonSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 10,
      maxlength: 255,
      required: true,
    },
    slug: { type: String, trim: true, lowercase: true },
    content: { type: {}, minlength: 200 },
    files: { type: [String] },
    video: {},
    preview: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

export default lessonSchema
