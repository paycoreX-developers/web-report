import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('open'),
  z.literal('gangguan'),
  z.literal('closed'),
])
export type UserStatus = z.infer<typeof userStatusSchema>

const userRoleSchema = z.union([
  z.literal('topup'),
  z.literal('ppob'),
  z.literal('qty'),
])

const userSchema = z.object({
  id: z.string(),
  productName: z.string(),
  productCode: z.string(),
  providerName: z.string(),
  price: z.number(),
  role: userRoleSchema,
  status: userStatusSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof userSchema>

export const userListSchema = z.array(userSchema)
