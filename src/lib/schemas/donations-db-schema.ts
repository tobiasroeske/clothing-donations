import { z } from 'zod'

export const donationDbSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  type: z.enum(['pickup', 'dropoff']),
  cloth_types: z.array(z.string()),
  crisis_area: z.string(),

  street: z.string().nullable(),
  postal_code: z.string().nullable(),
  location: z.string().nullable(),

  created_at: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid datetime format',
  }),
})

export const donationArraySchema = z.array(donationDbSchema)

export type DonationFromDB = z.infer<typeof donationDbSchema>