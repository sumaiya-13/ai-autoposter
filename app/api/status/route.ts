import { NextResponse } from 'next/server';

// 1. Define the GET function to handle GET requests
export async function GET() {
  
  // 2. Create the JSON data you want to send back
  const data = {
    status: 'ok',
    service: 'AI Autoposter API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  };

  // 3. Use NextResponse.json to send the data as a JSON response
  return NextResponse.json(data, {
    status: 200, // HTTP Status Code 200 means OK
    headers: {
      'Cache-Control': 'no-store', // Important for APIs to get fresh data
    },
  });
}

// 4. Force Dynamic: Tells Next.js to run this code on the server 
//    for every request, preventing it from being cached statically.
export const dynamic = 'force-dynamic';