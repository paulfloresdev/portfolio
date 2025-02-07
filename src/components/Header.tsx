import React, { useState } from 'react';
import CircularButton from './CircularButton';
import { CloseCircle, HambergerMenu, RepeateMusic } from 'iconsax-react'; // Asegúrate de importar Close
import HeaderOption from './HeaderOption';
import { useLanguage } from '../providers/LanguageContext';
import LanguageToggleButton from './LanguageToggleButton';

interface HeaderProps {
  page: number;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage(); // Usamos el contexto de idioma

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      {/* Header */}
      <div className="mb-8 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center">
          <a href="/" className="flex flex-row justify-start items-center">
            <img src="/assets/icons/favicon.png" alt="" className="w-favicon-mobile md:w-favicon-desktop" />
            <h1 className="text-lg mr-4 font-bold hover:text-primary">paulfloresdev</h1>
          </a>
          <LanguageToggleButton classname='hidden md:flex'/>
        </div>

        <div className="flex flex-row items-center space-x-8">
          <HeaderOption label={language === 'en' ? 'Home' : 'Inicio'} href="" focus={page === 0} classname='hidden md:block'/>
          <HeaderOption label={language === 'en' ? 'Projects' : 'Proyectos'} href="" focus={page === 1} classname='hidden md:block'/>
          {/* Hamburger icon */}
          <HambergerMenu
            size="24"
            color="#FFFFFF"
            className="md:hidden cursor-pointer"
            onClick={toggleMenu} // Cambia el estado al hacer clic
          />
          <CircularButton onClick={() => {}} type="solid" classname='hidden md:block'>
            {language === 'en' ? 'Contact me' : 'Contáctame'}
          </CircularButton>
        </div>
    </div>

    {/* Mobile menu */}
    {isMenuOpen && (
    <div className={`md:hidden fixed inset-0 bg-canvas bg-opacity-60 bg-opacity-transition-300 z-50 flex flex-col items-center space-y-4 py-4 mt-28`}>
        <HeaderOption label={language === 'en' ? 'Home' : 'Inicio'} href="" focus={page === 0} />
        <HeaderOption label={language === 'en' ? 'Projects' : 'Proyectos'} href="" focus={page === 1} />
        <LanguageToggleButton />
    </div>
    )}

    </header>
  );
};

export default Header;
