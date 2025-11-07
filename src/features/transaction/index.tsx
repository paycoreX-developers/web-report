import { getRouteApi } from '@tanstack/react-router'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { UsersDialogs } from './components/users-dialogs'
import { UsersProvider } from './components/users-provider'
import { UsersTable } from './components/users-table'
import { transactions } from './data/users'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const route = getRouteApi('/_authenticated/transaction/')

export function Transaction() {
  const search = route.useSearch()
  const navigate = route.useNavigate()

  const total = transactions.length
  const success = transactions.filter((t) => t.status === 'success').length
  const failed = transactions.filter((t) => t.status === 'failed').length
  const pending = transactions.filter((t) => t.status === 'pending').length

  const successRate = total ? ((success / total) * 100).toFixed(2) : 0



  return (
    <UsersProvider>
      <Header fixed>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Riwayat Transaksi</h2>
            <p className='text-muted-foreground'>
              Kelola riwayat transaksi di sini.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Card className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-950 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500" />

            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-black">
                  Success Rate
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col space-y-3">
              {(() => {
                const rate = parseFloat(successRate || '')
                let color = 'text-green-500'
                let barColor = 'from-green-400 to-blue-500'

                if (rate < 40) {
                  color = 'text-red-500'
                  barColor = 'from-red-500 to-red-400'
                } else if (rate < 70) {
                  color = 'text-yellow-500'
                  barColor = 'from-yellow-400 to-amber-500'
                }

                return (
                  <>
                    <div>
                      <div className={`text-3xl font-bold tracking-tight ${color}`}>
                        {successRate}%
                      </div>
                      <p className="text-xs text-muted-foreground">
                        dari {total} transaksi
                      </p>
                    </div>

                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className={`absolute left-0 top-0 h-full bg-gradient-to-r ${barColor} transition-all duration-700`}
                        style={{ width: `${successRate}%` }}
                      />
                    </div>

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-green-500">Sukses: {success}</span>
                      <span className="text-yellow-500">Pending: {pending}</span>
                      <span className="text-red-500">Gagal: {failed}</span>
                    </div>
                  </>
                )
              })()}
            </CardContent>
          </Card>

        </div>

        <UsersTable data={transactions} search={search} navigate={navigate} />
      </Main>

      <UsersDialogs />
    </UsersProvider>
  )
}
