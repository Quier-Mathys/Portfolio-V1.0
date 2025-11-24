import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INVENTIONS } from '../../constants';
import { Invention } from '../../types';
import { Cpu, Code, Layout, Beaker, Globe, X } from 'lucide-react';
import { ThemeContext, LanguageContext } from '../../App';

const Inventions: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const [selectedLab, setSelectedLab] = useState<Invention | null>(null);

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Hardware': return <Cpu size={24} />;
      case 'Software': return <Code size={24} />;
      case 'Concept': return <Layout size={24} />;
      default: return <Beaker size={24} />;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case 'Hardware': return 'from-orange-500 to-red-600';
      case 'Software': return 'from-blue-500 to-cyan-500';
      case 'Concept': return 'from-purple-500 to-pink-500';
      default: return 'from-slate-500 to-gray-500';
    }
  };

  const getBorderColorForType = (type: string) => {
    switch (type) {
        case 'Hardware': return 'border-orange-500/30 hover:border-orange-500';
        case 'Software': return 'border-cyan-500/30 hover:border-cyan-500';
        case 'Concept': return 'border-purple-500/30 hover:border-purple-500';
        default: return 'border-slate-500/30';
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Active': return {
        dot: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]',
        text: 'text-emerald-400'
      };
      case 'Beta': return {
        dot: 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]',
        text: 'text-blue-400'
      };
      case 'Alpha': return {
        dot: 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]',
        text: 'text-purple-400'
      };
      default: return { // Prototype
        dot: 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]',
        text: 'text-amber-400'
      };
    }
  };

  return (
    <section className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'}`}>
      {/* Background Ambient */}
      {isDark && <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a_0%,#000000_100%)]"></div>}
      <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] ${isDark ? 'opacity-[0.02]' : 'opacity-[0.05] invert'}`}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-6xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('labs.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{t('labs.title_colored')}</span>
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t('labs.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* THE PODS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INVENTIONS.map((item, index) => {
                const statusStyle = getStatusStyles(item.status);
                return (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedLab(item)}
                    className={`
                        relative group cursor-pointer h-[400px] rounded-3xl backdrop-blur-sm border-2 transition-all duration-500 overflow-hidden flex flex-col shadow-lg
                        ${getBorderColorForType(item.type)}
                        ${isDark ? 'bg-slate-900/50' : 'bg-white'}
                    `}
                >
                    {/* Hover Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorForType(item.type)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Image Section (Top 2/3) */}
                    <div className="relative flex-1 overflow-hidden">
                        <img 
                            src={item.image} 
                            alt="" 
                            onError={(e) => { e.currentTarget.src = `https://picsum.photos/800/600?random=${item.id}`; }}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${isDark ? 'from-slate-900' : 'from-white'}`}></div>
                        
                        {/* Hidden Type Icon */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur rounded-xl flex items-center justify-center text-white border border-white/10 shadow-lg">
                            {getIconForType(item.type)}
                        </div>

                        {/* Status Indicator */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/50 shadow-xl z-20">
                            <div className={`w-2 h-2 rounded-full ${statusStyle.dot} animate-pulse`} />
                            <span className={`text-[10px] font-bold tracking-widest uppercase font-mono ${statusStyle.text}`}>
                                {item.status}
                            </span>
                        </div>
                    </div>

                    {/* Info Section (Bottom 1/3) */}
                    <div className={`p-6 relative z-10 border-t ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white/80 border-slate-100'}`}>
                        <h3 className={`text-2xl font-bold group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                    </div>

                    {/* Decorative Tech Lines */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50 group-hover:via-blue-500 transition-all"></div>
                </motion.div>
            )})}
        </div>

      </div>

      {/* FULL SCREEN MODAL (OVERLAY) */}
      <AnimatePresence>
        {selectedLab && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-0 md:p-4"
                onClick={() => setSelectedLab(null)}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] border rounded-none md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row ${
                        isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
                    }`}
                >
                    {/* Left: Visuals */}
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-auto overflow-hidden shrink-0 bg-black">
                        <img 
                            src={selectedLab.image} 
                            alt="" 
                            onError={(e) => { e.currentTarget.src = `https://picsum.photos/800/600?random=${selectedLab.id}`; }}
                            className="absolute inset-0 w-full h-full object-cover" 
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${getColorForType(selectedLab.type)} opacity-30 mix-blend-overlay`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-90 ${isDark ? 'from-slate-900' : 'from-white/20'}`}></div>
                        
                        <button 
                            onClick={() => setSelectedLab(null)}
                            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full md:hidden z-50"
                        >
                            <X size={24} />
                        </button>

                        <div className="absolute bottom-8 left-8 right-8">
                             <div className="inline-block p-3 bg-black/50 backdrop-blur rounded-2xl border border-white/10 mb-4 text-white">
                                {getIconForType(selectedLab.type)}
                             </div>
                             <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight drop-shadow-lg">{selectedLab.title}</h2>
                             <div className="flex flex-wrap items-center gap-3">
                                 <span className={`px-3 py-1 rounded-full text-xs font-bold bg-black/50 border border-white/10 text-white`}>
                                     LAB-{selectedLab.id.toUpperCase()}
                                 </span>
                                 <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                     selectedLab.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                                     selectedLab.status === 'Beta' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                     selectedLab.status === 'Alpha' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                                     'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                 }`}>
                                     STATUS: {selectedLab.status.toUpperCase()}
                                 </span>
                             </div>
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className={`w-full md:w-1/2 p-6 md:p-12 flex flex-col overflow-y-auto ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                        <div className="hidden md:flex justify-between items-start mb-8">
                            <div className="space-y-1">
                                <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest">{t('labs.desc')}</h3>
                                <div className="h-0.5 w-12 bg-blue-500"></div>
                            </div>
                            <button 
                                onClick={() => setSelectedLab(null)}
                                className={`p-2 rounded-full transition-colors ${isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-slate-900'}`}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <p className={`text-base md:text-lg leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            {selectedLab.description[language]}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                <Cpu size={16} className="text-blue-500" /> {t('labs.stack')}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedLab.techStack.map((tech, i) => (
                                    <span key={i} className={`px-3 py-1 border text-xs rounded font-mono ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                            <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                <Globe size={16} className="text-purple-500" /> {t('labs.features')}
                            </h4>
                            <ul className="space-y-3">
                                {selectedLab.features.map((feat, i) => (
                                    <li key={i} className={`flex items-start gap-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 shrink-0"></span>
                                        {feat[language]}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-8 pb-safe">
                            <button className={`w-full py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group shadow-lg ${
                                isDark ? 'bg-white text-black hover:bg-blue-50' : 'bg-slate-900 text-white hover:bg-slate-800'
                            }`}>
                                <span>{t('labs.view_doc')}</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Inventions;