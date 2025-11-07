// import { faker } from '@faker-js/faker'

// faker.seed(67890)

// export const transactions = Array.from({ length: 500 }, () => {
//   const storeName = faker.company.name()
//   const provider = faker.helpers.arrayElement([
//     'TELKOMSEL',
//     'XL',
//     'INDOSAT',
//     'AXIS',
//     'TRI',
//     'SMARTFREN',
//     'PLN',
//     'GOPAY',
//     'OVO',
//     'DANA',
//   ])

//   const nominal = faker.helpers.arrayElement(['5K', '10K', '20K', '25K', '50K', '100K'])
//   const productCode = `${provider}${nominal}`
//   const productName = `${provider} ${nominal} Pulsa`
//   const trxId = `TRX${faker.string.alphanumeric({ length: 4 }).toUpperCase()}`
//   const phoneNumber = `08${faker.string.numeric(9)}`
//   const status = faker.helpers.arrayElement(['success', 'pending', 'failed'])
//   const createdAt = faker.date.between({ from: '2024-01-01', to: '2025-11-01' })
//   const updatedAt = faker.date.recent({ days: 30 })
//   const module = faker.helpers.arrayElement(['Pulsa', 'Paket Data', 'E-Money', 'Tagihan'])
//   const sellingPrice = faker.number.int({ min: 5000, max: 100000 })
//   const supplierPrice = sellingPrice - faker.number.int({ min: 200, max: 1500 })

//   return {
//     id: faker.string.uuid(),
//     trxId,
//     storeName,
//     productCode,
//     productName,
//     phoneNumber,
//     status,
//     sellingPrice,
//     supplierPrice,
//     module,
//     createdAt,
//     updatedAt
//   }
// })
import { faker } from '@faker-js/faker'

faker.seed(67890)

export const transactions = Array.from({ length: 500 }, () => {
  const sender = 'MobileIn'
  const provider = faker.helpers.arrayElement([
    'TELKOMSEL',
    'XL',
    'INDOSAT',
    'AXIS',
    'TRI',
    'SMARTFREN',
    'PLN',
    'GOPAY',
    'OVO',
    'DANA',
  ])

  const nominal = faker.helpers.arrayElement(['5K', '10K', '20K', '25K', '50K', '100K'])
  const productCode = `${provider}${nominal}`
  const productName = `${provider} ${nominal} Pulsa`
  const trxId = `TRX${faker.string.alphanumeric({ length: 4 }).toUpperCase()}`
  const phoneNumber = `08${faker.string.numeric(9)}`
  const status = faker.helpers.arrayElement(['success', 'pending', 'failed'])
  const createdAt = faker.date.between({ from: '2024-01-01', to: '2025-11-01' })
  const updatedAt = faker.date.recent({ days: 30 })

  const serialNumber = faker.string.alphanumeric({ length: 10 }).toUpperCase()

  const operatorResponse = faker.helpers.arrayElement([
    'BERHASIL',
    'GAGAL',
    'SEDANG DIPROSES',
    'SALDO TIDAK CUKUP',
    'KONEKSI ERROR',
  ])

  const supplierPrice = faker.number.int({ min: 5000, max: 100000 })

  return {
    id: faker.string.uuid(),
    trxId,
    sender,          
    productCode,
    productName,
    phoneNumber,
    status,
    serialNumber,
    supplierPrice,
    operatorResponse,
    createdAt,
    updatedAt,
  }
})
