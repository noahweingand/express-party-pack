import dotenv from 'dotenv';

if (process.env.ENV === 'local') {
  dotenv.config();
}

const name = process.env.NAME;
const port = process.env.PORT;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) throw new Error('Supabase environment variables not set');

export { name, port, supabaseUrl, supabaseAnonKey };
