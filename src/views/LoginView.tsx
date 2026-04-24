import { useState } from 'react';
import * as React from 'react';
import { motion } from 'motion/react';
import { Car, ShieldCheck, CheckCircle2, ArrowRight, User } from 'lucide-react';
import { UserRole, User as UserType } from '../types';
import { Header } from '../components/Header';

interface LoginViewProps {
  onLogin: (user: UserType) => void;
}

export function LoginView({ onLogin }: LoginViewProps) {
  const [role, setRole] = useState<UserRole>('driver');
  const [id, setId] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'driver') {
      onLogin({
        id: '402',
        name: 'Danilo Santos',
        role: 'driver',
        driverId: id || 'RT-2024-482',
        avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=100&h=100',
        route: 'MSU Main Campus Circuit'
      });
    } else {
      onLogin({
        id: 'admin-1',
        name: 'MSU Admin',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onLogout={() => {}} brandOnly />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 pb-4">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-msu-maroon rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex flex-wrap gap-1 p-1">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  ))}
                </div>
                <img 
                   src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/MSU-Marawi_Logo.png/220px-MSU-Marawi_Logo.png" 
                   alt="MSU Logo" 
                   className="w-14 h-14 relative z-10 brightness-0 invert"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-1">Portal Access</h2>
              <p className="text-gray-500 text-sm">Welcome to the RacalTrack Management System</p>
            </div>

            <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
              <button
                onClick={() => setRole('driver')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-md transition-all ${
                  role === 'driver' ? 'bg-msu-maroon text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Car className="w-4 h-4" /> Driver
              </button>
              <button
                onClick={() => setRole('admin')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-md transition-all ${
                  role === 'admin' ? 'bg-msu-maroon text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <ShieldCheck className="w-4 h-4" /> Admin
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                  {role === 'driver' ? 'System-Issued ID' : 'Admin Credentials'}
                </label>
                <div className="relative">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     {role === 'driver' ? <User className="w-5 h-5 text-gray-400" /> : <ShieldCheck className="w-5 h-5 text-gray-400" />}
                   </div>
                  <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder={role === 'driver' ? "RT-XXXX-XXXX" : "Username"}
                    className="w-full bg-blue-50/50 border border-blue-100 rounded-lg py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-msu-maroon/20 focus:border-msu-maroon transition-all"
                  />
                </div>
                {role === 'driver' && (
                  <p className="mt-2 text-[10px] italic text-gray-400 text-center">
                    Drivers must use their issued RacalTrack RFID number.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-msu-maroon text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-msu-maroon-dark transition-all shadow-md group"
              >
                {role === 'driver' ? 'Start Shift' : 'Authenticate'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="p-8 pt-4">
             <div className="h-px bg-gray-100 mb-6"></div>
             
             <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-msu-gold/20 flex items-center justify-center text-msu-gold">
                   <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-900 leading-tight">Institutional Integrity</p>
                   <p className="text-[10px] text-gray-500">Secured by MSU Division of Information Technology Services.</p>
                </div>
             </div>

             <div className="mt-8 text-center">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Forgot Access Credentials?</p>
                <button className="text-[10px] font-bold text-gray-600 hover:text-msu-maroon hover:underline transition-colors uppercase">
                  Support Helpdesk
                </button>
             </div>
          </div>
        </motion.div>
      </main>

      <footer className="p-6 text-center border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-[10px] font-medium text-gray-400 uppercase tracking-widest">
           <p>© 2024 Mindanao State University. RacalTrack Platform v2.4.0</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-msu-maroon transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-msu-maroon transition-colors">System Status</a>
              <a href="#" className="hover:text-msu-maroon transition-colors">MSU-IT Policies</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
