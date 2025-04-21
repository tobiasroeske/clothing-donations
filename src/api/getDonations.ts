import {
  donationArraySchema,
  type DonationFromDB,
} from '@/lib/schemas/donations-db-schema'
import supabase from '@/lib/supabase-client'

export const getDonations = async (): Promise<DonationFromDB[]> => {
  const { data, error } = await supabase.from('donations').select()

  if (error) {
    throw new Error(error.message)
  }

  const result = donationArraySchema.safeParse(data)

  if (!result.success) {
    console.error('Zod validation error:', result.error)
    throw new Error('Ungültige Datenstruktur von Supabase')
  }

  return result.data
}
