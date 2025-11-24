import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from '../ui/TiltCard';
import { EDUCATION } from '../../constants';
import { EducationItem } from '../../types';
import { GraduationCap, BookOpen, Trophy, Sparkles, ChevronRight, CircuitBoard, X } from 'lucide-react';
import { ThemeContext, LanguageContext } from '../../App';

const Education: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null);

  return (
    <section id="education" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `linear-gradient(${isDark ? '#3b82f6' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#3b82f6' : '#000'} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-2 text-blue-500 mb-2">
                <CircuitBoard size={20} />
                <span className="text-xs font-mono tracking-widest uppercase">{t('education.subtitle')}</span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-black mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('education.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{t('education.title_colored')}</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* TIMELINE: DATA STREAM BEAM (Barre du milieu) */}
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] z-0">
             {/* Core Beam */}
             <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-700"></div>
             {/* Glow Effect (Dark Mode Only) */}
             {isDark && <div className="absolute inset-0 shadow-[0_0_15px_rgba(6,182,212,0.6)] bg-cyan-400 blur-[2px]"></div>}
             {/* Pulse Animation */}
             <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-transparent to-transparent opacity-50 animate-pulse"></div>
          </div>

          <div className="space-y-12 md:space-y-32 py-4 md:py-10">
            {EDUCATION.map((item, index) => {
               const isLeft = index % 2 === 0;
               return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center ${
                  !isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* NODE CONNECTOR */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-blue-600 to-blue-900/0 w-24 z-0 ${
                    isLeft ? 'right-1/2 mr-[2px]' : 'left-1/2 ml-[2px] bg-gradient-to-l'
                }`}>
                    {isDark && <div className="absolute top-0 left-0 w-full h-full bg-cyan-400/30 blur-[1px]"></div>}
                </div>

                {/* CENTRAL NODE */}
                <div className="absolute left-[14px] md:left-1/2 transform md:-translate-x-1/2 top-10 md:top-1/2 md:-translate-y-1/2 w-4 h-4 z-20">
                   <div className="relative w-full h-full">
                       <div className={`absolute inset-0 rounded-full border-2 border-cyan-400 z-20 ${isDark ? 'bg-slate-950 shadow-[0_0_15px_rgba(6,182,212,1)]' : 'bg-white'}`}></div>
                       <div className="absolute -inset-2 border border-blue-500/50 rounded-full animate-spin-slow"></div>
                       <div className="absolute -inset-1 bg-cyan-500/30 rounded-full animate-ping"></div>
                   </div>
                </div>

                {/* Spacer - Hidden on mobile */}
                <div className="hidden md:block md:w-1/2 md:px-12"></div>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-12 md:pr-12">
                   <div onClick={() => setSelectedItem(item)} className="cursor-pointer relative group perspective-1000">
                     <TiltCard className="w-full">
                        {/* Card Container */}
                        <div className={`backdrop-blur-xl border p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-500 shadow-xl ${
                            isDark 
                            ? 'bg-slate-900/80 border-slate-700/80 hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]' 
                            : 'bg-white/90 border-slate-200 hover:border-blue-400 hover:shadow-2xl'
                        }`}>
                           
                           {/* Hover Tech Lines */}
                           <div className="absolute top-0 right-0 w-20 h-[1px] bg-gradient-to-l from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                           <div className="absolute bottom-0 left-0 w-20 h-[1px] bg-gradient-to-r from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                           
                           <div className="relative z-10">
                              <div className="flex items-start justify-between mb-4">
                                 <span className={`px-3 py-1 rounded text-xs font-mono font-bold tracking-wider ${
                                     isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-100 text-blue-600'
                                 }`}>
                                    {item.period}
                                 </span>
                                 <div className={`p-2 rounded-lg transition-all ${
                                     isDark ? 'bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-blue-600' : 'bg-slate-100 text-slate-500 group-hover:text-white group-hover:bg-blue-600'
                                 }`}>
                                    <ChevronRight size={16} />
                                 </div>
                              </div>
                              
                              <h3 className={`text-xl md:text-2xl font-bold mb-1 transition-colors ${
                                  isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-800 group-hover:text-blue-600'
                              }`}>
                                 {item.degree[language]}
                              </h3>
                              <h4 className={`text-sm md:text-base font-medium mb-4 flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                 <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                 {item.institution}
                              </h4>
                              
                              <p className={`text-sm leading-relaxed line-clamp-3 md:line-clamp-none ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                 {item.description[language]}
                              </p>
                           </div>
                        </div>
                     </TiltCard>
                   </div>
                </div>
              </motion.div>
            );})}
          </div>
        </div>
      </div>

      {/* Detail Overlay Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-8 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-3xl h-[90vh] md:h-auto md:max-h-[85vh] overflow-hidden rounded-t-3xl md:rounded-3xl shadow-2xl flex flex-col relative border ${
                  isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
               {/* Modal Header */}
              <div className={`h-24 md:h-32 relative shrink-0 border-b ${
                  isDark ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}>
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
                 
                 <button 
                    onClick={() => setSelectedItem(null)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-20 border ${
                        isDark ? 'bg-black/40 hover:bg-white/10 text-white border-white/10' : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-300 shadow-sm'
                    }`}
                 >
                    <X size={20} />
                 </button>

                 <div className="absolute bottom-4 md:bottom-6 left-6 md:left-8 flex items-center gap-4">
                     <div className={`hidden md:flex w-16 h-16 border-2 border-blue-500 rounded-xl items-center justify-center shadow-lg ${
                         isDark ? 'bg-slate-950' : 'bg-white'
                     }`}>
                        <GraduationCap size={32} className="text-blue-500" />
                     </div>
                     <div>
                        <h2 className={`text-xl md:text-2xl font-bold leading-tight pr-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedItem.degree[language]}</h2>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{selectedItem.institution}</p>
                     </div>
                 </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
                <div className={`mb-8 p-4 border-l-2 border-blue-500 rounded-r-lg ${
                    isDark ? 'bg-blue-900/10' : 'bg-blue-50'
                }`}>
                    <p className={`leading-relaxed text-sm md:text-base ${isDark ? 'text-blue-100' : 'text-blue-900'}`}>{selectedItem.description[language]}</p>
                </div>

                {selectedItem.details && (
                  <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                     {/* Modules */}
                     <div className="space-y-4">
                        <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider pb-2 border-b ${
                            isDark ? 'text-white border-slate-800' : 'text-slate-800 border-slate-200'
                        }`}>
                           <BookOpen size={16} className="text-cyan-500" />
                           Modules
                        </div>
                        <ul className="space-y-2">
                           {selectedItem.details.modules.map((mod, i) => (
                              <li key={i} className={`flex items-start gap-3 text-sm group ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                 <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full mt-1.5 shrink-0 group-hover:bg-cyan-400 transition-colors" />
                                 {mod}
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* Skills & Achievements */}
                     <div className="space-y-8">
                        <div className="space-y-4">
                           <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider pb-2 border-b ${
                                isDark ? 'text-white border-slate-800' : 'text-slate-800 border-slate-200'
                            }`}>
                              <Sparkles size={16} className="text-purple-500" />
                              {t('skills.title')}
                           </div>
                           <div className="flex flex-wrap gap-2">
                              {selectedItem.details.skillsAcquired.map((skill, i) => (
                                 <span key={i} className={`px-3 py-1 border text-xs rounded cursor-default ${
                                     isDark 
                                     ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-purple-500/50' 
                                     : 'bg-slate-100 border-slate-200 text-slate-600 hover:border-purple-400'
                                 }`}>
                                    {skill}
                                 </span>
                              ))}
                           </div>
                        </div>

                        <div className="space-y-4">
                           <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider pb-2 border-b ${
                                isDark ? 'text-white border-slate-800' : 'text-slate-800 border-slate-200'
                            }`}>
                              <Trophy size={16} className="text-yellow-500" />
                              Réalisations
                           </div>
                           <ul className="space-y-2">
                              {selectedItem.details.achievements.map((ach, i) => (
                                 <li key={i} className={`flex items-start gap-2 text-sm italic ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                    <span className="text-yellow-500/50">★</span>
                                    {ach}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
                )}
              </div>
              
              <div className={`p-4 border-t flex justify-end shrink-0 pb-safe ${
                  isDark ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'
              }`}>
                 <button 
                   onClick={() => setSelectedItem(null)}
                   className="w-full md:w-auto px-6 py-3 md:py-2 bg-blue-600 text-white hover:bg-blue-700 font-bold rounded transition-colors text-sm shadow-lg"
                 >
                    {t('education.close')}
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;