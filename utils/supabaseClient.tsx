import {
  createBrowserSupabaseClient,
  createServerComponentSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { headers, cookies } from "next/headers";

// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

export const supabase = createBrowserSupabaseClient();
// export const supabase = createServerComponentSupabaseClient({
//   headers,
//   cookies,
// });
