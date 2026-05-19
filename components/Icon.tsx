'use client';
import * as Lucide from 'lucide-react';

export function Icon({ name, className = '', size = 20, style }: { name: string; className?: string; size?: number; style?: React.CSSProperties }) {
  const C = (Lucide as any)[name] || Lucide.Circle;
  return <C className={className} size={size} style={style} />;
}
