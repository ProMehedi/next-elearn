import mongoose from 'mongoose'
import lessonSchema from './lessonSchema.js'

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

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 10,
      maxlength: 255,
      required: true,
    },
    slug: { type: String, trim: true, lowercase: true },
    desc: { type: {}, minlength: 200, required: true },
    short_desc: { type: String },
    price: { type: Number, default: 9.99 },
    duration: { type: Number, default: 0.0 },
    video: {},
    thumb: {},
    category: { type: String },
    published: { type: Boolean, default: false },
    paid: { type: Boolean, default: true },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    lessons: [lessonSchema],
  },
  {
    timestamps: true,
  }
)

const Course = mongoose.model('Course', courseSchema)
export default Course
