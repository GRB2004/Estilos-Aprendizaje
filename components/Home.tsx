import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '../context/AssessmentContext';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home = () => {
  const navigate = useNavigate();
  const { reset, useMockResult } = useAssessment();

  const handleStart = () => {
    reset();
    navigate('/cuestionario');
  };

  const handleSkip = () => {
    useMockResult();
    navigate('/resultados');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-center container mx-auto px-6 gap-12 py-12 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-light rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/3"></div>
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-2xl z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-dark text-sm font-semibold mb-6">
          <Sparkles size={16} />
          <span>Descubre tu potencial</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-dark mb-6 leading-[1.1]">
          Una Mente Libre, <br/>
          <span className="text-brand-primary/80">una facultad más sana.</span>
        </h1>
        
        <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-lg">
          Identifica tu estilo de aprendizaje único (Honey-Alonso) y desbloquea técnicas de estudio diseñadas científicamente para ti.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleStart}
            className="group bg-brand-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-primary transition-all shadow-lg hover:shadow-brand-primary/30 flex items-center justify-center gap-2"
          >
            Realizar prueba
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleSkip}
            className="bg-white border-2 border-stone-200 text-stone-600 px-8 py-4 rounded-full font-semibold text-lg hover:border-brand-dark hover:text-brand-dark transition-colors flex items-center justify-center gap-2"
          >
            <Zap size={20} />
            Demo: Ver resultados
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 w-full max-w-lg relative"
      >
         <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
           <img 
             src="https://picsum.photos/seed/learning/800/1000" 
             alt="Estudiante aprendiendo" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
           <div className="absolute bottom-6 left-6 text-white font-serif italic text-2xl">
             "El aprendizaje es experiencia, todo lo demás es información."
           </div>
         </div>
         
         {/* Floating Badge */}
         <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow">
            <div className="bg-brand-light p-3 rounded-full text-brand-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><path d="m19 5-7 7-7-7"/></svg>
            </div>
            <div>
              <p className="text-xs text-stone-500 font-bold uppercase">Resultados</p>
              <p className="font-serif font-bold text-lg text-brand-dark">100% Personalizado</p>
            </div>
         </div>
      </motion.div>
    </div>
  );
};