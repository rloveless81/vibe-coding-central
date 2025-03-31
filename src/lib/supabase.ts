
import { createClient } from '@supabase/supabase-js';

// Default values for development to prevent errors
const defaultSupabaseUrl = 'https://your-project.supabase.co';
const defaultSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // This is a placeholder

// Get environment variables or use defaults
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || defaultSupabaseUrl;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || defaultSupabaseAnonKey;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper to check if we're using default values (for development)
export const isUsingDefaultCredentials = 
  supabaseUrl === defaultSupabaseUrl || 
  supabaseAnonKey === defaultSupabaseAnonKey;

if (import.meta.env.DEV && isUsingDefaultCredentials) {
  console.warn(
    'Using default Supabase credentials. For full functionality, please set the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.'
  );
}
