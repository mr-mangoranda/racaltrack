import { motion } from 'motion/react';
import { AlertCircle, Wallet, Clock, ShieldCheck, Search, Filter, MessageSquare, Phone, MoreVertical, ChevronLeft, ChevronRight, Map as MapIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

export function ComplianceView() {
  const stats = [
    { label: 'Critical Anomalies', value: '24', trend: '+12%', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Outstanding Balance', value: '₱142,500', trend: 'Active', icon: Wallet, color: 'text-msu-gold', bg: 'bg-msu-gold/10' },
    { label: 'Inactive Drivers', value: '18', trend: 'Peak Hours', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Compliance Rate', value: '94.2%', trend: 'Stable', icon: ShieldCheck, color: 'text-green-600', bg: 'bg-green-50' },
  ];

  const audits = [
    { name: 'Ricardo Dalisay', id: 'MSU-772-RACAL', anomaly: 'Excessive Arrears', risk: 'critical', outstanding: '₱12,450.00', lastActive: '2 hours ago', icon: Wallet, avatar: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Juan Dela Cruz', id: 'MSU-104-RACAL', anomaly: 'Peak Hour Inactivity', risk: 'moderate', outstanding: '₱1,200.00', lastActive: '15 mins ago', icon: Clock, avatar: 'https://i.pravatar.cc/150?u=5' },
    { name: 'Maria Santos', id: 'MSU-881-RACAL', anomaly: 'Irregular Route Path', risk: 'low', outstanding: '₱0.00', lastActive: 'Active Now', icon: MapIcon, avatar: 'https://i.pravatar.cc/150?u=6' },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 font-sans">Anomaly & Compliance Panel</h2>
          <p className="text-gray-500 mt-1">Real-time monitoring of irregular operational patterns and fiscal discrepancies.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-bold transition-all uppercase tracking-wider">
              <Filter className="w-4 h-4" /> Filter Audit
           </button>
           <button className="flex items-center gap-2 px-4 py-2 bg-msu-maroon hover:bg-msu-maroon-dark text-white rounded-lg text-sm font-bold transition-all uppercase tracking-wider">
              <ArrowUpRight className="w-4 h-4 rotate-45" /> Generate Report
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={cn("text-[10px] font-bold px-2 py-1 rounded-md bg-opacity-10 capitalize", stat.color)}>
                {stat.trend}
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">{stat.label}</p>
            <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-bottom border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-800">Compliance List</h3>
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search driver or plate number..." 
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-msu-maroon/10 focus:border-msu-maroon transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-blue-50/50 text-[10px] uppercase tracking-widest font-bold text-gray-500">
                <th className="px-6 py-4">Driver Identity</th>
                <th className="px-6 py-4">Anomaly Type</th>
                <th className="px-6 py-4">Risk Level</th>
                <th className="px-6 py-4">Outstanding</th>
                <th className="px-6 py-4">Last Active</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {audits.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 underline-offset-1 underline decoration-msu-maroon/20 hover:decoration-msu-maroon/100">
                     <div className="flex items-center gap-3">
                        <img src={item.avatar} alt="" className="w-8 h-8 rounded-lg object-cover" />
                        <div>
                           <p className="font-bold">{item.name}</p>
                           <p className="text-[10px] uppercase font-mono">{item.id}</p>
                        </div>
                     </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <item.icon className="w-4 h-4 text-msu-maroon" />
                       <span className="text-xs font-semibold text-gray-700">{item.anomaly}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "text-[8px] font-black uppercase px-2 py-0.5 rounded-md",
                      item.risk === 'critical' ? 'bg-rose-100 text-rose-700' :
                      item.risk === 'moderate' ? 'bg-msu-gold/20 text-msu-gold' :
                      'bg-blue-100 text-blue-700'
                    )}>
                      {item.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-800">{item.outstanding}</td>
                  <td className="px-6 py-4 text-xs text-gray-500 font-medium">{item.lastActive}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                       <button className="p-2 text-gray-500 hover:bg-msu-maroon hover:text-white rounded-lg transition-all"><MessageSquare className="w-4 h-4" /></button>
                       <button className="p-2 text-gray-500 hover:bg-msu-maroon hover:text-white rounded-lg transition-all"><Phone className="w-4 h-4" /></button>
                       <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-all"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-gray-50/50 flex items-center justify-between">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing 1-10 of 42 Audits</p>
           <div className="flex gap-1.5">
              <button className="p-1 border border-gray-200 text-gray-400 rounded hover:bg-white transition-all disabled:opacity-50" disabled><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-8 h-8 flex items-center justify-center bg-msu-maroon text-white text-[10px] font-bold rounded">1</button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-400 text-[10px] font-bold rounded hover:bg-white">2</button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-400 text-[10px] font-bold rounded hover:bg-white">3</button>
              <button className="p-1 border border-gray-200 text-gray-400 rounded hover:bg-white transition-all"><ChevronRight className="w-4 h-4" /></button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-1">
            <div className="p-4 flex items-center justify-between">
                <h3 className="font-bold text-gray-800">Active Anomaly Map</h3>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                   <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Live Tracking</span>
                </div>
            </div>
            <div className="h-80 bg-gray-100 rounded-xl relative overflow-hidden grayscale opacity-80 contrast-125">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map" className="w-full h-full object-cover" />
               <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-rose-500/20 rounded-full flex items-center justify-center animate-ping">
                  <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
               </div>
               <div className="absolute top-1/4 left-3/4 w-8 h-8 bg-msu-gold/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-msu-gold rounded-full ring-4 ring-msu-gold/30"></div>
               </div>
            </div>
         </div>

         <div className="bg-msu-maroon rounded-2xl shadow-xl p-8 text-white flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <ShieldCheck className="w-10 h-10 text-msu-gold" />
            </div>
            <h3 className="text-xl font-bold mb-4">Policy Enforcement</h3>
            <p className="text-xs text-white/70 leading-relaxed mb-8">
               A total of 8 drivers have exceeded the 48-hour payment threshold. Automated SMS notifications are scheduled for deployment at 18:00 PHT.
            </p>
            <button className="w-full bg-white text-msu-maroon font-black py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all uppercase tracking-widest text-xs">
               Trigger System Alerts
            </button>
         </div>
      </div>
    </div>
  );
}

function ArrowUpRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
