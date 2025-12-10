'use client';

import { SessionProvider } from 'next-auth/react';

// The Provider component simply wraps the SessionProvider from next-auth
// The children are the rest of your app's components
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}