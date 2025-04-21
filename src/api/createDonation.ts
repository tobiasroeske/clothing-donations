// lib/api/create-donation.ts

import { donationFormSchema } from '@/lib/schemas/donation-form-schema'
import supabase from '@/lib/supabase-client'

export const createDonation = async (
  input: unknown,
): Promise<{ id: string }> => {
  // 1. Validierung des Inputs gegen das Formularschema
  const parsed = donationFormSchema.safeParse(input)

  if (!parsed.success) {
    console.error('Zod validation failed:', parsed.error)
    throw new Error('Ungültige Formulardaten')
  }

  const data = parsed.data

  // 2. Transformation in die flache Struktur für die DB
  const insertData = {
    name: data.name,
    type: data.type,
    cloth_types: data.clothTypes,
    crisis_area: data.crisisArea,
    street: data.type === 'pickup' ? data.address.street : null,
    postal_code: data.type === 'pickup' ? data.address.postalCode : null,
    location: data.type === 'pickup' ? data.address.location : null,
  }

  // 3. Insert in Supabase
  const { data: inserted, error } = await supabase
    .from('donations')
    .insert(insertData)
    .select('id') // nur ID zurückgeben
    .single()

  if (error) {
    console.error('Supabase insert error:', error)
    throw new Error('Fehler beim Speichern der Spende')
  }

  return { id: inserted.id }
}
