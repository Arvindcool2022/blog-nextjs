'use server';
import { Post, User } from './modals';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import connectToDB from './connectToDB';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';

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
    if (!userId || !title || !desc_highlight || !body)
      throw new Error({ status: 400, message: 'Missing required fields' });

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
  } catch (err) {
    console.error(err);
  }
  // revalidateTag('blog'); // Update cached posts //! not working
  revalidatePath('/blog'); // Update cached posts

  redirect('/blog'); // Navigate to the new post page
};
export const deletePost = async formData => {
  try {
    const { id } = Object.fromEntries(formData);
    if (!id) throw new Error({ status: 400, message: 'Missing id' });
    connectToDB();
    console.log('deletePost');
    await Post.findOneAndDelete({ id });
  } catch (err) {
    console.error(err);
  }
  revalidatePath('/blog');
  redirect('/blog');
};

export const handleSignIn = async () => {
  await signIn();
};
export const handleSignOut = async () => {
  await signOut();
};

export const register = async formData => {
  try {
    const { username, email, img, password, passwordRepeat } =
      Object.fromEntries(formData);
    if (!username || !email || !password) return 'Please fill all field';
    if (password !== passwordRepeat) return 'Password do not match';
    connectToDB();
    const user = await User.findOne({ email });
    if (user) return 'Email already registered';
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const users = await User.find();
    const id = users.length + 1;
    const userData = { id, username, email, password: hashPassword };
    if (img) userData.img = img;

    const newUser = new User(userData);
    await newUser.save();
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
  revalidatePath('/login');
  redirect('/login');
};
export const login = async formData => {
  try {
    const { email, password } = Object.fromEntries(formData);
    console.log(email, password);
    if (!email || !password) return 'Please fill all field';
    connectToDB();
    const user = await User.findOne({ email });
    if (!user) return 'Email not registered';
    await signIn('credentials', { email, password });
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
  revalidatePath('/login');
};
