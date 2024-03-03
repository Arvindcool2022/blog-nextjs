import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50
    },
    password: {
      type: String
    },
    img: {
      type: String
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    desc_highlight: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    img: {
      type: String
    },
    userId: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model('User', userSchema);
export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);
