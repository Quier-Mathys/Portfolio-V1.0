import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../ui/TiltCard';
import { ABOUT_TEXT } from '../../constants';
import { Code2, Cpu, Globe } from 'lucide-react';
import { ThemeContext, LanguageContext } from '../../App';

const About: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);

  const features = [
    { icon: Code2, title: "Clean Code", desc: "Architecture maintenable et scalable." },
    { icon: Globe, title: "Web 3.0", desc: "Expériences immersives et décentralisées." },
    { icon: Cpu, title: "AI Integration", desc: "Solutions intelligentes propulsées par Gemini." },
  ];

  return (
    <section id="about" className={`py-12 md:py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
       {/* Decorative Elements */}
       <div className={`absolute -left-20 top-40 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-purple-600/10' : 'bg-purple-400/20'}`} />
       <div className={`absolute -right-20 bottom-20 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-blue-600/10' : 'bg-blue-400/20'}`} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Text */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-2">{t('about.title_small')}</h2>
              <h3 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t('about.title_big')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {t('about.title_colored')}
                </span>
              </h3>
              <p className={`text-base md:text-lg leading-relaxed mb-8 border-l-4 border-blue-500 pl-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {ABOUT_TEXT[language]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl border transition-colors ${
                        isDark 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50' 
                        : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'
                    }`}
                  >
                    <feature.icon className="text-blue-500 mb-2" size={24} />
                    <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h4>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:w-1/2 flex justify-center w-full">
            <TiltCard className="w-full max-w-md">
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl border aspect-[4/5] md:aspect-auto ${
                  isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Workspace" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 ${isDark ? 'from-slate-900' : 'from-white'}`}></div>
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                        {t('about.available')}
                     </div>
                     <div className={`h-px flex-1 ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}></div>
                  </div>
                  <p className={`italic ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    "{t('about.quote')}"
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;