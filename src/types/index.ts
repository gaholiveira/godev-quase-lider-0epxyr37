export interface NavItem {
  href: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface ProductItem {
  name: string;
  description: string;
  price?: string;
  imageUrl?: string;
  features?: string[];
}

export interface SocialProofItem {
  metric: string;
  label: string;
}

export interface MentorInfo {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  achievements: {
    icon: React.ReactNode;
    metric: string;
    label: string;
  }[];
}

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}