import connectToDB from '@/lib/connectToDB';
import { Post } from '@/lib/modals';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    connectToDB();
    console.log('getPost api', { id });
    const post = await Post.findOne({ id }); // no need to coonvert to number because it is auto converted due to our schema delaration
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    // return NextResponse(err);
  }
};
