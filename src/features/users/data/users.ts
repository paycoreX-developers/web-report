import { faker } from '@faker-js/faker'

faker.seed(67890)

export const users = Array.from({ length: 500 }, () => {
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

  return {
    id: faker.string.uuid(),
    productName: productName,
    productCode: productCode,
    providerName: provider,
    price: faker.number.int({ min: 5000, max: 100000 }),
    status: faker.helpers.arrayElement(['open', 'gangguan', 'closed']),
    role: faker.helpers.arrayElement(['topup', 'ppob', 'qty']),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
