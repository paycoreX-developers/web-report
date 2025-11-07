
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Analytics } from './components/analytics'
import { RecentSales } from './components/recent-sales'
import { AnalyticsChart } from './components/analytics-chart'
import st24Image from '@/assets/st24.png'

export function Dashboard() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        {/* <TopNav links={topNav} /> */}
        <div className='ms-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          {/* <ConfigDrawer /> */}
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        {/* <div className='mb-6 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
        </div> */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="bg-white-100 flex size-14 items-center justify-center rounded-xl shadow-sm">
            <img
              src={st24Image}
              alt="ST24 Logo"
              className="h-10 w-10 object-contain" />
          </div>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          {/* <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Dashboard</TabsTrigger>
              <TabsTrigger value='analytics' disabled>Analytics</TabsTrigger>
              <TabsTrigger value='reports' disabled>
                Reports
              </TabsTrigger>
            </TabsList>
          </div> */}
          <TabsContent value='overview' className='space-y-6'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {/* <Card className='border-green-200 bg-gradient-to-br from-green-50 via-green-100/50 to-green-50 shadow-md'> */}
              <Card className='border-green-200'>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium text-green-400'>
                    Total Transaksi
                  </CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='text-green-400 h-4 w-4'
                  >
                    <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                  </svg>
                </CardHeader>
                {/* <CardContent>
                  <div className='text-2xl font-bold text-green-400'>1000</div>
                  <p className='text-muted-foreground text-xs'>
                    per Hari Ini
                  </p>
                </CardContent> */}
                <CardContent className="flex flex-col space-y-3">
                  <div className="flex flex-col gap-1">
                    <div className="text-2xl font-bold text-green-400">1,000</div>
                    <p className="text-muted-foreground text-xs">per Hari Ini</p>
                  </div>

                  <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

                  <div className="grid grid-cols-3 text-center text-xs">
                    <div className="flex flex-col">
                      <span className="font-semibold text-green-500">950</span>
                      <span className="text-muted-foreground">Sukses</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-semibold text-amber-500">30</span>
                      <span className="text-muted-foreground">Proses</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-semibold text-red-500">20</span>
                      <span className="text-muted-foreground">Gagal</span>
                    </div>
                  </div>
                </CardContent>


              </Card>
              {/* <Card className='border-orange-200 bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 shadow-md'> */}
              <Card className='border-purple-200'>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium text-purple-500'>
                    Total Pembelian
                  </CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='text-purple-500 h-4 w-4'
                  >
                    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                    <circle cx='9' cy='7' r='4' />
                    <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                  </svg>
                </CardHeader>
                <CardContent className="flex flex-col space-y-3">
                    <div className="flex flex-col gap-1">
                      <div className="text-2xl font-bold text-purple-500">Rp 2.000.000</div>
                      <p className="text-muted-foreground text-xs">per Hari Ini</p>
                    </div>

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

                    <div className="flex flex-col items-center text-center text-xs">
                      <span className="font-semibold text-purple-500">120</span>
                      <span className="text-muted-foreground">Jumlah Produk</span>
                    </div>
                  </CardContent>

              </Card>
              {/* <Card className='border-blue-200 bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-50 shadow-md'> */}
              <Card className='border-blue-200'>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium text-blue-500'>Total Deposit</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='text-blue-500 h-4 w-4'>
                    <rect width='20' height='14' x='2' y='5' rx='2' />
                    <path d='M2 10h20' />
                  </svg>
                </CardHeader>
                <CardContent className="flex flex-col space-y-3">
                    <div className="flex flex-col gap-1">
                      <div className="text-2xl font-bold text-blue-500">Rp 1.000.000</div>
                      <p className="text-muted-foreground text-xs">per Hari Ini</p>
                    </div>

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

                    <div className="flex flex-col items-center text-center text-xs">
                      <span className="font-semibold text-blue-500">5x</span>
                      <span className="text-muted-foreground">Deposit</span>
                    </div>
                  </CardContent>

              </Card>
              <Card className='border-teal-200'>
              {/* <Card> */}
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium text-teal-500'>
                    SLA Transaksi
                  </CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='text-teal-500 h-4 w-4'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <div className="text-2xl font-bold text-teal-500">98,7%</div>
                      <p className="text-muted-foreground text-xs">per Hari Ini</p>
                    </div>

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Success Rate</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-semibold text-green-600">98.7%</span>
                          <span className="text-[10px] text-muted-foreground">(+2.3%)</span>
                        </div>
                      </div>

                      <div className="flex flex-col text-right">
                        <span className="text-xs text-muted-foreground">Speed Rate</span>
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-sm font-semibold text-blue-500">1.4s</span>
                          <span className="text-[10px] text-muted-foreground">(-0.3s)</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>Grafik Transaksi</CardTitle>
                  <CardDescription>
                    Grafik transaksi 7 Hari Terakhir.
                  </CardDescription>
                </CardHeader>
                <CardContent className='ps-6'>
                  <AnalyticsChart />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Produk Terlaris</CardTitle>
                  <CardDescription>
                    Daftar produk terlaris dari semua kategori.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value='analytics' className='space-y-4'>
            <Analytics />
          </TabsContent>
        </Tabs>
      </Main>
    </>
  )
}

// const topNav = [
//   {
//     title: 'Overview',
//     href: 'dashboard/overview',
//     isActive: true,
//     disabled: false,
//   },
//   {
//     title: 'Customers',
//     href: 'dashboard/customers',
//     isActive: false,
//     disabled: true,
//   },
//   {
//     title: 'Products',
//     href: 'dashboard/products',
//     isActive: false,
//     disabled: true,
//   },
//   {
//     title: 'Settings',
//     href: 'dashboard/settings',
//     isActive: false,
//     disabled: true,
//   },
// ]
