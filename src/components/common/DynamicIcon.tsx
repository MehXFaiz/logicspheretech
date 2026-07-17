'use client';

import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = 'w-6 h-6',
  size = 24,
}) => {
  // Safe lookup from Lucide icons
  const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string; size?: number }>>)[name] || Icons.HelpCircle;
  return <IconComponent className={className} size={size} />;
};
