import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppShell from './components/AppShell';
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Prospects from './pages/Prospects';
import Sequences from './pages/Sequences';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import { SupabaseProvider } from './context/SupabaseContext';

function App() {
  return (
    <SupabaseProvider>
      <Router>
        <AppShell>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/prospects" element={<Prospects />} />
            <Route path="/sequences" element={<Sequences />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AppShell>
      </Router>
    </SupabaseProvider>
  );
}

export default App;