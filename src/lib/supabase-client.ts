import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL // lokale URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '' // Standard-Schlüssel aus docker-compose Logs oder .env Datei

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
