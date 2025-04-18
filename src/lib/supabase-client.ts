import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'http://localhost:8000/' // lokale URL
const supabaseAnonKey = import.meta.env.VITE_ANON_KEY || '' // Standard-Schlüssel aus docker-compose Logs oder .env Datei

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
