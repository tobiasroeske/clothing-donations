import { siteConfig } from '@/config/site-config'
import z from 'zod'

const baseSchema = z.object({
  name: z.string().min(1, 'Bitte gib deinen Namen an.'),
  type: z.enum(['pickup', 'dropoff']),
  clothTypes: z.array(z.string()),
  crisisArea: z.string().nonempty('Bitte wähle ein Krisengebiet aus.'),
})

const pickupSchema = baseSchema.extend({
  type: z.literal('pickup'),
  address: z.object({
    street: z.string().min(1, 'Bitte gib eine Straße an.'),
    postalCode: z.string().regex(/^\d{5}$/, 'Ungültige PLZ'),
    location: z.string().min(1, 'Bitte gib einen Ort an.'),
  }),
})

const dropoffSchema = baseSchema.extend({
  type: z.literal('dropoff'),
})

const rawUnion = z.discriminatedUnion('type', [pickupSchema, dropoffSchema])

export const donationFormSchema = rawUnion
  .refine(
    (data) => {
      if (data.type === 'pickup') {
        return data.address.postalCode.slice(0, 2) === siteConfig.zipcodeData.firstDigits
      }
      return true
    },
    {
      message: `Die Abholadresse liegt nicht in der Nähe von ${siteConfig.zipcodeData.zipCodeLocation} (${siteConfig.zipcodeData.zipCodeArea})`,
      path: ['address', 'postalCode'],
    },
  )
  .refine((data) => data.clothTypes.length > 0, {
    message: 'Bitte wähle mindestens einen Kleidertyp aus.',
    path: ['clothTypes'],
  })
  

export type DonationFormValues = z.infer<typeof donationFormSchema>

// ✅ Sauberes Default-Objekt basierend auf dem Schema
export const DefaultDonation = {
  name: '',
  type: 'dropoff',
  clothTypes: [],
  crisisArea: '',
  address: {
    street: '',
    postalCode: '',
    location: '',
  },
} as DonationFormValues
