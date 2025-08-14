'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function SimpleLanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'vi', label: 'VIE' },
    { code: 'en', label: 'ENG' },
    { code: 'ja', label: 'JPN' }
  ];

  const currentIndex = languages.findIndex(lang => lang.code === currentLanguage);
  
  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLanguage = languages[nextIndex];
    changeLanguage(nextLanguage.code);
  };

  const currentLabel = languages[currentIndex]?.label || 'ENG';

  return (
    <button
      onClick={handleClick}
      className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900  text-[10px] font-bold text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-neutral-100 transition-colors duration-200 cursor-pointer"
      title={`Switch language (${currentLabel})`}
    >
      {currentLabel}
    </button>
  );
}