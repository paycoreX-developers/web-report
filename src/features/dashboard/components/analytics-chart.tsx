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
  { name: 'Mon', clicks: 850, uniques: 640 },
  { name: 'Tue', clicks: 920, uniques: 700 },
  { name: 'Wed', clicks: 780, uniques: 600 },
  { name: 'Thu', clicks: 1020, uniques: 820 },
  { name: 'Fri', clicks: 950, uniques: 760 },
  { name: 'Sat', clicks: 700, uniques: 580 },
  { name: 'Sun', clicks: 880, uniques: 670 },
]

export function AnalyticsChart() {
  const gradientId1 = useMemo(() => `gradientClicks-${Math.random()}`, [])
  const gradientId2 = useMemo(() => `gradientUniques-${Math.random()}`, [])

  return (
    <div className="w-full h-[320px] rounded-2xl border bg-gradient-to-br from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-950 p-4 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <defs>
            <linearGradient id={gradientId1} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id={gradientId2} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22D3EE" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis
            dataKey="name"
            stroke="#a1a1aa"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#a1a1aa"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            }}
            labelStyle={{ color: '#374151', fontWeight: 600 }}
            itemStyle={{ color: '#111827' }}
          />
          <Legend
            verticalAlign="top"
            height={30}
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12, color: '#6b7280' }}
          />
          <Area
            type="monotone"
            dataKey="clicks"
            stroke="#6366F1"
            strokeWidth={2.5}
            fill={`url(#${gradientId1})`}
            dot={false}
            activeDot={{ r: 5 }}
          />
          <Area
            type="monotone"
            dataKey="uniques"
            stroke="#22D3EE"
            strokeWidth={2.5}
            fill={`url(#${gradientId2})`}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}