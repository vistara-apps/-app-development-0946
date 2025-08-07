import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, MessageSquare, Calendar, TrendingUp, Plus } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { name: 'Active Campaigns', value: '3', icon: Target, change: '+12%' },
    { name: 'Total Prospects', value: '1,247', icon: Users, change: '+19%' },
    { name: 'Sequences Running', value: '8', icon: MessageSquare, change: '+7%' },
    { name: 'Meetings Booked', value: '23', icon: Calendar, change: '+31%' },
  ];

  const recentActivity = [
    { type: 'campaign', message: 'New prospects added to "SaaS Founders Q4"', time: '2 minutes ago' },
    { type: 'meeting', message: 'Meeting booked with John Smith from TechCorp', time: '1 hour ago' },
    { type: 'sequence', message: 'Email sequence "Cold Outreach v2" completed', time: '3 hours ago' },
    { type: 'enrichment', message: '150 prospects enriched with intent signals', time: '6 hours ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-secondary">Dashboard</h1>
          <p className="text-secondary/60 mt-2">Monitor your outreach performance and pipeline</p>
        </div>
        <Link to="/campaigns" className="btn btn-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary/60">{stat.name}</p>
                <p className="text-2xl font-semibold text-secondary mt-2">{stat.value}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-success mr-1" />
              <span className="text-sm text-success font-medium">{stat.change}</span>
              <span className="text-sm text-secondary/60 ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-secondary mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link to="/campaigns" className="flex items-center p-3 rounded-md border border-secondary/10 hover:bg-secondary/5 transition-colors">
              <Target className="h-5 w-5 text-primary mr-3" />
              <span className="font-medium">Create Campaign</span>
            </Link>
            <Link to="/prospects" className="flex items-center p-3 rounded-md border border-secondary/10 hover:bg-secondary/5 transition-colors">
              <Users className="h-5 w-5 text-accent mr-3" />
              <span className="font-medium">Import Prospects</span>
            </Link>
            <Link to="/sequences" className="flex items-center p-3 rounded-md border border-secondary/10 hover:bg-secondary/5 transition-colors">
              <MessageSquare className="h-5 w-5 text-success mr-3" />
              <span className="font-medium">Build Sequence</span>
            </Link>
          </div>
        </div>

        <div className="card lg:col-span-2">
          <h3 className="text-lg font-semibold text-secondary mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-md hover:bg-secondary/5 transition-colors">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-secondary">{activity.message}</p>
                  <p className="text-xs text-secondary/60 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary mb-4">Performance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">4.2%</div>
            <div className="text-sm text-secondary/60">Reply Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">12.8%</div>
            <div className="text-sm text-secondary/60">Meeting Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">$1,247</div>
            <div className="text-sm text-secondary/60">Pipeline Value</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;