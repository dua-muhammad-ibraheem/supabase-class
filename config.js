
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://pnqgjpyiyreiigyftibf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBucWdqcHlpeXJlaWlneWZ0aWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNzQwMzEsImV4cCI6MjA4MDY1MDAzMX0.bSMB0189cKxzD4lz0LfrTBkGreWbfC7Z-5qUxGQbenM'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;