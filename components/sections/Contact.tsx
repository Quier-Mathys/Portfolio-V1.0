import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../../constants';
import TiltCard from '../ui/TiltCard';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ThemeContext, LanguageContext } from '../../App';

const Contact: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulation d'envoi (Loading effect)
    setTimeout(() => {
      try {
          // LOGIQUE D'ENVOI DIRECT (Fallback Mailto)
          const myEmail = "mathys.quier.pro@gmail.com"; 
          const subject = `Contact Portfolio: ${formData.name}`;
          const body = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
          
          // Création du lien mailto et ouverture du client mail
          window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          
          setFormStatus('success');
          setFormData({ name: '', email: '', message: '' }); // Reset du formulaire
          
          // Reset du bouton après 3 secondes
          setTimeout(() => setFormStatus('idle'), 3000);
      } catch (error) {
          setFormStatus('error');
          setTimeout(() => setFormStatus('idle'), 3000);
      }
    }, 1500);
  };

  return (
    <section id="contact" className={`py-12 md:py-20 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-gradient-to-b from-white to-slate-100'}`}>
      {/* Background Blur */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[60px] md:blur-[100px] ${isDark ? 'bg-blue-900/10' : 'bg-blue-100/50'}`} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {t('contact.title')} <span className="text-blue-500">{t('contact.title_colored')}</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIALS.map((social, index) => (
                <TiltCard key={social.name} className="h-full" glareColor={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`block h-full p-6 border rounded-2xl transition-colors group ${
                        isDark 
                        ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' 
                        : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors group-hover:text-white ${
                        isDark ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <social.icon size={24} />
                    </div>
                    <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{social.name}</h3>
                  </a>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`backdrop-blur-xl p-6 md:p-8 rounded-3xl border shadow-2xl order-1 lg:order-2 ${
                isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white/80 border-slate-200'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{t('contact.name')}</label>
                  <input 
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all ${
                        isDark ? 'bg-slate-900/50 border-slate-600 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{t('contact.email')}</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all ${
                        isDark ? 'bg-slate-900/50 border-slate-600 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{t('contact.message')}</label>
                <textarea 
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none ${
                      isDark ? 'bg-slate-900/50 border-slate-600 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                  placeholder="..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all transform active:scale-95 ${
                  formStatus === 'success' ? 'bg-green-600' :
                  formStatus === 'error' ? 'bg-red-600' :
                  'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30'
                }`}
              >
                {formStatus === 'idle' && (
                  <>
                    {t('contact.send')} <Send size={18} />
                  </>
                )}
                {formStatus === 'submitting' && (
                  <>
                    {t('contact.sending')}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full ml-2"
                    />
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    {t('contact.success')} <CheckCircle size={18} />
                  </>
                )}
                 {formStatus === 'error' && (
                  <>
                    {t('contact.error')} <AlertCircle size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;