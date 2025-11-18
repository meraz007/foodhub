import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'new' | 'sale' | 'hot' | 'limited' | 'default';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    new: 'bg-success text-white',
    sale: 'bg-accent text-white',
    hot: 'bg-red-500 text-white',
    limited: 'bg-purple-500 text-white',
    default: 'bg-gray-200 text-gray-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}


