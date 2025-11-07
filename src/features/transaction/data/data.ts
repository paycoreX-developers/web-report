import { Shield, UserCheck, Users } from 'lucide-react'
import { type TrxStatus } from './schema'

export const callTypes = new Map<TrxStatus, string>([
  ['success', 'bg-teal-100/30 text-teal-500 dark:text-teal-100 border-teal-200'],
  ['pending', 'bg-orange-100/40 border-orange-300 text-orange-600 dark:text-orange-300 border-orange-300'],
  [
    'failed',
    'bg-destructive/10 dark:bg-destructive/10 text-destructive dark:text-destructive border-destructive/60',
  ],
])

export const roles = [
  {
    label: 'Superadmin',
    value: 'superadmin',
    icon: Shield,
  },
  {
    label: 'Admin',
    value: 'admin',
    icon: UserCheck,
  },
  {
    label: 'Staff',
    value: 'staff',
    icon: Users,
  }
] as const
