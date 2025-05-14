import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { toggleTheme } from '../store/slices/themeSlice';

export const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector(state => state.theme);
  
  return (
    <button
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() => dispatch(toggleTheme())}
    >
      {mode === 'light' ? (
        <Moon className="h-5 w-5 text-gray-800" />
      ) : (
        <Sun className="h-5 w-5 text-gray-200" />
      )}
    </button>
  );
};