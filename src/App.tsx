/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { LoginView } from './views/LoginView';
import { RoundLoggerView } from './views/driver/RoundLoggerView';
import { PaymentPanelView } from './views/driver/PaymentPanelView';
import { CollectionHubView } from './views/admin/CollectionHubView';
import { ComplianceView } from './views/admin/ComplianceView';
import { ReportsView } from './views/admin/ReportsView';
import { AdminDashboardView } from './views/admin/AdminDashboardView';
import { Wallet, MapPin } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    setUser(null);
    setActiveTab('dashboard');
  };

  const handleLogin = (loggedUser: User) => {
    setUser(loggedUser);
    setActiveTab(loggedUser.role === 'admin' ? 'dashboard' : 'logger');
  };

  if (!isReady) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-6">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-24 h-24 bg-msu-maroon rounded-2xl flex items-center justify-center shadow-xl p-4"
        >
           <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/MSU-Marawi_Logo.png/220px-MSU-Marawi_Logo.png" 
              alt="MSU Logo" 
              className="w-full h-full object-contain brightness-0 invert"
           />
        </motion.div>
        <div className="text-center">
           <h1 className="text-xl font-black text-msu-maroon uppercase tracking-[0.3em] mb-2">RacalTrack</h1>
           <div className="w-48 bg-gray-200 h-1 rounded-full overflow-hidden mx-auto">
              <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ duration: 1.5 }}
                 className="bg-msu-gold h-full"
              />
           </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header user={user} onLogout={handleLogout} />

      {user.role === 'admin' ? (
        <div className="flex flex-1">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="flex-1 p-8 overflow-y-auto max-w-7xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'dashboard' && <AdminDashboardView />}
                {activeTab === 'collection' && <CollectionHubView />}
                {activeTab === 'compliance' && <ComplianceView />}
                {activeTab === 'reports' && <ReportsView />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      ) : (
        <div className="flex-1 flex flex-col max-w-md mx-auto w-full bg-white min-h-[calc(100vh-64px)] shadow-2xl relative">
          <main className="flex-1 p-6 pb-32 overflow-y-auto scroll-smooth">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'logger' && <RoundLoggerView user={user} />}
                {activeTab === 'payment' && <PaymentPanelView user={user} />}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Mobile Navigation for Driver */}
          <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/90 backdrop-blur-xl border-t border-gray-100 flex h-24 px-6 pb-6 pt-2 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
            <button 
              onClick={() => setActiveTab('logger')}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-1 transition-all rounded-2xl",
                activeTab === 'logger' ? "text-msu-maroon bg-msu-maroon/5 ring-1 ring-msu-maroon/10" : "text-gray-400"
              )}
            >
              <div className="relative">
                <MapPin className="w-6 h-6" />
                {activeTab === 'logger' && (
                  <motion.div layoutId="nav-dot" className="absolute -top-1 -right-1 w-2 h-2 bg-msu-gold rounded-full" />
                )}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">Round Logger</span>
            </button>
            <button 
              onClick={() => setActiveTab('payment')}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-1 transition-all rounded-2xl",
                activeTab === 'payment' ? "text-msu-maroon bg-msu-maroon/5 ring-1 ring-msu-maroon/10" : "text-gray-400"
              )}
            >
              <div className="relative">
                <Wallet className="w-6 h-6" />
                {activeTab === 'payment' && (
                  <motion.div layoutId="nav-dot" className="absolute -top-1 -right-1 w-2 h-2 bg-msu-gold rounded-full" />
                )}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">Payment Panel</span>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

