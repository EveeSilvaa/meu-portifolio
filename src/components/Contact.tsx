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
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
          Interested?
          </h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          I'm always open to new opportunities and partnerships. 
          If you want to talk about technology or have a proposal, send me a message!
          </p>
        </motion.div>
       <div>
        {/* Ícones (GitHub, LinkedIn, E-mail) - Modificado para linha horizontal no mobile */}
        <div className="flex justify-center md:justify-start gap-6 md:gap-5">
          <motion.a
           href="https://github.com/EveeSilvaa"
           target="_blank"
           rel="noopener noreferrer"
           whileHover={{ y: -3 }}
           className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-purple-600 text-gray-300' : 'bg-gray-200 hover:bg-purple-500 text-gray-700 hover:text-white'}`}
           aria-label="GitHub"
          >
           <FiGithub size={20} /> 
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/maeve-silva/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-purple-600 text-gray-300' : 'bg-gray-200 hover:bg-purple-500 text-gray-700 hover:text-white'}`}
            aria-label="LinkedIn"
          >
          <FiLinkedin size={20} />
          </motion.a>

          <motion.a
            href="mailto:evesilva.contato@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-purple-600 text-gray-300' : 'bg-gray-200 hover:bg-purple-500 text-gray-700 hover:text-white'}`}
            aria-label="E-mail"
          >
          <FiMail size={20} /> 
          </motion.a>
        </div>
      </div>

        {/* Formulário com Efeitos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`p-6 md:p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800 border border-purple-900/30' : 'bg-white border border-gray-200'}`}
        >
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-100 border border-green-200'} text-center`}
            >
              <p className={darkMode ? 'text-green-400' : 'text-green-700'}>
               Message sent successfully! I will contact you shortly.
              </p>
            </motion.div>
          )}

          <h3 className={`text-xl md:text-2xl font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <FiSend className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
            Send a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <motion.div whileHover={{ scale: 1.01 }}>
              <label className={`block mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Name*</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-colors ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-purple-500' : 'bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400'} ${errors.name ? 'border-red-500' : 'border'}`}
                required
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label className={`block mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>E-mail*</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-colors ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-purple-500' : 'bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400'} ${errors.email ? 'border-red-500' : 'border'}`}
                required
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label className={`block mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Subject*</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-colors ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-purple-500' : 'bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400'} ${errors.subject ? 'border-red-500' : 'border'}`}
                required
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label className={`block mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Message*</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-colors ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-purple-500' : 'bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-purple-400'} ${errors.message ? 'border-red-500' : 'border'}`}
                required
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </motion.div>

            <motion.button
              whileHover={{ 
                scale: 1.03,
                boxShadow: darkMode ? "0 0 15px rgba(168, 85, 247, 0.5)" : "0 0 15px rgba(124, 58, 237, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 ${darkMode ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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