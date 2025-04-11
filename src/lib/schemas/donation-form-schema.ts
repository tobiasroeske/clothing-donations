import z from 'zod'

const baseSchema = z.object({
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
        return data.address.postalCode.slice(0, 2) === '12'
      }
      return true
    },
    {
      message: 'Die Abholadresse liegt nicht in der Nähe der Geschäftsstelle.',
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
  type: 'dropoff',
  clothTypes: [],
  crisisArea: '',
  address: {
    street: '',
    postalCode: '',
    location: '',
  },
} as DonationFormValues

// import z from 'zod'

// export const baseSchema = z.object({
//   type: z.enum(['pickup', 'dropoff']),
//   clothTypes: z.array(z.string()),
//   crisisArea: z.string().nonempty('Bitte wähle ein Krisengebiet aus.'),
//   address: z.object({
//     street: z.string(),
//     postalCode: z.string(),
//     location: z.string(),
//   }).optional(), // 👈 optionales address-Objekt!
// })

// export const donationFormSchema = baseSchema
//   .superRefine((data, ctx) => {
//     if (data.clothTypes.length === 0) {
//       ctx.addIssue({
//         path: ['clothTypes'],
//         message: 'Bitte wähle mindestens einen Kleidertyp aus.',
//         code: z.ZodIssueCode.custom,
//       })
//     }

//     if (data.type === 'pickup') {
//       if (!data.address) {
//         ctx.addIssue({
//           path: ['address'],
//           message: 'Bitte gib eine Abholadresse an.',
//           code: z.ZodIssueCode.custom,
//         })
//         return
//       }

//       if (data.address.street.length === 0) {
//         ctx.addIssue({
//           path: ['address', 'street'],
//           message: 'Bitte gib eine Straße an.',
//           code: z.ZodIssueCode.custom,
//         })
//       }

//       if (!/^\d{5}$/.test(data.address.postalCode)) {
//         ctx.addIssue({
//           path: ['address', 'postalCode'],
//           message: 'Ungültige PLZ',
//           code: z.ZodIssueCode.custom,
//         })
//       } else if (data.address.postalCode.slice(0, 2) !== '12') {
//         ctx.addIssue({
//           path: ['address', 'postalCode'],
//           message: 'Die Abholadresse liegt nicht in der Nähe der Geschäftsstelle.',
//           code: z.ZodIssueCode.custom,
//         })
//       }

//       if (data.address.location.length === 0) {
//         ctx.addIssue({
//           path: ['address', 'location'],
//           message: 'Bitte gib einen Ort an.',
//           code: z.ZodIssueCode.custom,
//         })
//       }
//     }
//   })

// export type DonationFormValues = z.infer<typeof donationFormSchema>

// export const DefaultDonation: DonationFormValues = {
//   type: 'dropoff',
//   clothTypes: [],
//   crisisArea: '',
//   address: { street: '', postalCode: '', location: '' }, // ✅ Jetzt erlaubt, da optional!
// }

