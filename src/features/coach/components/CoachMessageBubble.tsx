import { motion } from 'motion/react';
import { cn } from '../../../design-system/utils';
import { tokens } from '../../../design-system/tokens';
import { CoachMessage, CoachAction } from '../models';
import { Button } from '../../../components/ui/Button';

interface CoachMessageBubbleProps {
  key?: any;
  message: CoachMessage;
  onActionClick?: (action: CoachAction) => void;
}

export function CoachMessageBubble({ message, onActionClick }: CoachMessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex flex-col w-full mb-6",
        isUser ? "items-end" : "items-start"
      )}
    >
      <div 
        className={cn(
          "max-w-[85%] rounded-2xl px-5 py-3.5 leading-relaxed text-sm",
          isUser 
            ? "bg-primary-900 text-surface-50 rounded-tl-none shadow-sm" 
            : "bg-white text-primary-900 rounded-tr-none border border-surface-200/60 shadow-sm"
        )}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>
        
        {!isUser && message.action && (
          <div className="mt-4 pt-4 border-t border-surface-100">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-primary-700 border-primary-200 hover:bg-primary-50 font-bold"
              onClick={() => onActionClick?.(message.action!)}
            >
              {message.action.label}
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
