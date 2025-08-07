import React, { useState } from 'react';
import { Search, Filter, Upload, Zap, Star, MapPin, Building, Mail } from 'lucide-react';

interface Prospect {
  id: string;
  name: string;
  title: string;
  company: string;
  email: string;
  location: string;
  intentScore: number;
  tags: string[];
  lastActivity: string;
}

const Prospects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [prospects] = useState<Prospect[]>([
    {
      id: '1',
      name: 'John Smith',
      title: 'CTO',
      company: 'TechCorp Inc.',
      email: 'john@techcorp.com',
      location: 'San Francisco, CA',
      intentScore: 85,
      tags: ['web3', 'saas'],
      lastActivity: '2 hours ago'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      title: 'VP of Engineering',
      company: 'StartupXYZ',
      email: 'sarah@startupxyz.com',
      location: 'Austin, TX',
      intentScore: 72,
      tags: ['hiring', 'series-a'],
      lastActivity: '1 day ago'
    },
    {
      id: '3',
      name: 'Mike Chen',
      title: 'Founder',
      company: 'BlockTech Solutions',
      email: 'mike@blocktech.com',
      location: 'New York, NY',
      intentScore: 91,
      tags: ['web3', 'defi', 'founder'],
      lastActivity: '30 minutes ago'
    }
  ]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-secondary/60';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-success/10';
    if (score >= 60) return 'bg-warning/10';
    return 'bg-secondary/10';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-secondary">Prospects</h1>
          <p className="text-secondary/60 mt-2">Manage and enrich your prospect database</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn btn-outline flex items-center">
            <Upload className="h-4 w-4 mr-2" />
            Import CSV
          </button>
          <button className="btn btn-primary flex items-center">
            <Zap className="h-4 w-4 mr-2" />
            Auto-Scrape
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary/40" />
              <input
                type="text"
                placeholder="Search prospects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10 w-full"
              />
            </div>
          </div>
          <button className="btn btn-outline flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Prospects List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-secondary/10">
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Prospect</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Company</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Intent Score</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Tags</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Last Activity</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Actions</th>
              </tr>
            </thead>
            <tbody>
              {prospects.map((prospect) => (
                <tr key={prospect.id} className="border-b border-secondary/5 hover:bg-secondary/5">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-secondary">{prospect.name}</div>
                      <div className="text-sm text-secondary/60">{prospect.title}</div>
                      <div className="flex items-center text-xs text-secondary/40 mt-1">
                        <Mail className="h-3 w-3 mr-1" />
                        {prospect.email}
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-4">
                    <div>
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2 text-secondary/40" />
                        <span className="font-medium text-secondary">{prospect.company}</span>
                      </div>
                      <div className="flex items-center text-xs text-secondary/40 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {prospect.location}
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className={`inline-flex items-center px-2 py-1 rounded-md text-sm font-medium ${getScoreBg(prospect.intentScore)}`}>
                      <Star className={`h-3 w-3 mr-1 ${getScoreColor(prospect.intentScore)}`} />
                      <span className={getScoreColor(prospect.intentScore)}>{prospect.intentScore}</span>
                    </div>
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {prospect.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  
                  <td className="py-4 px-4">
                    <span className="text-sm text-secondary/60">{prospect.lastActivity}</span>
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="btn btn-outline text-xs py-1 px-2">
                        Enrich
                      </button>
                      <button className="btn btn-primary text-xs py-1 px-2">
                        Add to Sequence
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Prospects;