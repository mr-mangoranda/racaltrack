import { motion } from 'motion/react';
import { Wallet, Users, BarChart3, Search, Filter, MoreVertical, Receipt, ArrowUpRight, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export function CollectionHubView() {
  const stats = [
    { label: 'Total Daily Revenue', value: '₱42,580.00', icon: Wallet, color: 'text-rose-600', bg: 'bg-rose-50', trend: '+12.5% Today', trendColor: 'text-green-600' },
    { label: 'Total Rounds Today', value: '1,284', icon: ArrowUpRight, color: 'text-msu-gold', bg: 'bg-msu-gold/10', trend: 'Fleet Wide', trendColor: 'text-gray-400' },
    { label: 'Active Drivers', value: '86 / 102', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', trend: 'Live Now', trendColor: 'text-green-600', isLive: true },
  ];

  const drivers = [
    { name: 'Ricardo Dalisay', id: 'RT-2024-0891', route: 'MSU Main - Line A', rounds: 18, owed: '₱1,440.00', status: 'Pending', avatar: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Elena Marasigan', id: 'RT-2024-0422', route: 'Marawi Perimeter', rounds: 22, owed: '₱0.00', status: 'Paid', avatar: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Samuel Bonifacio', id: 'RT-2024-1105', route: 'MSU-IIT Express', rounds: 14, owed: '₱1,120.00', status: 'Overdue', avatar: 'https://i.pravatar.cc/150?u=3' },
    { name: 'Marco Sison', id: 'RT-2024-0019', route: 'MSU Main - Line B', rounds: 19, owed: '₱1,520.00', status: 'Pending', avatar: 'https://i.pravatar.cc/150?u=4' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Collection Hub</h2>
        <p className="text-gray-500 mt-1">Real-time revenue monitoring and driver remittance tracking.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={cn("text-[10px] font-bold px-2 py-1 rounded-md bg-opacity-10 capitalize flex items-center gap-1", stat.trendColor)}>
                {stat.isLive && <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>}
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
          <h3 className="text-lg font-bold text-gray-800">Driver Remittance Status</h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search driver or ID..." 
                className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-msu-maroon/10 focus:border-msu-maroon transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-blue-50/50 text-[10px] uppercase tracking-widest font-bold text-gray-500">
                <th className="px-6 py-4">Driver Details</th>
                <th className="px-6 py-4">ID Number</th>
                <th className="px-6 py-4">Rounds</th>
                <th className="px-6 py-4">Amount Owed</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {drivers.map((driver) => (
                <tr key={driver.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm relative">
                        <img src={driver.avatar} alt="" className="w-full h-full object-cover" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center p-0.5">
                           <div className="w-full h-full bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{driver.name}</p>
                        <p className="text-[10px] text-gray-500 uppercase">{driver.route}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono font-medium text-gray-600">{driver.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-800">{driver.rounds}</td>
                  <td className="px-6 py-4 text-sm font-bold text-msu-maroon">{driver.owed}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "text-[10px] font-black uppercase px-3 py-1 rounded-full border shadow-sm",
                      driver.status === 'Paid' ? 'bg-green-50 text-green-700 border-green-200' :
                      driver.status === 'Pending' ? 'bg-msu-gold/10 text-msu-gold border-msu-gold/20' :
                      'bg-rose-50 text-rose-700 border-rose-200'
                    )}>
                      {driver.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <button className="text-[10px] font-black uppercase text-msu-maroon hover:underline px-2 py-1 transition-all">
                          {driver.status === 'Paid' ? 'Receipt' : 'Remit'}
                       </button>
                       <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-md transition-all">
                          <MoreVertical className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-gray-50/50 flex items-center justify-between">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing 1-4 of 86 Drivers</p>
           <div className="flex gap-2">
              <button className="p-1.5 border border-gray-200 text-gray-400 rounded hover:bg-white transition-all disabled:opacity-50" disabled>
                 <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              <button className="p-1.5 border border-gray-200 text-gray-400 hover:text-msu-maroon hover:border-msu-maroon rounded hover:bg-white transition-all">
                 <ChevronRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
