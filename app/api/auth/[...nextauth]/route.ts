import NextAuth from 'next-auth'
import { authOptions } from '@/app/_clients/nextAuth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
