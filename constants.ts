import { ShieldCheck, Eye, Bell, Lock, FileText, Clock, Zap } from 'lucide-react';
import { Feature, PricingPlan, ComparisonItem } from './types';

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: '24/7 or Night-Time Monitoring',
    description: 'Flexible coverage options to suit your business hours and security needs.',
    icon: Clock,
  },
  {
    id: '2',
    title: 'Real-Time Alerts',
    description: 'Instant notifications via WhatsApp, Email, or Phone when suspicious activity is detected.',
    icon: Bell,
  },
  {
    id: '3',
    title: 'Trained Operators',
    description: 'Our monitoring specialists are rigorously trained to detect and respond to threats immediately.',
    icon: Eye,
  },
  {
    id: '4',
    title: 'Confidential & Secure',
    description: 'Your feed is monitored securely with strict privacy protocols in place.',
    icon: Lock,
  },
  {
    id: '5',
    title: 'Detailed Activity Reports',
    description: 'Receive daily or weekly logs of all monitored activities for your records.',
    icon: FileText,
  },
  {
    id: '6',
    title: 'Rapid Setup',
    description: 'Already have cameras? We can start monitoring your premises within 24 hours.',
    icon: Zap,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$299',
    description: 'Essential protection for closing hours.',
    features: [
      'Night-time monitoring (10 hrs)',
      'Real-time Alerting',
      'Weekly Reports',
      'Email Support'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$499',
    description: 'Full day coverage for high-traffic areas.',
    features: [
      '24/7 Monitoring',
      'Real-time Alerting',
      'WhatsApp & Email Alerts',
      'Weekly Reports',
      'Priority Support'
    ],
    highlight: true
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: '$699',
    description: 'Comprehensive security with detailed insights.',
    features: [
      '24/7 Monitoring',
      'Daily Activity Reports',
      'Instant Phone Alerts',
      'Dedicated Account Manager',
      'Video Incident Retrieval'
    ]
  },
  {
    id: 'custom',
    name: 'Custom Plan',
    price: 'Custom',
    description: 'Tailored solutions for large enterprises.',
    features: [
      'Multi-location Monitoring',
      'Custom Reporting Schedules',
      'Integration with specific hardware',
      'Volume Discounts'
    ]
  }
];

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    criteria: 'Monthly Cost',
    guard: '$3,000+ / month salary',
    remote: 'From $299 / month',
  },
  {
    criteria: 'Reporting',
    guard: 'No standardized reports',
    remote: 'Daily/Weekly detailed reports',
  },
  {
    criteria: 'Reliability',
    guard: 'Risk of sleep, breaks, mistakes',
    remote: 'Multiple operators, AI-assisted',
  },
  {
    criteria: 'Availability',
    guard: 'Limited shift hours',
    remote: '24/7 Continuous Availability',
  },
];

export const CONTACT_INFO = {
  whatsapp: '+92 311 7269475',
  email: 'shakirriaz@visionsdigi.com',
  location: 'Pakistan Based — Operated Remotely',
  companyName: 'Remote Security Solutions',
};