import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next(); // initiate empty response 

  const supabase = createMiddlewareSupabaseClient({ req, res }); // create the middle ware supabase client using the res and req 

  await supabase.auth.getSession(); // this is where we get the cookie sos we can use in the code 

  return res; //returning the response which will send us wherever we want inthe page 
}