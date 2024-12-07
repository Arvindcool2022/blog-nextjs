import connectToDB from '@/lib/connectToDB';
import { User } from '@/lib/modals';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    connectToDB();
    console.log('getUser', { id });
    const user = await User.findOne({ id });
    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    // throw new Error('Failed to fetch user!');
  }
};
