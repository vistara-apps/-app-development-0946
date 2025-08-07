import React, { useState } from 'react';
import { Plus, Play, Pause, MessageSquare, Mail, Linkedin, Calendar } from 'lucide-react';

interface SequenceStep {
  id: string;
  type: 'email' | 'linkedin' | 'wait';
  channel: string;
  delay: number;
  template: string;
}

interface Sequence {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'draft';
  steps: SequenceStep[];
  prospects: number;
  sent: number;
  replies: number;
}

const Sequences: React.FC = () => {
  const [sequences] = useState<Sequence[]>([
    {
      id: '1',
      name: 'Cold Outreach - SaaS Founders',
      status: 'active',
      steps: [
        { id: '1', type: 'email', channel: 'email', delay: 0, template: 'Initial Outreach' },
        { id: '2', type: 'wait', channel: 'wait', delay: 3, template: '' },
        { id: '3', type: 'linkedin', channel: 'linkedin', delay: 0, template: 'LinkedIn Follow-up' },
      ],
      prospects: 150,
      sent: 120,
      replies: 8
    },
    {
      id: '2',
      name: 'Web3 Developer Sequence',
      status: 'active',
      steps: [
        { id: '1', type: 'email', channel: 'email', delay: 0, template: 'Developer Intro' },
        { id: '2', type: 'wait', channel: 'wait', delay: 5, template: '' },
        { id: '3', type: 'email', channel: 'email', delay: 0, template: 'Technical Follow-up' },
      ],
      prospects: 85,
      sent: 65,
      replies: 5
    }
  ]);

  const getStatusColor = (status: Sequence['status']) => {
    switch (status) {
      case 'active': return 'bg-success text-white';
      case 'paused': return 'bg-warning text-white';
      case 'draft': return 'bg-secondary/20 text-secondary';
      default: return 'bg-secondary/20 text-secondary';
    }
  };

  const getStepIcon = (type: SequenceStep['type']) => {
    switch (type) {
      case 'email': return Mail;
      case 'linkedin': return Linkedin;
      case 'wait': return Calendar;
      default: return MessageSquare;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-secondary">Sequences</h1>
          <p className="text-secondary/60 mt-2">Build and manage multi-channel outreach sequences</p>
        </div>
        <button className="btn btn-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          New Sequence
        </button>
      </div>

      {/* Sequences Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sequences.map((sequence) => (
          <div key={sequence.id} className="card">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-sm text-xs font-medium ${getStatusColor(sequence.status)}`}>
                {sequence.status}
              </span>
              <div className="flex items-center space-x-2">
                {sequence.status === 'active' ? (
                  <button className="p-2 hover:bg-secondary/5 rounded">
                    <Pause className="h-4 w-4 text-secondary/60" />
                  </button>
                ) : (
                  <button className="p-2 hover:bg-secondary/5 rounded">
                    <Play className="h-4 w-4 text-secondary/60" />
                  </button>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-secondary mb-4">{sequence.name}</h3>

            {/* Sequence Steps */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-secondary/60 mb-3">Sequence Steps</h4>
              <div className="space-y-2">
                {sequence.steps.map((step, index) => {
                  const StepIcon = getStepIcon(step.type);
                  return (
                    <div key={step.id} className="flex items-center space-x-3 p-2 bg-secondary/5 rounded-md">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                        <StepIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        {step.type === 'wait' ? (
                          <span className="text-sm text-secondary/60">Wait {step.delay} days</span>
                        ) : (
                          <span className="text-sm font-medium text-secondary">{step.template}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-secondary/10">
              <div className="text-center">
                <div className="text-lg font-semibold text-secondary">{sequence.prospects}</div>
                <div className="text-xs text-secondary/60">Prospects</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-secondary">{sequence.sent}</div>
                <div className="text-xs text-secondary/60">Sent</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-secondary">{sequence.replies}</div>
                <div className="text-xs text-secondary/60">Replies</div>
              </div>
            </div>
          </div>
        ))}

        {/* Create New Sequence Card */}
        <div className="card border-2 border-dashed border-secondary/20 hover:border-primary/50 transition-colors cursor-pointer flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Plus className="h-12 w-12 text-secondary/40 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-secondary/60 mb-2">Create New Sequence</h3>
            <p className="text-sm text-secondary/40">Build a multi-channel outreach sequence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sequences;