import { RepeateMusic } from 'iconsax-react';
import React from 'react';
import { useLanguage } from '../providers/LanguageContext';

interface LanguageToggleButtonProps {
  classname?: string;
}

const LanguageToggleButton: React.FC<LanguageToggleButtonProps> = ({classname}) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      className={`py-2 px-4 rounded-full bg-button hover:bg-buttonHover flex flex-row items-center space-x-2 ${classname}`}
      onClick={toggleLanguage}
    >
      <h1 className="text-sm font-regular">
        {language === 'en' ? 'English' : 'Español'}
      </h1>
      <RepeateMusic size="20" color="#FFFFFF" />
    </button>
  );
};

export default LanguageToggleButton;
