import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Moon, Sun, Globe } from 'lucide-react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Inventions from './components/sections/Inventions';
import AIChat from './components/sections/AIChat';
import ParticleBackground from './components/ui/ParticleBackground';
import { PORTFOLIO_OWNER, UI_TRANSLATIONS } from './constants';
import { Language } from './types';

// --- CONTEXTS ---
interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType>({ isDark: true, toggleTheme: () => {} });

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}
export const LanguageContext = createContext<LanguageContextType>({ 
    language: 'fr', 
    setLanguage: () => {},
    t: (key) => key 
});

const App: React.FC = () => {
  // --- STATE ---
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState<Language>('fr');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // --- EFFECTS ---
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
  }, [isDark]);

  // --- HELPERS ---
  const toggleTheme = () => setIsDark(!isDark);
  
  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = UI_TRANSLATIONS;
    for (const key of keys) {
        if (current[key] === undefined) return path;
        current = current[key];
    }
    return current[language] || path;
  };

  // --- SCROLL ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { href: "#", label: t('nav.home') },
    { href: "#about", label: t('nav.about') },
    { href: "#education", label: t('nav.education') },
    { href: "#projects", label: t('nav.projects') },
    { href: "#skills", label: t('nav.skills') },
    { href: "#contact", label: t('nav.contact') },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
      { code: 'fr', label: 'Français', flag: '🇫🇷' },
      { code: 'en', label: 'English', flag: '🇺🇸' },
      { code: 'es', label: 'Español', flag: '🇪🇸' },
      { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
      { code: 'jp', label: '日本語', flag: '🇯🇵' },
      { code: 'cn', label: '中文', flag: '🇨🇳' },
  ];

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-blue-500 selection:text-white ${
                isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
            }`}>
              <ParticleBackground isDark={isDark} />
              
              {/* Scroll Progress Bar */}
              <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left z-[100] shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                style={{ scaleX }}
              />

              {/* Overlay Scanline Effect (Visible only in Dark Mode) */}
              <div className={`fixed inset-0 pointer-events-none z-[60] bg-[length:100%_2px,3px_100%] bg-repeat opacity-20 transition-opacity duration-300 ${
                  isDark ? 'bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]' : 'opacity-5'
              }`}></div>

              {/* FLOATING NAVBAR */}
              <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-auto max-w-6xl z-50 transition-all duration-300">
                <div className={`backdrop-blur-xl border rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-6 py-3 flex justify-between items-center relative overflow-visible group transition-colors duration-300 ${
                    isDark ? 'bg-slate-900/70 border-white/10' : 'bg-white/70 border-slate-200 shadow-lg'
                }`}>
                  
                  {/* Glossy shine effect */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-full"></div>

                  {/* Logo Area */}
                  <div className={`flex items-center gap-3 pr-8 border-r ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg text-white">
                        <Terminal size={16} />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-sm font-bold tracking-tight leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {PORTFOLIO_OWNER}
                        </span>
                        <span className="text-[10px] text-emerald-500 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                            ONLINE
                        </span>
                    </div>
                  </div>
                  
                  {/* Desktop Menu */}
                  <div className="hidden md:flex items-center gap-1 pl-2">
                    {navLinks.map((link) => (
                      <a 
                        key={link.label} 
                        href={link.href} 
                        className={`px-4 py-2 text-xs font-medium transition-all rounded-full relative overflow-hidden group/link ${
                            isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <span className="relative z-10">{link.label}</span>
                      </a>
                    ))}
                  </div>

                  {/* Actions Area (Theme & Lang) */}
                  <div className={`hidden md:flex items-center gap-3 pl-6 border-l ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                      {/* Theme Toggle */}
                      <button 
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${
                            isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                        }`}
                      >
                          {isDark ? <Sun size={16} /> : <Moon size={16} />}
                      </button>

                      {/* Lang Selector */}
                      <div className="relative">
                          <button 
                             onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                             className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold border transition-all ${
                                 isDark ? 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white' : 'border-slate-200 bg-white text-slate-600 hover:text-blue-600'
                             }`}
                          >
                              <Globe size={14} />
                              {language.toUpperCase()}
                          </button>

                          <AnimatePresence>
                            {isLangMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className={`absolute top-full right-0 mt-2 w-32 rounded-xl shadow-xl border overflow-hidden py-1 ${
                                        isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
                                    }`}
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => { setLanguage(lang.code); setIsLangMenuOpen(false); }}
                                            className={`w-full text-left px-4 py-2 text-xs flex items-center gap-2 hover:bg-blue-500/10 transition-colors ${
                                                language === lang.code 
                                                    ? 'text-blue-500 font-bold' 
                                                    : (isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                                            }`}
                                        >
                                            <span>{lang.flag}</span> {lang.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                          </AnimatePresence>
                      </div>
                  </div>

                  {/* Mobile Menu Toggle */}
                  <div className={`md:hidden relative z-50 pl-4 border-l ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                    <button 
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className={`p-1 transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                  </div>
                </div>
              </nav>

              {/* Mobile Menu Overlay */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    className={`fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden ${
                        isDark ? 'bg-slate-950/80' : 'bg-white/90'
                    }`}
                  >
                    <div className="flex flex-col gap-8 text-center">
                      {navLinks.map((link, index) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-3xl font-black text-transparent bg-clip-text transition-all ${
                              isDark 
                                ? 'bg-gradient-to-r from-slate-300 to-slate-500 hover:from-blue-400 hover:to-purple-500'
                                : 'bg-gradient-to-r from-slate-700 to-slate-900 hover:from-blue-600 hover:to-purple-600'
                          }`}
                        >
                          {link.label}
                        </motion.a>
                      ))}
                    </div>

                    {/* Mobile Controls */}
                    <div className="mt-12 flex gap-6">
                        <button onClick={toggleTheme} className={`p-4 rounded-full border ${isDark ? 'bg-white/5 text-yellow-400 border-white/10' : 'bg-slate-100 text-blue-600 border-slate-200'}`}>
                            {isDark ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <button 
                            onClick={() => {
                                const nextIndex = (languages.findIndex(l => l.code === language) + 1) % languages.length;
                                setLanguage(languages[nextIndex].code);
                            }}
                            className={`p-4 rounded-full border font-bold flex items-center gap-2 ${isDark ? 'bg-white/5 text-white border-white/10' : 'bg-slate-100 text-slate-900 border-slate-200'}`}
                        >
                            <Globe size={24} /> {language.toUpperCase()}
                        </button>
                    </div>
                    
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`mt-8 p-4 rounded-full border ${isDark ? 'bg-white/5 text-white border-white/10' : 'bg-slate-100 text-slate-900 border-slate-200'}`}
                    >
                        <X size={24} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <main className="relative z-10 pt-20">
                <Hero />
                <About />
                <Education />
                <Projects />
                <Skills />
                <Inventions />
                <Contact />
              </main>

              {/* Footer */}
              <footer className={`py-8 text-center border-t text-sm relative z-10 px-4 ${
                  isDark ? 'bg-slate-950 border-slate-900 text-slate-600' : 'bg-slate-50 border-slate-200 text-slate-400'
              }`}>
                <div className="flex justify-center items-center gap-2 mb-2 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                </div>
                <p>&copy; {new Date().getFullYear()} {PORTFOLIO_OWNER}. Architecture Numérique.</p>
              </footer>

              {/* Floating Chat */}
              <AIChat />
            </div>
        </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;