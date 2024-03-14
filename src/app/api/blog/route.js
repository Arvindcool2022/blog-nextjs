import connectToDB from '@/lib/connectToDB';
import { Post } from '@/lib/modals';
import { NextResponse } from 'next/server';

export const GET = async request => {
  try {
    connectToDB();
    console.log('getPosts api');
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    // return NextResponse(err);
  }
};
