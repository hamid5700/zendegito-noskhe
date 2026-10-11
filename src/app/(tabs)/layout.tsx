import { Outlet, NavLink } from 'react-router-dom';
import { Home, Apple, Target, MessageSquare, User } from 'lucide-react';
import { cn } from '../../design-system/utils';

export default function TabsLayout() {
  const navItems = [
    { to: '/', icon: Home, label: 'امروز' },
    { to: '/nutrition', icon: Apple, label: 'تغذیه' },
    { to: '/journey', icon: Target, label: 'مسیر' },
    { to: '/coach', icon: MessageSquare, label: 'مربی' },
    { to: '/profile', icon: User, label: 'پروفایل' },
  ];

  return (
    <div className="flex flex-col h-screen w-full bg-surface-50 relative">
      <main className="flex-1 overflow-y-auto pb-24">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 w-full bg-surface-50/90 backdrop-blur-xl border-t border-surface-200/40 pb-safe pt-2 px-6 flex justify-around items-center z-50 shadow-[0_-4px_24px_-8px_rgba(26,24,23,0.03)]">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center w-16 h-14 gap-1 transition-all duration-300',
                isActive ? 'text-primary-900 scale-105' : 'text-surface-400 hover:text-primary-600'
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-[22px] h-[22px] transition-all duration-300", 
                  isActive ? "stroke-[2]" : "stroke-[1.5]"
                )} />
                <span className={cn(
                  "text-[10px] transition-all duration-300",
                  isActive ? "font-bold" : "font-medium"
                )}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
