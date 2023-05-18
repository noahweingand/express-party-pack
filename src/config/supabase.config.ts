import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { Database } from './types/database.types';
import { supabaseAnonKey, supabaseUrl } from './server.config';

let client: SupabaseClient<Database>;

export function supabase() {
  if (!supabase) {
    client = createClient(supabaseUrl as string, supabaseAnonKey as string);
  }

  return client;
}
