import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { 
  Home, 
  Target, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Menu,
  X,
  Plus,
  Zap
} from 'lucide-react';
import AuthEntry from './AuthEntry';
import { useSupabase } from '../context/SupabaseContext';
import { Button, LoadingSpinner } from './ui';

interface AppShellProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Campaigns', href: '/campaigns', icon: Target },
  { name: 'Prospects', href: '/prospects', icon: Users },
  { name: 'Sequences', href: '/sequences', icon: MessageSquare },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, loading } = useSupabase();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading LeadForge Base..." />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
        <AuthEntry />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-surface shadow-xl border-r border-secondary/10 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-secondary/10 bg-gradient-subtle">
          <div className="flex items-center">
            <div className="p-2 bg-gradient-primary rounded-lg mr-3">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold gradient-text">LeadForge Base</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary/5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-primary text-white shadow-button'
                        : 'text-secondary hover:bg-secondary/5 hover:text-primary'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className={`h-5 w-5 mr-3 transition-colors ${
                      isActive ? 'text-white' : 'text-secondary/60 group-hover:text-primary'
                    }`} />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-surface shadow-sm border-b border-secondary/10 backdrop-blur-sm bg-surface/95">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-secondary/5 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
              <Button asChild className="ml-4">
                <Link to="/campaigns">
                  <Plus className="h-4 w-4 mr-2" />
                  New Campaign
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <ConnectButton />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AppShell;
