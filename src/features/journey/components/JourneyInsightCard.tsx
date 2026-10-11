import { motion } from 'motion/react';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { InsightCard } from '../services/JourneyInsightService';
import { Activity, Apple, Leaf, Scale } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

interface JourneyInsightCardProps {
  key?: any;
  card: InsightCard;
  onAction?: (actionRoute: string) => void;
}

export function JourneyInsightCard({ card, onAction }: JourneyInsightCardProps) {
  const Icon = card.category === 'movement' ? Activity 
    : card.category === 'nutrition' ? Apple 
    : card.category === 'wellness' ? Leaf 
    : card.category === 'body' ? Scale 
    : Activity;

  const colorClass = card.category === 'movement' ? 'text-orange-600 bg-orange-50'
    : card.category === 'nutrition' ? 'text-green-600 bg-green-50'
    : card.category === 'wellness' ? 'text-teal-700 bg-teal-50'
    : 'text-primary-700 bg-primary-50';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-5 border border-surface-200/50 shadow-sm flex flex-col gap-3"
    >
      <div className="flex items-center gap-3">
        <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center", colorClass)}>
          <Icon size={20} />
        </div>
        <h3 className={cn(tokens.typography.h3, "text-primary-900 m-0")}>{card.title}</h3>
      </div>
      <p className={cn(tokens.typography.body, "text-surface-600 leading-relaxed")}>
        {card.description}
      </p>
      {card.action && (
        <div className="mt-2">
          <Button variant="outline" size="sm" onClick={() => onAction?.(card.action!.route)}>
            {card.action.label}
          </Button>
        </div>
      )}
    </motion.div>
  );
}
