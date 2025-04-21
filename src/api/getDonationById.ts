import { donationDbSchema } from '@/lib/schemas/donations-db-schema'
import supabase from '@/lib/supabase-client'

export const getDonationById = async (id: string) => {
  const { data, error } = await supabase
    .from('donations')
    .select()
    .eq('id', id)
    .maybeSingle() 

    console.log('Supabase response:', data, error)

  if (error) {
    console.error('Supabase-Fehler:', error)
    throw new Error('Fehler beim Abrufen der Spende')
  }

  if (!data) {
    console.warn('Keine Spende gefunden für ID:', id)
    throw new Error('Spende nicht gefunden')
  }

  const parsed = donationDbSchema.safeParse(data)

  if (!parsed.success) {
    console.error('Zod validation error:', parsed.error.format())
    throw new Error('Ungültige Spendenstruktur')
  }

  return parsed.data
}
