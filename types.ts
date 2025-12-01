import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface ComparisonItem {
  criteria: string;
  guard: string;
  remote: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  image: string;
  rating: number;
}