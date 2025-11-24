import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_OWNER, HERO_TAGLINE } from '../../constants';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Typewriter from '../ui/Typewriter';
import TiltCard from '../ui/TiltCard';
import { ThemeContext, LanguageContext } from '../../App';

const Hero: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Animated Background Blobs */}
      <div className={`absolute top-[-20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[120px] animate-pulse transition-colors duration-700 ${isDark ? 'bg-purple-600/20' : 'bg-purple-400/30'}`} />
      <div className={`absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[120px] animate-pulse transition-colors duration-700 ${isDark ? 'bg-blue-600/20' : 'bg-blue-400/30'}`} style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 z-10 flex flex-col items-center relative">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className={`px-4 py-2 rounded-full border backdrop-blur-md text-xs md:text-sm font-medium tracking-wider uppercase shadow-[0_0_20px_rgba(59,130,246,0.2)] flicker-text ${
              isDark ? 'border-blue-500/30 bg-blue-900/10 text-blue-400' : 'border-blue-400/50 bg-white/50 text-blue-600'
          }`}>
            {t('hero.welcome')}
          </div>
        </motion.div>

        <TiltCard className="mb-8 w-full max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold text-center tracking-tight break-words"
          >
            <span className={`bg-clip-text text-transparent bg-gradient-to-b block md:inline drop-shadow-2xl ${
                isDark ? 'from-white to-slate-500' : 'from-slate-900 to-slate-600'
            }`}>
              {PORTFOLIO_OWNER}
            </span>
          </motion.h1>
        </TiltCard>

        <div className="h-24 md:h-20 mb-8 flex items-center justify-center px-4">
          <Typewriter 
            text={HERO_TAGLINE[language]} 
            delay={0.5}
            className={`text-lg md:text-2xl lg:text-3xl font-light text-center max-w-3xl leading-relaxed ${
                isDark ? 'text-blue-200' : 'text-slate-600'
            }`}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center px-4"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            {t('hero.cta')}
          </a>
          <div className="flex gap-4">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className={`p-3 rounded-full border transition-all hover:scale-110 ${
                    isDark 
                    ? 'border-slate-700 bg-slate-800/50 text-slate-400 hover:bg-white hover:text-slate-900' 
                    : 'border-slate-300 bg-white text-slate-500 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className={`flex flex-col items-center gap-2 text-sm uppercase tracking-widest opacity-70 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          {t('hero.scroll')}
          <ArrowDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;