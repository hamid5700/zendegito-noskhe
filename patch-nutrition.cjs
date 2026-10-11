const fs = require('fs');
let content = fs.readFileSync('src/app/(tabs)/nutrition/page.tsx', 'utf-8');

// Add state
content = content.replace(
  'const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);',
  `const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);`
);

// Add button to header
content = content.replace(
  '<header className="mb-8 flex justify-between items-center">',
  `<header className="mb-8 flex justify-between items-center">
        <button 
          onClick={() => setIsPreferencesOpen(true)}
          className="w-10 h-10 flex items-center justify-center bg-surface-100 rounded-full text-surface-600 hover:bg-surface-200 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>`
);

// Add component at bottom
content = content.replace(
  '      <MealRecommendationSheet',
  `      <FoodPreferencesSheet isOpen={isPreferencesOpen} onClose={() => setIsPreferencesOpen(false)} />
      <MealRecommendationSheet`
);

fs.writeFileSync('src/app/(tabs)/nutrition/page.tsx', content);
