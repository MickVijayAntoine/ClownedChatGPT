import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiMessageSquare, FiImage, FiFileText, FiSettings, FiMenu, FiX, FiMic, FiEye } from 'react-icons/fi';
import { useApiKey } from '@/lib/api/apiKeyContext';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { apiKey } = useApiKey();
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-button') && !target.closest('.nav-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="header shadow-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors mr-6">
            ChatGPT Clone by Antoine
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Accueil
            </Link>
            <Link 
              href="/chat" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/chat') 
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Chat
            </Link>
            <Link 
              href="/image-generation" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/image-generation') 
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Images
            </Link>
            <Link 
              href="/audio-transcription" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/audio-transcription') 
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Audio
            </Link>
            <Link 
              href="/pdf-analysis" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/pdf-analysis') 
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              PDF
            </Link>
            <Link 
              href="/image-analysis" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/image-analysis') 
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Analyse d'images
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <Link 
            href="/settings" 
            className={`api-key-status ${apiKey ? 'configured' : 'not-configured'} hidden md:flex`}
          >
            {apiKey ? 'Clé API configurée' : 'Clé API non configurée'}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg rounded-md mt-2">
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') 
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <FiHome className="mr-3" />
              Accueil
            </div>
          </Link>
          <Link 
            href="/chat" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/chat') 
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <FiMessageSquare className="mr-3" />
              Chat
            </div>
          </Link>
          <Link 
            href="/image-generation" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/image-generation') 
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <FiImage className="mr-3" />
              Images
            </div>
          </Link>
          <Link 
            href="/audio-transcription" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/audio-transcription') 
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <FiMic className="mr-3" />
              Audio
            </div>
          </Link>
          <Link 
            href="/pdf-analysis" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/pdf-analysis') 
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <FiFileText className="mr-3" />
              PDF
            </div>
          </Link>
          <Link 
            href="/image-analysis" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/image-analysis') 
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <FiEye className="mr-3" />
              Analyse d'images
            </div>
          </Link>
          <Link 
            href="/settings" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/settings') 
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <FiSettings className="mr-3" />
              {apiKey ? 'Clé API configurée' : 'Clé API non configurée'}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
