import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Mail, Calendar, DollarSign } from 'lucide-react';

const Analytics: React.FC = () => {
  const performanceData = [
    { name: 'Week 1', emails: 120, replies: 8, meetings: 2 },
    { name: 'Week 2', emails: 150, replies: 12, meetings: 4 },
    { name: 'Week 3', emails: 180, replies: 15, meetings: 6 },
    { name: 'Week 4', emails: 200, replies: 18, meetings: 8 },
  ];

  const conversionData = [
    { name: 'Jan', rate: 3.2 },
    { name: 'Feb', rate: 4.1 },
    { name: 'Mar', rate: 3.8 },
    { name: 'Apr', rate: 4.5 },
    { name: 'May', rate: 5.2 },
    { name: 'Jun', rate: 4.8 },
  ];

  const metrics = [
    { name: 'Total Emails Sent', value: '2,847', change: '+12%', icon: Mail, color: 'text-primary' },
    { name: 'Reply Rate', value: '4.2%', change: '+0.8%', icon: TrendingUp, color: 'text-success' },
    { name: 'Meetings Booked', value: '23', change: '+31%', icon: Calendar, color: 'text-accent' },
    { name: 'Pipeline Value', value: '$12,400', change: '+28%', icon: DollarSign, color: 'text-warning' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold text-secondary">Analytics</h1>
        <p className="text-secondary/60 mt-2">Track your outreach performance and ROI</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary/60">{metric.name}</p>
                <p className="text-2xl font-semibold text-secondary mt-2">{metric.value}</p>
              </div>
              <div className={`p-3 bg-opacity-10 rounded-lg ${metric.color.replace('text-', 'bg-')}/10`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-success mr-1" />
              <span className="text-sm text-success font-medium">{metric.change}</span>
              <span className="text-sm text-secondary/60 ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-secondary mb-6">Weekly Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Bar dataKey="emails" fill="hsl(257, 84%, 56%)" />
              <Bar dataKey="replies" fill="hsl(190, 80%, 45%)" />
              <Bar dataKey="meetings" fill="hsl(140, 70%, 35%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Conversion Rate Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-secondary mb-6">Reply Rate Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Line type="monotone" dataKey="rate" stroke="hsl(140, 70%, 35%)" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary mb-6">Campaign Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-secondary/10">
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Campaign</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Prospects</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Sent</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Replies</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Reply Rate</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Meetings</th>
                <th className="text-left py-3 px-4 font-medium text-secondary/60">Cost per Meeting</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-secondary/5">
                <td className="py-4 px-4 font-medium text-secondary">SaaS Founders Q4</td>
                <td className="py-4 px-4 text-secondary">247</td>
                <td className="py-4 px-4 text-secondary">198</td>
                <td className="py-4 px-4 text-secondary">12</td>
                <td className="py-4 px-4 text-success font-medium">6.1%</td>
                <td className="py-4 px-4 text-secondary">5</td>
                <td className="py-4 px-4 text-secondary">$24.80</td>
              </tr>
              <tr className="border-b border-secondary/5">
                <td className="py-4 px-4 font-medium text-secondary">Web3 Developer Outreach</td>
                <td className="py-4 px-4 text-secondary">180</td>
                <td className="py-4 px-4 text-secondary">142</td>
                <td className="py-4 px-4 text-secondary">8</td>
                <td className="py-4 px-4 text-success font-medium">5.6%</td>
                <td className="py-4 px-4 text-secondary">3</td>
                <td className="py-4 px-4 text-secondary">$31.33</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;