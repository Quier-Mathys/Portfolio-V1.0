import React, { useState, useContext } from 'react';
import { PROJECTS } from '../../constants';
import TiltCard from '../ui/TiltCard';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext, LanguageContext } from '../../App';

const Projects: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const [filter, setFilter] = useState("All");

  // Extract unique tags for filter buttons
  const allTags = ["All", ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))].slice(0, 6);

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className={`py-20 relative transition-colors duration-300 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {t('projects.title')} <span className="text-blue-500">{t('projects.title_colored')}</span>
          </h2>
          <p className={`max-w-xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {t('projects.subtitle')}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === tag 
                    ? 'bg-blue-600 text-white shadow-lg scale-105 border-blue-600' 
                    : (isDark 
                        ? 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white' 
                        : 'bg-white text-slate-500 border-slate-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200')
                }`}
              >
                {tag === "All" ? t('projects.all') : tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="h-full" glareColor={isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.5)"}>
                  {/* Whole card is now a link */}
                  <a 
                    href={project.link}
                    className={`block h-full backdrop-blur-md border rounded-2xl overflow-hidden shadow-xl group cursor-pointer transition-all duration-300 ${
                        isDark 
                        ? 'bg-slate-800/80 border-slate-700 hover:border-blue-500/50' 
                        : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl'
                    }`}
                  >
                    {/* Image Container with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <div className={`absolute inset-0 z-10 ${isDark ? 'bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60' : 'bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-20'}`} />
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        onError={(e) => {
                            // Fallback to placeholder if local image not found
                            e.currentTarget.src = `https://picsum.photos/600/400?random=${project.id}`;
                        }}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Visual Cue for Link (Icon) */}
                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-[-10px] group-hover:translate-y-0">
                        <div className="p-3 bg-blue-600 rounded-full shadow-lg">
                          <ExternalLink size={20} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 transform translate-z-20">
                      <h3 className={`text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`mb-6 line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {project.description[language]}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className={`px-3 py-1 text-xs font-medium border rounded-full ${
                                isDark 
                                ? 'bg-blue-900/20 text-blue-300 border-blue-800/50' 
                                : 'bg-blue-50 text-blue-700 border-blue-100'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;