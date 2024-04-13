// import { NextResponse } from 'next/server';
// export function middleware(request) {
//   // return NextResponse.redirect(new URL('/', request.url));
// }
import NextAuth from 'next-auth';
import { authConfig } from './lib/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|static].*\\..*|_next).*)']
};
