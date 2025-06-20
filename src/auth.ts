import NextAuth from  'next-auth'
import GutHub from 'next-auth/providers/github'
import {PrismaAdapter} from '@auth/prisma-adapter'
import { prisma } from './lib/prisma';
export const {handlers, signIn, signOut, auth }=NextAuth({
    providers:[GutHub],
    adapter:PrismaAdapter(prisma)
});