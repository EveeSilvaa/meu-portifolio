import { motion } from "framer-motion";
import { FiSend, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { useState } from "react";


export default function ContactForm({ darkMode }: { darkMode: boolean }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpa o erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Assunto é obrigatório';
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulando envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Formulário enviado:', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reseta o estado de sucesso após 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-16 md:py-20 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        {/* Seção de Informações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'} tracking-tight`}>
            Let's Connect
          </h2>
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm always excited to explore new opportunities and collaborations.
            Whether you want to discuss technology, have a project in mind, or just want to say hello - I'd love to hear from you!
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="mb-12">
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com/EveeSilvaa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className={`p-4 rounded-full shadow-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800 hover:bg-purple-600 text-gray-300' : 'bg-gray-100 hover:bg-purple-500 text-gray-700 hover:text-white'}`}
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/maeve-silva/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className={`p-4 rounded-full shadow-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800 hover:bg-purple-600 text-gray-300' : 'bg-gray-100 hover:bg-purple-500 text-gray-700 hover:text-white'}`}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </motion.a>

            <motion.a
              href="mailto:evesilva.contato@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className={`p-4 rounded-full shadow-lg transition-colors duration-300 ${darkMode ? 'bg-gray-800 hover:bg-purple-600 text-gray-300' : 'bg-gray-100 hover:bg-purple-500 text-gray-700 hover:text-white'}`}
              aria-label="E-mail"
            >
              <FiMail size={24} />
            </motion.a>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/90 border border-purple-900/30' : 'bg-white/90 border border-gray-200'}`}
        >
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-100 border border-green-200'} text-center`}
            >
              <p className={`font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                Message sent successfully! I'll get back to you soon.
              </p>
            </motion.div>
          )}

          <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <FiSend className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div whileHover={{ scale: 1.01 }} className="group">
              <label className={`block mb-2 font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Name*</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700/80 border-gray-600 text-white focus:ring-2 focus:ring-purple-500 group-hover:bg-gray-700' 
                    : 'bg-gray-50 border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400 group-hover:bg-white'
                } ${errors.name ? 'border-red-500' : 'border'}`}
                required
              />
              {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="group">
              <label className={`block mb-2 font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>E-mail*</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700/80 border-gray-600 text-white focus:ring-2 focus:ring-purple-500 group-hover:bg-gray-700' 
                    : 'bg-gray-50 border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400 group-hover:bg-white'
                } ${errors.email ? 'border-red-500' : 'border'}`}
                required
              />
              {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="group">
              <label className={`block mb-2 font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Subject*</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700/80 border-gray-600 text-white focus:ring-2 focus:ring-purple-500 group-hover:bg-gray-700' 
                    : 'bg-gray-50 border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400 group-hover:bg-white'
                } ${errors.subject ? 'border-red-500' : 'border'}`}
                required
              />
              {errors.subject && <p className="mt-2 text-sm text-red-500">{errors.subject}</p>}
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="group">
              <label className={`block mb-2 font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Message*</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700/80 border-gray-600 text-white focus:ring-2 focus:ring-purple-500 group-hover:bg-gray-700' 
                    : 'bg-gray-50 border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400 group-hover:bg-white'
                } ${errors.message ? 'border-red-500' : 'border'}`}
                required
              ></textarea>
              {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
            </motion.div>

            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: darkMode ? "0 0 20px rgba(168, 85, 247, 0.5)" : "0 0 20px rgba(124, 58, 237, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/30' 
                  : 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/20'
              } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              type="submit"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}