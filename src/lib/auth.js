import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialProvider from 'next-auth/providers/credentials';
import connectToDB from './connectToDB';
import { User } from './modals';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';

const login = async credentials => {
  try {
    connectToDB();
    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error('Wrong credentials!');
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error('Wrong credentials!');
    // console.log('user :', user, 'credentials :', credentials);
    return user;
  } catch (error) {
    console.log(err);
    throw new Error('Failed to login!');
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialProvider({
      async authorize(credentials) {
        try {
          return await login(credentials);
        } catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, profile, account }) {
      console.log('hit1');
      try {
        if (account?.provider === 'github') {
          console.log('hit2');
          connectToDB();
          const user = await User.findOne({ email: profile?.email });
          if (!user) {
            const users = await User.find();
            const id = users.length + 1;
            const user = new User({
              id,
              username: profile?.name ?? profile?.login,
              email: profile?.email,
              image: profile?.avatar_url
            });
            await user.save();
            console.log('new user created :', user);
          } else console.log('github user already registered');
        } else if (account?.provider === 'credentials') {
          connectToDB();
          const authenticatedUser = await User.findOne({ email: user.email });
          if (authenticatedUser) {
            // console.log(account.provider, authenticatedUser);
            return {
              id: authenticatedUser.id,
              name: authenticatedUser.username,
              email: authenticatedUser.email,
              image: authenticatedUser.img || null // Set to null if no image is available
            };
          } else {
            return null;
          }
        }
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    },
    ...authConfig.callbacks
  }
});
