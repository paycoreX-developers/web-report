import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import telkomselImage from '@/assets/telkomsel.svg'
import threeImage from '@/assets/three.png'
import xlImage from '@/assets/xl.png'

const salesData = [
  {
    code: 'S10',
    name: 'Pulsa Reguler Telkomsel 10.000',
    image: telkomselImage,
    provider: 'Telkomsel',
    transactions: 100,
    avatarSize: 'h-8 w-8',
  },
  {
    code: 'MAST180',
    name: 'Masa Aktif Kartu Telkomsel +180 Hari',
    image: telkomselImage,
    provider: 'Telkomsel',
    transactions: 50,
    avatarSize: 'h-8 w-8',
  },
  {
    code: 'TPT20',
    name: 'Pulsa Transfer Three 20.000',
    image: threeImage,
    provider: 'Three',
    transactions: 30,
    avatarSize: 'h-9 w-9',
  },
  {
    code: 'T12',
    name: 'Pulsa Reguler Three 12.000',
    image: threeImage,
    provider: 'Three',
    transactions: 10,
    avatarSize: 'h-9 w-9',
  },
  {
    code: 'XTP75',
    name: 'Pulsa Transfer XL 75.000',
    image: xlImage,
    provider: 'XL',
    transactions: 5,
    avatarSize: 'h-9 w-9',
  },
  {
    code: 'S25',
    name: 'Pulsa Reguler Telkomsel 25.000',
    image: telkomselImage,
    provider: 'Telkomsel',
    transactions: 85,
    avatarSize: 'h-8 w-8',
  },
  {
    code: 'S50',
    name: 'Pulsa Reguler Telkomsel 50.000',
    image: telkomselImage,
    provider: 'Telkomsel',
    transactions: 75,
    avatarSize: 'h-8 w-8',
  },
  {
    code: 'TPT50',
    name: 'Pulsa Transfer Three 50.000',
    image: threeImage,
    provider: 'Three',
    transactions: 25,
    avatarSize: 'h-9 w-9',
  },
  {
    code: 'XTP50',
    name: 'Pulsa Transfer XL 50.000',
    image: xlImage,
    provider: 'XL',
    transactions: 15,
    avatarSize: 'h-9 w-9',
  },
  {
    code: 'XTP100',
    name: 'Pulsa Transfer XL 100.000',
    image: xlImage,
    provider: 'XL',
    transactions: 8,
    avatarSize: 'h-9 w-9',
  },
]

export function RecentSales() {
  return (
    <ScrollArea className='h-[320px] pr-4'>
      <div className='space-y-8'>
        {salesData.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <Avatar className={item.avatarSize}>
              <AvatarImage
                src={item.image}
                alt='Avatar'
                className={
                  item.provider !== 'Telkomsel' ? 'object-contain p-1' : ''
                }
              />
              <AvatarFallback>{item.provider}</AvatarFallback>
            </Avatar>
            <div className='flex flex-1 flex-wrap items-center justify-between'>
              <div className='space-y-1'>
                <p className='text-sm leading-none font-medium'>{item.code}</p>
                <p className='text-muted-foreground text-sm'>{item.name}</p>
              </div>
              <div className='font-medium'>{item.transactions} Transaksi</div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
