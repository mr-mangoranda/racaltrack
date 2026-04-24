import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Timer, History, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { User, Round } from '../../types';

interface RoundLoggerViewProps {
  user: User;
}

export function RoundLoggerView({ user }: RoundLoggerViewProps) {
  const [cooldown, setCooldown] = useState(0);
  const [roundsToday, setRoundsToday] = useState(12);
  const [history, setHistory] = useState<Round[]>([
    { id: '12', driverId: '402', timestamp: '02:45 PM', route: 'MSU Main Campus Circuit', amount: 25, status: 'validated' },
    { id: '11', driverId: '402', timestamp: '02:15 PM', route: 'MSU Main Campus Circuit', amount: 25, status: 'validated' },
    { id: '10', driverId: '402', timestamp: '01:40 PM', route: 'MSU Main Campus Circuit', amount: 25, status: 'validated' },
  ]);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const handleLogRound = () => {
    if (cooldown > 0) return;
    
    setCooldown(300); // 5 minutes cooldown
    setRoundsToday(prev => prev + 1);
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setHistory(prev => [
      { id: (roundsToday + 1).toString(), driverId: '402', timestamp: timeStr, route: 'MSU Main Campus Circuit', amount: 25, status: 'validated' },
      ...prev
    ]);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
           <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-800">
              <MapPin className="w-8 h-8" />
           </div>
           <div>
              <h3 className="text-xl font-bold text-gray-900">Welcome, Driver {user.id}</h3>
              <div className="flex items-center gap-2 mt-1">
                 <span className="w-2 h-2 bg-msu-gold rounded-full animate-pulse"></span>
                 <span className="text-[10px] uppercase tracking-widest font-bold text-msu-gold">Active on Route</span>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
           <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Rounds Today</p>
           <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">{roundsToday}</span>
              <span className="text-xs text-gray-400">/ 20</span>
           </div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
           <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Total Earnings</p>
           <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-msu-maroon">₱{roundsToday * 25}.00</span>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                 <div 
                   className="bg-msu-gold h-full" 
                   style={{ width: `${(roundsToday / 20) * 100}%` }}
                 ></div>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col items-center">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="grid grid-cols-12 h-full">
               {Array.from({ length: 144 }).map((_, i) => (
                 <div key={i} className="border border-gray-900 h-12 w-full"></div>
               ))}
            </div>
         </div>

         <div className="text-center mb-8 relative z-10">
            <h4 className="text-lg font-bold text-gray-800">Ready for New Round?</h4>
            <p className="text-xs text-gray-500 mt-1">Complete your current circuit before logging.</p>
         </div>

         <button 
           onClick={handleLogRound}
           disabled={cooldown > 0}
           className="relative group transition-all"
         >
            <div className={`w-40 h-40 rounded-3xl p-1 bg-gradient-to-br transition-all ${
               cooldown > 0 ? 'from-gray-300 to-gray-400' : 'from-msu-maroon-dark to-msu-maroon'
            }`}>
               <div className="w-full h-full rounded-2xl border-2 border-white/20 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 border-2 border-white/40 rounded-xl flex items-center justify-center text-white/90">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                        <path d="M9 18l6-6-6-6" />
                        <path d="M3 12h12" />
                        <path d="M21 12h.01" />
                     </svg>
                  </div>
                  <span className="text-white text-sm font-bold uppercase tracking-wider">Log Round</span>
               </div>
            </div>
            
            {cooldown === 0 && (
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0, 0.2, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-msu-maroon rounded-3xl -z-10"
              />
            )}
         </button>

         {cooldown > 0 && (
           <div className="mt-8 bg-rose-50 border border-rose-100 rounded-full px-6 py-2.5 flex items-center gap-3 text-rose-800 shadow-inner">
              <Timer className="w-4 h-4 animate-spinner" />
              <span className="text-xs font-bold uppercase tracking-wider">{formatTime(cooldown)} UNTIL NEXT LOG</span>
           </div>
         )}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
         <div 
           className="h-40 bg-cover bg-center relative" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1548345663-1f19f8648313?auto=format&fit=crop&q=80&w=600)' }}
         >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4">
               <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold">{user.route}</span>
               </div>
               <div className="mt-2 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-msu-gold w-3/4"></div>
               </div>
            </div>
         </div>
      </div>

      <div>
         <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Today's History</h3>
            <button className="text-[10px] font-bold text-msu-maroon uppercase tracking-widest hover:underline">View All</button>
         </div>
         <div className="space-y-4">
            {history.map((round) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={round.id} 
                className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group hover:border-msu-gold/30 transition-all"
              >
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                       <CheckCircle2 className="w-5 h-5 text-msu-maroon" />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-gray-800">Round #{round.id}</h4>
                       <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                          {round.timestamp} • Validated
                       </p>
                    </div>
                 </div>
                 <div className="text-sm font-bold text-msu-gold">+₱25.00</div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
