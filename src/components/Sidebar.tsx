import { LayoutDashboard, Wallet, AlertTriangle, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'collection', label: 'Collection Hub', icon: Wallet },
    { id: 'compliance', label: 'Compliance', icon: AlertTriangle },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-6">
        <h2 className="text-[10px] uppercase tracking-widest text-msu-maroon font-bold mb-4">RacalTrack Admin</h2>
        <p className="text-xs text-gray-500 mb-8">Institutional Portal</p>
        
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all text-sm font-medium",
                activeTab === item.id 
                  ? "bg-msu-maroon text-white shadow-md" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-msu-maroon"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-100 italic text-[10px] text-gray-400">
         v2.4.0 • System Secure
      </div>
    </aside>
  );
}
