import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl shadow-blue-200/20 min-h-[600px] flex flex-col justify-center ${className}`}>
      {children}
    </div>
  );
};
