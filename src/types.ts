export type IndustryKey = 'kmu' | 'pflege' | 'handwerk' | 'kanzlei';

export interface IndustryCase {
  id: IndustryKey;
  title: string;
  subtitle: string;
  badge: string;
  iconName: string;
  problem: string;
  solution: string;
  benefits: string[];
  metrics: { value: string; label: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface DemoQuery {
  id: string;
  industry: IndustryKey;
  question: string;
  answer: string;
  sources: {
    title: string;
    type: string;
    page: string;
    snippet: string;
  }[];
  latencyMs: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  employees: string;
  message: string;
  preferredChannel: 'whatsapp' | 'call' | 'email';
}
