import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Save, Key, Mail, Calendar, CreditCard } from 'lucide-react';
import { usePaymentContext } from '../hooks/usePaymentContext';

const Settings: React.FC = () => {
  const [plan, setPlan] = useState('starter');
  const [emailProvider, setEmailProvider] = useState('sendgrid');
  const [openaiKey, setOpenaiKey] = useState('');
  const [sendgridKey, setSendgridKey] = useState('');
  const [paid, setPaid] = useState(false);
  
  const { createSession } = usePaymentContext();

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$19/mo',
      features: ['500 enrichments', '1 active sequence', '1 calendar integration']
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$79/mo',
      features: ['5k enrichments', '5 sequences', '3 calendar integrations']
    }
  ];

  const handleUpgrade = async () => {
    try {
      await createSession('$79');
      setPaid(true);
      setPlan('pro');
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold text-secondary">Settings</h1>
        <p className="text-secondary/60 mt-2">Manage your account, integrations, and billing</p>
      </div>

      {/* Subscription Plan */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center">
          <CreditCard className="h-5 w-5 mr-2" />
          Subscription Plan
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {plans.map((planOption) => (
            <div
              key={planOption.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                plan === planOption.id
                  ? 'border-primary bg-primary/5'
                  : 'border-secondary/20 hover:border-primary/50'
              }`}
              onClick={() => setPlan(planOption.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-secondary">{planOption.name}</h4>
                <span className="text-lg font-bold text-primary">{planOption.price}</span>
              </div>
              <ul className="text-sm text-secondary/60 space-y-1">
                {planOption.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {plan === 'pro' && !paid && (
          <button onClick={handleUpgrade} className="btn btn-primary">
            Upgrade to Pro with USDC
          </button>
        )}
      </div>

      {/* Wallet Connection */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary mb-4">Wallet Connection</h3>
        <p className="text-secondary/60 mb-4">Connect your wallet for native USDC payments on Base</p>
        <ConnectButton />
      </div>

      {/* API Keys */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center">
          <Key className="h-5 w-5 mr-2" />
          API Keys
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              OpenAI API Key
            </label>
            <input
              type="password"
              value={openaiKey}
              onChange={(e) => setOpenaiKey(e.target.value)}
              placeholder="sk-..."
              className="input w-full"
            />
            <p className="text-xs text-secondary/60 mt-1">
              Used for AI-powered personalization and sequence generation
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              SendGrid API Key
            </label>
            <input
              type="password"
              value={sendgridKey}
              onChange={(e) => setSendgridKey(e.target.value)}
              placeholder="SG...."
              className="input w-full"
            />
            <p className="text-xs text-secondary/60 mt-1">
              Required for sending outbound emails
            </p>
          </div>
        </div>
      </div>

      {/* Email Provider */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center">
          <Mail className="h-5 w-5 mr-2" />
          Email Provider
        </h3>
        
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="emailProvider"
              value="sendgrid"
              checked={emailProvider === 'sendgrid'}
              onChange={(e) => setEmailProvider(e.target.value)}
              className="mr-3"
            />
            <span className="text-secondary">SendGrid</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="emailProvider"
              value="postmark"
              checked={emailProvider === 'postmark'}
              onChange={(e) => setEmailProvider(e.target.value)}
              className="mr-3"
            />
            <span className="text-secondary">Postmark</span>
          </label>
        </div>
      </div>

      {/* Calendar Integration */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Calendar Integration
        </h3>
        
        <div className="space-y-3">
          <button className="btn btn-outline flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Connect Google Calendar
          </button>
          <button className="btn btn-outline flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Connect Microsoft Calendar
          </button>
        </div>
      </div>

      {/* Save Settings */}
      <div className="flex justify-end">
        <button className="btn btn-primary flex items-center">
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;