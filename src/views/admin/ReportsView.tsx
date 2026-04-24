import { motion } from 'motion/react';
import { 
  FileText, 
  Table, 
  Calendar, 
  Download, 
  Filter, 
  RefreshCw, 
  TrendingUp,
  Search,
  ChevronDown
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { cn } from '../../lib/utils';

const data = [
  { name: '01 Oct', revenue: 4000, collection: 2400 },
  { name: '07 Oct', revenue: 3000, collection: 1398 },
  { name: '14 Oct', revenue: 2000, collection: 9800 },
  { name: '21 Oct', revenue: 2780, collection: 3908 },
  { name: '28 Oct', revenue: 1890, collection: 4800 },
  { name: '31 Oct', revenue: 2390, collection: 3800 },
];

export function ReportsView() {
  const stats = [
    { label: 'Total Revenue (Monthly)', value: '₱1,248,500.00', trend: '+12.5%', color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Avg. Daily Collection', value: '₱41,616.67', trend: '+4.2%', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Compliance Discrepancies', value: '1.2%', trend: '8 Pending', color: 'text-msu-gold', bg: 'bg-msu-gold/10' },
    { label: 'Audited Transactions', value: '15,402', trend: 'Secure', color: 'text-green-600', bg: 'bg-green-50' },
  ];

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <nav className="flex items-center gap-2 text-[10px] uppercase font-bold text-gray-400 mb-2">
              <span>Portal</span>
              <span className="text-gray-300">/</span>
              <span>Financial Analytics</span>
              <span className="text-gray-300">/</span>
              <span className="text-msu-maroon underline">Institutional Reports</span>
           </nav>
           <h2 className="text-3xl font-bold text-gray-900">Reports & Data Export</h2>
           <p className="text-gray-500 mt-1 max-w-lg leading-relaxed">Generate and export comprehensive financial statements for MSU auditing.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-3 bg-[#E0E7FF] hover:bg-[#D1D5DB] text-gray-800 rounded-lg text-sm font-bold transition-all shadow-sm">
              <Download className="w-4 h-4" /> Export as PDF
           </button>
           <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-3 bg-msu-maroon hover:bg-msu-maroon-dark text-white rounded-lg text-sm font-bold transition-all shadow-md group">
              <Table className="w-4 h-4" /> Export Excel (.xlsx)
           </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
         <div>
            <label className="block text-[10px] uppercase tracking-widest font-black text-gray-400 mb-2">Date Range Selection</label>
            <div className="flex items-center gap-2 border border-blue-100 rounded-lg p-2 bg-blue-50/20">
               <div className="flex-1 flex items-center gap-2 px-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <input type="text" value="10/01/2023" readOnly className="w-full bg-transparent text-sm font-bold text-gray-700 outline-none" />
               </div>
               <span className="text-gray-300">—</span>
               <div className="flex-1 flex items-center gap-2 px-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <input type="text" value="10/31/2023" readOnly className="w-full bg-transparent text-sm font-bold text-gray-700 outline-none" />
               </div>
            </div>
         </div>
         <div>
            <label className="block text-[10px] uppercase tracking-widest font-black text-gray-400 mb-2">Report Category</label>
            <div className="relative">
               <select className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-4 text-sm font-bold text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-msu-maroon/20">
                  <option>Consolidated Revenue</option>
                  <option>Driver Remittance</option>
                  <option>Route Performance</option>
               </select>
               <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
         </div>
         <button className="flex items-center justify-center gap-2 bg-msu-gold text-msu-maroon font-black py-2.5 rounded-lg text-sm hover:scale-[1.02] active:scale-[0.98] transition-all">
            <RefreshCw className="w-4 h-4" /> Update View
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className={cn("absolute right-0 top-0 w-16 h-16 opacity-10 flex items-center justify-center", stat.color)}>
               <TrendingUp className="w-12 h-12" />
            </div>
            <div className={cn("text-[10px] font-black px-2 py-1 rounded-md mb-3 inline-block", stat.bg, stat.color)}>
              {stat.trend}
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">{stat.label}</p>
            <h4 className="text-xl font-bold text-gray-900">{stat.value}</h4>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-8">
               <div>
                  <h3 className="text-lg font-bold text-gray-800">Revenue Growth Trends</h3>
                  <p className="text-xs text-gray-500">Historical performance visualized daily for MSU financial audits</p>
               </div>
               <div className="flex bg-gray-100 p-1 rounded-md text-[10px] font-black uppercase">
                  <button className="px-3 py-1.5 bg-msu-maroon text-white rounded shadow-sm">Daily</button>
                  <button className="px-3 py-1.5 text-gray-500 hover:text-gray-700 transition-colors">Weekly</button>
                  <button className="px-3 py-1.5 text-gray-500 hover:text-gray-700 transition-colors">Monthly</button>
               </div>
            </div>
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                     <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#600000" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#600000" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                     <XAxis dataKey="name" stroke="#9ca3af" fontSize={10} axisLine={false} tickLine={false} />
                     <YAxis hide />
                     <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold', fontSize: '12px' }} 
                     />
                     <Area type="monotone" dataKey="revenue" stroke="#600000" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                     <Area type="monotone" dataKey="collection" stroke="#FFB800" strokeWidth={3} fillOpacity={0} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
               <h3 className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Revenue by Category</h3>
               <div className="space-y-4">
                  {[
                    { label: 'Regular Fare', amount: '₱842,000', percent: 80, color: 'bg-msu-maroon' },
                    { label: 'Student/PWD Discounted', amount: '₱315,500', percent: 45, color: 'bg-msu-gold' },
                    { label: 'Charter/Special Trip', amount: '₱91,000', percent: 15, color: 'bg-blue-600' },
                  ].map(cat => (
                    <div key={cat.label}>
                       <div className="flex justify-between text-xs font-bold mb-1.5">
                          <span className="text-gray-700">{cat.label}</span>
                          <span className="text-gray-900">{cat.amount}</span>
                       </div>
                       <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${cat.percent}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className={cn("h-full rounded-full", cat.color)}
                          ></motion.div>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="mt-4 pt-6 border-t border-gray-100">
                  <h3 className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-4">Recent Export History</h3>
                  <div className="space-y-3">
                     {[
                        { name: 'Monthly_Consolidated_Oct.pdf', time: '2h ago', icon: FileText, color: 'text-rose-600', bg: 'bg-rose-50' },
                        { name: 'Driver_Penalties_Q3.xlsx', time: 'Yesterday', icon: Table, color: 'text-green-600', bg: 'bg-green-50' },
                     ].map(item => (
                        <div key={item.name} className="flex items-center gap-3 group cursor-pointer">
                           <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-110", item.bg, item.color)}>
                              <item.icon className="w-4 h-4" />
                           </div>
                           <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-gray-800 truncate group-hover:text-msu-maroon transition-colors">{item.name}</p>
                              <p className="text-[10px] text-gray-400">{item.time}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="bg-msu-maroon rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-msu-gold/10 transition-all duration-500"></div>
               <div className="relative z-10 flex flex-col items-center text-center">
                  <svg className="w-12 h-12 mb-4 text-white opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                     <path d="m9 12 2 2 4-4" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Audit Ready</h3>
                  <p className="text-xs text-white/60 mb-8 leading-relaxed">
                     All reports generated through this portal are timestamped and cryptographically signed for MSU verification requirements.
                  </p>
                  <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-black py-3 rounded-lg text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                     View Audit Trail
                  </button>
               </div>
               <div className="absolute -bottom-6 -right-6 opacity-5 rotate-12 transition-transform group-hover:scale-125">
                  <FileText className="w-32 h-32" />
               </div>
            </div>
         </div>
      </div>

      <div className="bg-gray-50 rounded-2xl shadow-inner-sm border border-gray-200 overflow-hidden">
         <div className="p-6 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4 bg-white/50">
            <h3 className="font-bold text-gray-800">Detailed Collection Ledger</h3>
            <div className="flex gap-2">
               <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-400 hover:text-msu-maroon transition-all">
                  <Filter className="w-4 h-4" />
               </button>
               <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Search transactions..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white" />
               </div>
            </div>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="text-[10px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-200">
                     <th className="px-6 py-4 font-black">Date</th>
                     <th className="px-6 py-4 font-black">Transaction ID</th>
                     <th className="px-6 py-4 font-black">Route</th>
                     <th className="px-6 py-4 font-black">Remitted By</th>
                     <th className="px-6 py-4 font-black">Status</th>
                     <th className="px-6 py-4 font-black text-right">Amount</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100 bg-white/30">
                  {[
                     { date: 'Oct 30, 2023', id: 'TXN-00942-X', route: 'MSU-Poblacion Main', by: 'D. Macapagal', status: 'Verified', amount: '₱4,250.00' },
                     { date: 'Oct 29, 2023', id: 'TXN-00941-X', route: 'MSU-Heights Circular', by: 'R. Santos', status: 'Verified', amount: '₱3,890.00' },
                     { date: 'Oct 29, 2023', id: 'TXN-00940-A', route: 'University Loop', by: 'L. Mendoza', status: 'Pending', amount: '₱2,120.00' },
                     { date: 'Oct 28, 2023', id: 'TXN-00939-X', route: 'MSU-Poblacion Main', by: 'J. Cruz', status: 'Verified', amount: '₱4,110.00' },
                  ].map(txn => (
                     <tr key={txn.id} className="text-sm">
                        <td className="px-6 py-4 font-medium text-gray-600">{txn.date}</td>
                        <td className="px-6 py-4 font-mono font-bold text-gray-400 text-xs">{txn.id}</td>
                        <td className="px-6 py-4 font-semibold text-gray-700">{txn.route}</td>
                        <td className="px-6 py-4 text-gray-600 font-medium">{txn.by}</td>
                        <td className="px-6 py-4">
                           <span className={cn(
                              "text-[10px] font-black uppercase px-2 py-0.5 rounded",
                              txn.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-msu-gold/20 text-msu-gold'
                           )}>
                              {txn.status}
                           </span>
                        </td>
                        <td className="px-6 py-4 text-right font-black text-gray-900">{txn.amount}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <button className="w-full py-4 bg-white/50 text-[10px] font-black uppercase text-gray-400 hover:text-msu-maroon tracking-widest transition-all">
            View All Transactions
         </button>
      </div>
    </div>
  );
}
