import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { useMemo } from 'react'

const data = [
  { name: 'Mon', success: 850, failed: 640 },
  { name: 'Tue', success: 920, failed: 700 },
  { name: 'Wed', success: 780, failed: 600 },
  { name: 'Thu', success: 1020, failed: 820 },
  { name: 'Fri', success: 950, failed: 760 },
  { name: 'Sat', success: 700, failed: 580 },
  { name: 'Sun', success: 880, failed: 670 },
]

export function AnalyticsChart() {
  const gradientIdSuccess = useMemo(() => `gradient-success-${Math.random()}`, [])
  const gradientIdFailed = useMemo(() => `gradient-failed-${Math.random()}`, [])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-xl p-3 shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-green-600 text-sm">Sukses:</span>
              <span className="font-semibold text-gray-900">{payload[0].value}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-red-600 text-sm">Gagal:</span>
              <span className="font-semibold text-gray-900">{payload[1].value}</span>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full h-[340px] rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 p-6 shadow-lg border border-gray-200/50 dark:border-zinc-700/50">
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={gradientIdSuccess} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id={gradientIdFailed} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="2 4" strokeOpacity={0.15} vertical={false} />
          <XAxis
            dataKey="name"
            stroke="#6B7280"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <YAxis
            stroke="#6B7280"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            iconSize={10}
            wrapperStyle={{
              fontSize: '13px',
              color: '#6B7280',
              fontWeight: 500,
            }}
            formatter={(value) => (
              <span className="text-gray-600 dark:text-gray-400">{value}</span>
            )}
          />
          <Area
            type="monotone"
            dataKey="success"
            stroke="#22c55e"
            strokeWidth={3}
            fill={`url(#${gradientIdSuccess})`}
            dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#22c55e', stroke: '#fff', strokeWidth: 2 }}
            fillOpacity={1}
          />
          <Area
            type="monotone"
            dataKey="failed"
            stroke="#ef4444"
            strokeWidth={3}
            fill={`url(#${gradientIdFailed})`}
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#ef4444', stroke: '#fff', strokeWidth: 2 }}
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}