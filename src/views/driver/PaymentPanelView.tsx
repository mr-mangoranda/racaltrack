import { motion } from 'motion/react';
import { Wallet, History, AlertCircle, CheckCircle2, ChevronRight, Receipt } from 'lucide-react';
import { User, Remittance } from '../../types';

interface PaymentPanelViewProps {
  user: User;
}

export function PaymentPanelView({ user }: PaymentPanelViewProps) {
  const remittances: Remittance[] = [
    { id: '1', driverId: '402', date: 'Oct 24, 2023', amount: 625, status: 'paid', transactionId: '#RT-9921' },
    { id: '2', driverId: '402', date: 'Oct 23, 2023', amount: 550, status: 'pending', transactionId: '#RT-9804' },
    { id: '3', driverId: '402', date: 'Oct 22, 2023', amount: 700, status: 'paid', transactionId: '#RT-9755' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
         <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-msu-gold shadow-sm">
            <img 
              src={user.avatar || 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=100&h=100'} 
              alt={user.name} 
              className="w-full h-full object-cover"
            />
         </div>
         <div>
            <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">MSU-RACAL {user.driverId}</p>
         </div>
      </div>

      <div className="bg-msu-maroon rounded-3xl p-8 shadow-xl relative overflow-hidden text-white">
         <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 ring-8 ring-white/5"></div>
         <div className="absolute bottom-0 right-0 p-4 opacity-10">
            <Wallet className="w-24 h-24" />
         </div>
         
         <p className="text-xs uppercase tracking-[0.2em] font-semibold opacity-60 mb-2">Unremitted Balance</p>
         <div className="flex items-baseline gap-1 mb-8">
            <span className="text-sm font-bold opacity-80">₱</span>
            <span className="text-5xl font-bold tracking-tighter">450.00</span>
         </div>

         <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/10 text-xs font-bold">
               18 Total Rounds
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/10 text-xs font-bold">
               ₱25.00/Round
            </div>
         </div>
      </div>

      <button className="w-full bg-msu-gold text-msu-maroon font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-msu-gold-light transition-all shadow-md active:scale-[0.98]">
         <Receipt className="w-5 h-5" />
         CONFIRM CASH SUBMISSION
      </button>

      <div>
         <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Payment History</h3>
            <button className="text-[10px] font-bold text-msu-maroon uppercase tracking-widest hover:underline">View All</button>
         </div>
         <div className="space-y-4">
            {remittances.map((rem) => (
              <div key={rem.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-msu-gold/30 transition-all">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 text-msu-maroon flex items-center justify-center rounded-xl">
                       <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-gray-800">{rem.date}</h4>
                       <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                          Transaction ID: {rem.transactionId}
                       </p>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-sm font-bold text-gray-800">₱{rem.amount.toFixed(2)}</div>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                       rem.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-msu-gold/20 text-msu-gold'
                    }`}>
                       {rem.status}
                    </span>
                 </div>
              </div>
            ))}
         </div>
      </div>

      <div className="bg-msu-gold/10 border border-msu-gold/20 rounded-2xl p-6 flex gap-4">
         <AlertCircle className="w-6 h-6 text-msu-maroon flex-shrink-0" />
         <div>
            <h4 className="text-sm font-bold text-msu-maroon uppercase mb-1">Compliance Warning</h4>
            <p className="text-xs text-msu-maroon/80 leading-relaxed font-medium">
               Unsubmitted cash balance exceeds ₱400. Please remit to MSU Admin office to avoid round suspension.
            </p>
         </div>
      </div>
    </div>
  );
}
