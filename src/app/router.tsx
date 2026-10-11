import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import React from 'react';
import TabsLayout from './(tabs)/layout';
import TodayPage from './(tabs)/today/page';
import NutritionPage from './(tabs)/nutrition/page';
import JourneyPage from './(tabs)/journey/page';
import CoachPage from './(tabs)/coach/page';
import ProfilePage from './(tabs)/profile/page';
import MovementPage from './(tabs)/movement/page';
import { FoodVisualSheetTestSurface } from '../features/nutrition/visuals/FoodVisualSheetTestSurface';
import OnboardingLayout from './(onboarding)/layout';
import OnboardingPage from './(onboarding)/page';
import { useAppStore } from '../store';

// A simple auth/onboarding guard
function RequireProfile({ children }: { children: React.ReactNode }) {
  const { userProfile } = useAppStore();
  
  if (!userProfile?.onboardingCompleted) {
    return <Navigate to="/onboarding" replace />;
  }
  
  return <>{children}</>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireProfile>
        <TabsLayout />
      </RequireProfile>
    ),
    children: [
      {
        index: true,
        element: <TodayPage />,
      },
      {
        path: 'nutrition',
        element: <NutritionPage />,
      },
      {
        path: 'journey',
        element: <JourneyPage />,
      },
      {
        path: 'coach',
        element: <CoachPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'movement',
        element: <MovementPage />,
      },
    ],
  },
  {
    path: '/food-visual-test',
    element: <FoodVisualSheetTestSurface />,
  },
  {
    path: '/onboarding',
    element: <OnboardingLayout />,
    children: [
      {
        index: true,
        element: <OnboardingPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
