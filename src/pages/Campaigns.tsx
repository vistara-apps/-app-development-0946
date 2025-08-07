import React, { useState } from 'react';
import { Plus, Target, Users, Calendar, MoreVertical, Play, Pause } from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  prospects: number;
  replies: number;
  meetings: number;
  createdAt: string;
}

const Campaigns: React.FC = () => {
  const [campaigns] = useState<Campaign[]>([
    {
      id: '1',
      name: 'SaaS Founders Q4',
      status: 'active',
      prospects: 247,
      replies: 12,
      meetings: 5,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Web3 Developer Outreach',
      status: 'active',
      prospects: 180,
      replies: 8,
      meetings: 3,
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      name: 'Enterprise Decision Makers',
      status: 'paused',
      prospects: 95,
      replies: 4,
      meetings: 2,
      createdAt: '2024-01-05'
    }
  ]);

  const getStatusColor = (status: Campaign['status']) => {
    switch (status) {
      case 'active': return 'bg-success text-white';
      case 'paused': return 'bg-warning text-white';
      case 'completed': return 'bg-secondary text-white';
      default: return 'bg-secondary/20 text-secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-secondary">Campaigns</h1>
          <p className="text-secondary/60 mt-2">Manage your outreach campaigns and track performance</p>
        </div>
        <button className="btn btn-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </button>
      </div>

      {/* Campaign Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="card hover:shadow-popover transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Target className="h-5 w-5 text-primary mr-2" />
                <span className={`px-2 py-1 rounded-sm text-xs font-medium ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </span>
              </div>
              <button className="p-1 hover:bg-secondary/5 rounded">
                <MoreVertical className="h-4 w-4 text-secondary/60" />
              </button>
            </div>
            
            <h3 className="text-lg font-semibold text-secondary mb-3">{campaign.name}</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-secondary/60">
                  <Users className="h-4 w-4 mr-2" />
                  Prospects
                </div>
                <span className="font-medium text-secondary">{campaign.prospects}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-secondary/60">
                  <Target className="h-4 w-4 mr-2" />
                  Replies
                </div>
                <span className="font-medium text-secondary">{campaign.replies}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-secondary/60">
                  <Calendar className="h-4 w-4 mr-2" />
                  Meetings
                </div>
                <span className="font-medium text-secondary">{campaign.meetings}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-secondary/10">
              <span className="text-xs text-secondary/60">
                Created {new Date(campaign.createdAt).toLocaleDateString()}
              </span>
              <div className="flex items-center space-x-2">
                {campaign.status === 'active' ? (
                  <button className="p-1 hover:bg-secondary/5 rounded">
                    <Pause className="h-4 w-4 text-secondary/60" />
                  </button>
                ) : (
                  <button className="p-1 hover:bg-secondary/5 rounded">
                    <Play className="h-4 w-4 text-secondary/60" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Create New Campaign Card */}
        <div className="card border-2 border-dashed border-secondary/20 hover:border-primary/50 transition-colors cursor-pointer flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <Plus className="h-12 w-12 text-secondary/40 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-secondary/60 mb-2">Create New Campaign</h3>
            <p className="text-sm text-secondary/40">Start a new outreach campaign</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;