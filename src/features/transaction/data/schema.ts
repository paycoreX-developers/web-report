import { z } from 'zod'

const trxStatusSchema = z.union([
  z.literal('success'),
  z.literal('pending'),
  z.literal('failed'),
])
export type TrxStatus = z.infer<typeof trxStatusSchema>



export const trxSchema = z.object({
  id: z.string(),
  trxId: z.string(),
  sender: z.string(),
  productCode: z.string(),
  productName: z.string(),
  phoneNumber: z.string(),
  status: trxStatusSchema,
  serialNumber: z.string(),   
  supplierPrice: z.number(),
  operatorResponse: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type Trx = z.infer<typeof trxSchema>

export const trxListSchema = z.array(trxSchema)
