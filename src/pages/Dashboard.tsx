import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, MessageSquare, Calendar, TrendingUp, Plus, ArrowUpRight, Activity } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '../components/ui';

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold gradient-text">Dashboard</h1>
          <p className="text-secondary/60 mt-2 text-lg">Monitor your outreach performance and pipeline</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Activity className="h-4 w-4 mr-2" />
            View Reports
          </Button>
          <Button asChild>
            <Link to="/campaigns">
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.name} className={`animate-slide-up hover:scale-[1.02] transition-transform duration-200`} style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-secondary/60 mb-1">{stat.name}</p>
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex items-center bg-success/10 rounded-full px-2 py-1">
                  <TrendingUp className="h-3 w-3 text-success mr-1" />
                  <span className="text-xs text-success font-semibold">{stat.change}</span>
                </div>
                <span className="text-xs text-secondary/60 ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/campaigns" className="flex items-center p-4 rounded-lg border border-secondary/10 hover:bg-gradient-subtle hover:border-primary/20 transition-all duration-200 group">
              <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-secondary">Create Campaign</span>
                <p className="text-xs text-secondary/60">Start a new outreach campaign</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-secondary/40 group-hover:text-primary transition-colors" />
            </Link>
            <Link to="/prospects" className="flex items-center p-4 rounded-lg border border-secondary/10 hover:bg-gradient-subtle hover:border-accent/20 transition-all duration-200 group">
              <div className="p-2 bg-accent/10 rounded-lg mr-3 group-hover:bg-accent/20 transition-colors">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-secondary">Import Prospects</span>
                <p className="text-xs text-secondary/60">Add new prospects to your pipeline</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-secondary/40 group-hover:text-accent transition-colors" />
            </Link>
            <Link to="/sequences" className="flex items-center p-4 rounded-lg border border-secondary/10 hover:bg-gradient-subtle hover:border-success/20 transition-all duration-200 group">
              <div className="p-2 bg-success/10 rounded-lg mr-3 group-hover:bg-success/20 transition-colors">
                <MessageSquare className="h-5 w-5 text-success" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-secondary">Build Sequence</span>
                <p className="text-xs text-secondary/60">Create automated email sequences</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-secondary/40 group-hover:text-success transition-colors" />
            </Link>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/5 transition-colors group">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 group-hover:bg-accent transition-colors"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">{activity.message}</p>
                  <div className="flex items-center mt-1">
                    <Badge variant="secondary" className="mr-2 text-xs">
                      {activity.type}
                    </Badge>
                    <p className="text-xs text-secondary/60">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-200">4.2%</div>
                <div className="absolute -inset-2 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="text-sm font-medium text-secondary/80">Reply Rate</div>
              <div className="text-xs text-secondary/60 mt-1">+0.8% from last week</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-200">12.8%</div>
                <div className="absolute -inset-2 bg-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="text-sm font-medium text-secondary/80">Meeting Rate</div>
              <div className="text-xs text-secondary/60 mt-1">+2.1% from last week</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold text-success mb-2 group-hover:scale-110 transition-transform duration-200">$1,247</div>
                <div className="absolute -inset-2 bg-success/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="text-sm font-medium text-secondary/80">Pipeline Value</div>
              <div className="text-xs text-secondary/60 mt-1">+$312 from last week</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
