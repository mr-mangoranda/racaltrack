import { motion } from 'motion/react';
import { CollectionHubView } from './CollectionHubView';
import { Anomaly } from '../../types';

export function AdminDashboardView() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 font-sans">Institutional Overview</h2>
        <p className="text-gray-500 mt-1">Welcome back. Here is what's happening with MSU Racal operations today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
               <svg className="w-48 h-48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2v20M2 12h20" />
               </svg>
            </div>
            <div>
               <p className="text-[10px] font-black uppercase text-msu-maroon tracking-[0.2em] mb-4">Financial Health</p>
               <h3 className="text-4xl font-black text-gray-900 mb-2">Steady Growth</h3>
               <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                  Revenue is up 12% compared to last week. Driver compliance has improved by 4% across all major routes.
               </p>
            </div>
            <div className="flex gap-12 mt-8">
               <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Weekly Volume</p>
                  <p className="text-2xl font-bold text-gray-900">8,402</p>
               </div>
               <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Efficiency</p>
                  <p className="text-2xl font-bold text-gray-900">92%</p>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-msu-maroon rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between">
               <p className="text-[10px] font-black uppercase tracking-widest opacity-60">System Status</p>
               <div>
                  <h4 className="text-2xl font-bold">Operational</h4>
                  <p className="text-xs opacity-80 mt-1">Next backup in 4h 20m</p>
               </div>
            </div>
            <div className="bg-msu-gold rounded-2xl p-6 text-msu-maroon shadow-lg flex flex-col justify-between">
               <p className="text-[10px] font-black uppercase tracking-widest opacity-60 text-msu-maroon">Active Routes</p>
               <div>
                  <h4 className="text-2xl font-bold">14 Lines</h4>
                  <p className="text-xs font-bold opacity-80 mt-1">MSU Main Circuit leads</p>
               </div>
            </div>
         </div>
      </div>

      <CollectionHubView />
    </div>
  );
}
