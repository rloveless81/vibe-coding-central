
import { createClient } from '@supabase/supabase-js';

// Default values for development to prevent errors
const defaultSupabaseUrl = 'https://kjrdtqwpjijyedovkomx.supabase.co';
const defaultSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqcmR0cXdwamlqeWVkb3Zrb214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NDI1ODMsImV4cCI6MjA1OTAxODU4M30.6VJWVc7nX8uifC0S3B2c6Lt7XucC5UXkh5HZRx7tB_o';

// Get environment variables or use defaults
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || defaultSupabaseUrl;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || defaultSupabaseAnonKey;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Since we're now using the actual credentials as defaults,
// we don't need to check if we're using default credentials
export const isUsingDefaultCredentials = false;

// Remove the warning since we're using actual credentials
