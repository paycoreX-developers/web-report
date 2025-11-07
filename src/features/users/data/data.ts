import { Shield, UserCheck, Users } from 'lucide-react'
import { type UserStatus } from './schema'

export const callTypes = new Map<UserStatus, string>([
  ['open', 'bg-teal-100/30 text-teal-500 dark:text-teal-100 border-teal-200'],
  ['gangguan', 'bg-orange-100/40 border-orange-300 text-orange-600 dark:text-orange-300 border-orange-300'],
  [
    'closed',
    'bg-destructive/10 dark:bg-destructive/10 text-destructive dark:text-destructive border-destructive/60',
  ],
])
export const roles = [
  {
    label: 'Isi Ulang',
    value: 'topup',
    icon: Shield,
  },
  {
    label: 'PPOB',
    value: 'ppob',
    icon: UserCheck,
  },
  {
    label: 'Kuantiti',
    value: 'qty',
    icon: Users,
  }
] as const
