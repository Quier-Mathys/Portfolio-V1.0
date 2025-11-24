import React, { useContext } from 'react';
import { SKILLS } from '../../constants';
import TiltCard from '../ui/TiltCard';
import { motion } from 'framer-motion';
import { AlertTriangle, Activity } from 'lucide-react';
import { ThemeContext, LanguageContext } from '../../App';

const Skills: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  return (
    <section id="skills" className={`py-20 relative transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Grid Background */}
      <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05] invert'}`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            {t('skills.title')} <span className="text-purple-500">{t('skills.title_colored')}</span>
          </motion.h2>
          <p className={`max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {t('skills.subtitle')}
          </p>
        </div>

        {/* WARNING HOLOGRAPHIC POPUP */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-2xl mx-auto mb-16 relative"
        >
           <div className={`border-2 rounded-xl p-6 backdrop-blur-sm shadow-lg relative overflow-hidden ${
               isDark 
               ? 'bg-yellow-500/5 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.15)]' 
               : 'bg-amber-50 border-amber-300 shadow-amber-200'
           }`}>
              {/* Scanline effect inside banner */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(234,179,8,0.1)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                 <div className={`p-3 rounded-lg animate-pulse ${isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-amber-200 text-amber-700'}`}>
                    <AlertTriangle size={32} />
                 </div>
                 <div className="flex-1">
                    <h3 className={`font-black text-lg tracking-wider uppercase flex items-center gap-2 mb-1 ${isDark ? 'text-yellow-400' : 'text-amber-700'}`}>
                       <Activity size={16} className="animate-bounce" />
                       {t('skills.warning_title')}
                    </h3>
                    <p className={`font-mono text-sm leading-tight ${isDark ? 'text-yellow-200/80' : 'text-amber-800'}`}>
                       {t('skills.warning_text')}
                    </p>
                 </div>
              </div>

              {/* Decorative corners */}
              <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${isDark ? 'border-yellow-500' : 'border-amber-400'}`}></div>
              <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${isDark ? 'border-yellow-500' : 'border-amber-400'}`}></div>
              <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${isDark ? 'border-yellow-500' : 'border-amber-400'}`}></div>
              <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${isDark ? 'border-yellow-500' : 'border-amber-400'}`}></div>
           </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <TiltCard key={skill.name} className="h-full" glareColor={isDark ? "rgba(59, 130, 246, 0.2)" : "rgba(0,0,0,0.05)"}>
              <div className={`h-full backdrop-blur-sm border p-8 rounded-3xl group transition-all duration-300 flex flex-col items-center ${
                  isDark 
                  ? 'bg-slate-800/40 border-slate-700 hover:bg-slate-800/60' 
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'
              }`}>
                
                {/* Logo Container with Glow */}
                <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                   <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className={`w-full h-full p-3 rounded-2xl border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                       isDark 
                       ? 'bg-slate-800/80 border-slate-600' 
                       : 'bg-white border-slate-100'
                   }`}>
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-full h-full object-contain"
                      />
                   </div>
                </div>

                <div className="w-full text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                     <h3 className={`text-xl font-bold group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-slate-800'}`}>
                        {skill.name}
                     </h3>
                  </div>
                  
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded mb-4 ${
                      isDark ? 'text-slate-500 border-slate-700' : 'text-slate-400 border-slate-200'
                  }`}>
                    {skill.category}
                  </span>
                  
                  <div className="w-full">
                    <div className={`flex justify-between text-xs mb-1 px-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <span>{t('skills.mastery')}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 overflow-hidden ${isDark ? 'bg-slate-700/50' : 'bg-slate-200'}`}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        className={`h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] ${
                            skill.level < 40 
                            ? 'bg-gradient-to-r from-yellow-600 to-yellow-400' 
                            : 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[shimmer_2s_infinite]'
                        }`}
                      />
                    </div>
                    {skill.level < 40 && (
                        <span className="text-[10px] text-yellow-500/80 mt-1 block font-mono">* {t('skills.learning')}</span>
                    )}
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;