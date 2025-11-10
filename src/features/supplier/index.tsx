import { getRouteApi } from '@tanstack/react-router'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { useState } from 'react'

const route = getRouteApi('/_authenticated/supplier/')

export function Supplier() {
  const search = route.useSearch()
  const [expandedFailed, setExpandedFailed] = useState(false)

  const cardClass =
    'rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-xl p-8 transition-all duration-500 hover:bg-white/90 dark:border-slate-700/60 dark:bg-slate-800/80 dark:hover:bg-slate-800/90'

  const responseCodes = {
    success: [
      { code: '00', description: 'BERHASIL' },
      { code: '94', description: 'BERHASIL, transaksi sudah pernah sukses' }
    ],
    pending: [
      { code: '68', description: 'Transaksi Dalam Proses' }
    ],
    failed: [
      { code: '05', description: 'Format transaksi salah' },
      { code: '08', description: 'Koneksi biler terputus (timeout)' },
      { code: '11', description: 'Switcher belum terdaftar' },
      { code: '12', description: 'Jumlah digit tidak valid' },
      { code: '13', description: 'Produk tidak tersedia' },
      { code: '14', description: 'Nomor Tujuan / IDPEL Salah' },
      { code: '15', description: 'Nomor Meter / IDPEL yang anda Masukan Salah' },
      { code: '16', description: 'Nominal tidak valid' },
      { code: '17', description: 'Kode produk salah' },
      { code: '18', description: 'Nominal pembelian minimal 20000' },
      { code: '30', description: 'General Error' },
      { code: '40', description: 'Refund Transaksi' },
      { code: '41', description: 'Antrian pada sistem operator' },
      { code: '47', description: 'Total kwk melebihi batas' },
      { code: '51', description: 'Saldo atau stock tidak mencukupi' },
      { code: '53', description: 'Transaksi melebihi limit' },
      { code: '61', description: 'Account anda belum terdaftar' },
      { code: '62', description: 'Account anda tidak aktif' },
      { code: '63', description: 'SysID, PIN atau Password salah' },
      { code: '77', description: 'ID pelanggan terblokir (harap hubungi PLN)' },
      { code: '87', description: 'Tagihan tidak tersedia' },
      { code: '88', description: 'Tagihan Sudah terbayar' },
      { code: '89', description: 'Network Error' },
      { code: '90', description: 'System sedang cut-off' },
      { code: '91', description: 'Transaksi Suspect' },
      { code: '92', description: 'Produk Sedang Gangguan' },
      { code: '93', description: 'Switch Host Tidak Aktif' },
      { code: '95', description: 'User Ilegal' },
      { code: '96', description: 'Melebihi batas saldo' },
      { code: '97', description: 'Proses payment gagal' },
      { code: '98', description: 'Kode Merchant Tidak Terdaftar' },
      { code: '99', description: 'Nomor tujuan / IDpel melebihi 9 digit' },
      { code: '100', description: 'Transaksi anda melebihi limit 6X' },
      { code: '101', description: 'Switching maintenance DB' },
      { code: '102', description: 'Saldo switcher tidak cukup' },
      { code: '103', description: 'Pending transaction lakukan advice' },
      { code: '104', description: 'Transaksi anda melebihi limit bulanan' },
      { code: '105', description: 'Invalid ID Bill' },
      { code: '106', description: 'Tidak terhubung ke Middleware Converter TOPUP DANA' }
    ]
  }

  const visibleFailedCodes = expandedFailed 
    ? responseCodes.failed 
    : responseCodes.failed.slice(0, 8)

  return (
    <>
      {/* HEADER */}
      <Header fixed>
        <Search />
        <div className="ms-auto flex items-center space-x-4">
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className="flex flex-1 flex-col gap-4 sm:gap-6">
        
        {/* <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/20 p-8">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
          <div className="relative z-10 flex flex-col gap-4">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Supplier
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Informasi detail mengenai Supplier.
            </p>
          </div>
        </div> */}
        <div className='flex flex-wrap items-end justify-between gap-2'>
            <div>
                <h2 className='text-2xl font-bold tracking-tight'>Informasi Supplier</h2>
                <p className='text-muted-foreground'>
                Detail Informasi Supplier.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          <section className={cardClass}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Identitas Supplier</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Detail Informasi Supplier</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                ['🌐', 'IP Address', '192.168.1.100'],
                ['📞', 'Nomor Handphone', '+62 21 1234 5678'],
                ['📍', 'Alamat', 'Jl. Merdeka No. 123, Jakarta'],
                ['👤', 'Owner', 'PT. Solusi Pembayaran Indonesia'],
                ['📧', 'Email', 'admin@spl-indonesia.co.id'],
                ['💬', 'Jabber ID', 'spl_support@jabber.org'],
                ['✈️', 'Telegram ID', '@spl_support'],
              ].map(([icon, label, value]) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-700/50 backdrop-blur-sm border border-slate-200/60 dark:border-slate-600/60 hover:bg-slate-100/80 dark:hover:bg-slate-700/80 transition-all duration-300 group"
                >
                  <div className="text-2xl">{icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{label}</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={cardClass}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <span className="text-2xl">🔗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">API & Transaction</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Contoh Format Request dan Response API Transaksi</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full bg-green-500 text-white text-sm font-bold">
                      GET
                    </div>
                    <div className="text-sm font-mono text-slate-700 dark:text-slate-300">
                      /api/apps/trx/send
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Request Format</h4>
                  <pre className="bg-slate-950 text-slate-100 text-sm p-6 rounded-2xl overflow-x-auto border border-slate-700">
{`{
  "transaction_id": "TRX202308150001",
  "amount": 150000,
  "currency": "IDR",
  "merchant_id": "MCH001",
  "customer_id": "CUST12345",
  "timestamp": "2023-08-15T10:30:00Z",
  "payment_method": "credit_card",
  "items": [
    {
      "item_id": "ITM001",
      "name": "Produk A",
      "quantity": 2,
      "price": 75000
    }
  ]
}`}
                  </pre>
                </div>
              </div>

              {/* API RESPONSE */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <span className="text-lg">📝</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Contoh Response</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Format Response Sukses</p>
                  </div>
                </div>

                <pre className="bg-slate-950 text-slate-100 text-sm p-6 rounded-2xl overflow-x-auto border border-slate-700">
{`{
  "status": "success",
  "code": "200",
  "message": "Transaction processed successfully",
  "transaction_id": "TRX202308150001",
  "reference_number": "REF987654321",
  "amount": 150000,
  "currency": "IDR",
  "timestamp": "2023-08-15T10:31:15Z",
  "payment_status": "completed",
  "additional_info": {
    "settlement_date": "2023-08-16",
    "fee": 2500,
    "processing_time": "1.2s"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* RESPONSE CODES */}
          <section className={`${cardClass} xl:col-span-2`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Response Code</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Daftar Response Code beserta keterangannya.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-sm">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  BERHASIL
                </div>
                <div className="space-y-3">
                  {responseCodes.success.map((item) => (
                    <div
                      key={item.code}
                      className="flex items-center gap-4 p-4 rounded-xl bg-green-50/80 dark:bg-green-900/30 backdrop-blur-sm border border-green-200/60 dark:border-green-800/60 hover:bg-green-100/80 dark:hover:bg-green-900/50 transition-all duration-300 group"
                    >
                      <div className="px-3 py-1 rounded-lg bg-green-500 text-white font-mono font-bold text-sm">
                        {item.code}
                      </div>
                      <div className="flex-1 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PENDING CODES */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  PENDING
                </div>
                <div className="space-y-3">
                  {responseCodes.pending.map((item) => (
                    <div
                      key={item.code}
                      className="flex items-center gap-4 p-4 rounded-xl bg-amber-50/80 dark:bg-amber-900/30 backdrop-blur-sm border border-amber-200/60 dark:border-amber-800/60 hover:bg-amber-100/80 dark:hover:bg-amber-900/50 transition-all duration-300 group"
                    >
                      <div className="px-3 py-1 rounded-lg bg-amber-500 text-white font-mono font-bold text-sm">
                        {item.code}
                      </div>
                      <div className="flex-1 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAILED CODES */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold text-sm">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    GAGAL
                  </div>
                  <button
                    onClick={() => setExpandedFailed(!expandedFailed)}
                    className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                  >
                    {expandedFailed ? 'Lihat Sedikit' : `Lihat Semua (${responseCodes.failed.length})`}
                  </button>
                </div>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                  {visibleFailedCodes.map((item) => (
                    <div
                      key={item.code}
                      className="flex items-center gap-4 p-4 rounded-xl bg-red-50/80 dark:bg-red-900/30 backdrop-blur-sm border border-red-200/60 dark:border-red-800/60 hover:bg-red-100/80 dark:hover:bg-red-900/50 transition-all duration-300 group"
                    >
                      <div className="px-3 py-1 rounded-lg bg-red-500 text-white font-mono font-bold text-sm min-w-12 text-center">
                        {item.code}
                      </div>
                      <div className="flex-1 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Main>
    </>
  )
}