import { getDonationById } from '@/api/getDonationById'
import { SuccessPage } from '@/pages/Success'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/success/$donationId')({
  component: SuccessPage,

  loader: async ({ params }) => {
    return await getDonationById(params.donationId)
  },
})