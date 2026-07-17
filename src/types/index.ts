export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  popular?: boolean;
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'Cloud & DevOps' | 'Design';
  iconColor: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Web App' | 'Mobile App' | 'AI & SaaS' | 'E-Commerce';
  description: string;
  image: string;
  technologies: string[];
  liveDemoUrl: string;
  githubUrl: string;
  metrics: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  badge?: string;
  popular?: boolean;
  features: string[];
  deliveryTime: string;
  supportLevel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  icon: string;
}
