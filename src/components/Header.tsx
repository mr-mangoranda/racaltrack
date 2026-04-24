import { motion } from 'motion/react';
import { LogOut, Bell, User as UserIcon, Globe } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user?: User | null;
  onLogout: () => void;
  brandOnly?: boolean;
}

export function Header({ user, onLogout, brandOnly = false }: HeaderProps) {
  return (
    <header className="h-16 glass-panel sticky top-0 z-50 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-msu-maroon rounded flex items-center justify-center text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <div>
          <h1 className="font-bold text-msu-maroon text-lg leading-tight">RacalTrack</h1>
          <p className="text-[10px] uppercase tracking-widest text-msu-maroon/60 font-semibold font-mono">MSU Institutional</p>
        </div>
      </div>

      {!brandOnly && (
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-xs text-gray-500">
            <span>Mindanao State University</span>
            <Globe className="w-3.5 h-3.5" />
          </div>
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-msu-maroon rounded-full border-2 border-white"></span>
          </button>
          <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
             <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">{user?.name || 'Guest User'}</p>
                <p className="text-[10px] text-gray-500 uppercase">{user?.role === 'admin' ? 'Finance Officer' : 'Racal Driver'}</p>
             </div>
             <button 
                onClick={onLogout}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-msu-maroon hover:text-white transition-all overflow-hidden"
              >
                {user?.avatar ? (
                  <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <LogOut className="w-5 h-5" />
                )}
             </button>
          </div>
        </div>
      )}
    </header>
  );
}
