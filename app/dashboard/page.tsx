'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Dashboard() {
  // useSession fetches the current session data
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p className="p-8">Loading session...</p>;
  }

  if (session) {
    // If the user is logged in (Authenticated)
    return (
      <div className="p-8 max-w-xl mx-auto border rounded-lg shadow-lg mt-10">
        <h1 className="text-2xl font-bold mb-4">AI Autoposter Dashboard 🚀</h1>

        <p className="mb-2">
          Welcome back, <span className="font-semibold text-blue-600">{session.user?.name || 'Developer'}</span>!
        </p>
        <p className="mb-6 text-sm text-gray-500">
          You are signed in as: {session.user?.email}
        </p>

        {session.user?.image && (
          <img 
            src={session.user.image} 
            alt="Profile" 
            className="w-16 h-16 rounded-full mb-4 border-2 border-gray-300" 
          />
        )}

        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-150"
        >
          Sign out
        </button>
      </div>
    );
  }

  // If the user is NOT logged in (Unauthenticated)
  return (
    <div className="p-8 max-w-xl mx-auto border rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">AI Autoposter Login</h1>
      <p className="mb-6">You are not signed in. Please log in to view your dashboard.</p>
      <button
        onClick={() => signIn('github')}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}