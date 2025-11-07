import { type ColumnDef } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table'
import { LongText } from '@/components/long-text'
import { callTypes } from '../data/data'
import { type Trx } from '../data/schema'
import { DataTableRowActions } from './data-table-row-actions'

export const usersColumns: ColumnDef<Trx>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    meta: {
      className: cn('max-md:sticky start-0 z-10 rounded-tl-[inherit]'),
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'trxId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='TRX ID' />
    ),
    cell: ({ row }) => (
      <LongText className='max-w-36 ps-3'>{row.getValue('trxId')}</LongText>
    ),
    meta: {
      className: cn(
        'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)]',
        'ps-0.5 max-md:sticky start-6 @4xl/content:table-cell @4xl/content:drop-shadow-none'
      ),
    },
    enableHiding: false,
  },
  {
    accessorKey: 'sender',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Pengirim' />
    ),
    cell: ({ row }) => (
      <div className='w-fit ps-2 text-nowrap'>{row.getValue('sender')}</div>
    ),
    meta: { className: 'w-36' },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Tanggal' />
    ),
    cell: ({ row }) => {
      const value = row.getValue('createdAt')
      const date = value ? new Date(value as string) : null
  
      return (
        <div className="w-fit ps-2 text-nowrap">
          {date
            ? date.toLocaleString('id-ID', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })
            : '-'}
        </div>
      )
    },
    meta: { className: 'w-44' },
  },  
  {
    accessorKey: 'productCode',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Kode Produk' />
    ),
    cell: ({ row }) => (
      <div className='w-fit ps-2 text-nowrap'>{row.getValue('productCode')}</div>
    ),
    meta: { className: 'w-36' },
  },  
  {
    accessorKey: 'productName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Nama Produk' />
    ),
    cell: ({ row }) => (
      <div className='w-fit ps-2 text-nowrap'>{row.getValue('productName')}</div>
    ),
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Nomor Tujuan' />
    ),
    cell: ({ row }) => <div>{row.getValue('phoneNumber')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const { status } = row.original
      const badgeColor = callTypes.get(status)
      return (
        <div className='flex space-x-2'>
          <Badge variant='outline' className={cn('capitalize', badgeColor)}>
            {row.getValue('status')}
          </Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: 'serialNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='SN' />
    ),
    cell: ({ row }) => {
      const value = row.getValue('serialNumber') as number
      return <div>{`${value}`}</div>
    },
    enableSorting: false,
  },
  {
    accessorKey: 'supplierPrice',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Harga Supplier' />
    ),
    cell: ({ row }) => {
      const value = row.getValue('supplierPrice') as number
      return <div>{`Rp ${value.toLocaleString('id-ID')}`}</div>
    },
    enableSorting: false,
  },
  {
    accessorKey: 'operatorResponse',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Jawaban Opeator' />
    ),
    cell: ({ row }) => <div>{row.getValue('operatorResponse')}</div>,
    enableSorting: false,
  },
  {
    id: 'actions',
    cell: DataTableRowActions,
  },
]
