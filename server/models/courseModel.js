import mongoose from 'mongoose'

const lessonSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 5,
      maxlength: 255,
      required: true,
    },
    slug: { type: String, trim: true, lowercase: true },
    video: { type: String },
    duration: { type: String, default: '00:00:00' },
    preview: { type: Boolean, default: false },
    files: {},
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
      minlength: 5,
      maxlength: 255,
      required: true,
    },
    slug: { type: String, trim: true, lowercase: true },
    desc: { type: {}, minlength: 200, required: true },
    short_desc: { type: String },
    price: { type: Number },
    paid: { type: Boolean, default: true },
    category: { type: String },
    duration: { type: String, default: '00:00:00' },
    thumb: { type: String },
    video: { type: String },
    published: { type: Boolean, default: false },
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
