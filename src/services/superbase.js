import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ajobonwdplayhvadiqpq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqb2JvbndkcGxheWh2YWRpcXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4OTkxNzcsImV4cCI6MjA1MDQ3NTE3N30.-BLW-BohHCdF0k6vlRGAGXu4DVkq3QQ0UuOzXzu7MWU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
