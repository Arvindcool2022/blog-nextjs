'use server';

import { Post } from './modals';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import connectToDB from './connectToDB';

let num = 1; // closure works
export const sample = async formData => {
  //   const name = formData.get('name'); // this works too

  const { name, email, phone, message } = Object.fromEntries(formData);
  console.log(++num, name, email, phone, message, Object.fromEntries(formData));
};

// create a post
export const createPost = async (userId, formData) => {
  /**
   * title,desc_highlight,body - required from user
   * img - optional from user
   * userId - get automatically
   * date - create automatically
   * id - post length from database + 1
   */

  try {
    const {
      title,
      desc_highlight,
      body,
      img = null
    } = Object.fromEntries(formData);
    if (!userId || !title || !desc_highlight || !body) {
      throw new Error(
        { status: 400, message: 'Missing required fields' } // Handle missing data
      );
    }

    connectToDB();
    const posts = await Post.find();
    const id = posts.length + 1;
    const newPost = new Post({
      title,
      desc_highlight,
      body,
      date: new Date(),
      id,
      userId,
      img
    });
    console.log(newPost);
    await newPost.save();

    revalidateTag('blog'); // Update cached posts
    redirect(`/blog/${id}`); // Navigate to the new post page
    return {
      status: 200,
      message: 'Post created successfully!',
      post: newPost
    }; // Send success response
  } catch (err) {
    console.error(err);
    return { status: 500, message: 'Error creating post' }; // Handle errors
  }
};
