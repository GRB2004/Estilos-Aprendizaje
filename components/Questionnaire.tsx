import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '../context/AssessmentContext';
import { QUESTIONS } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Questionnaire = () => {
  const navigate = useNavigate();
  const { setAnswer, calculateAndSetResult } = useAssessment();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswer(currentQuestion.id, selectedOption);
      
      if (currentIndex < QUESTIONS.length - 1) {
        setSelectedOption(null);
        setCurrentIndex(prev => prev + 1);
      } else {
        calculateAndSetResult();
        navigate('/resultados');
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedOption(null); // Simple reset, ideally we'd load previous answer
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-3xl py-12">
      {/* Progress */}
      <div className="mb-12">
        <div className="flex justify-between text-sm font-semibold text-stone-500 mb-2">
          <span>Pregunta {currentIndex + 1} de {QUESTIONS.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand-dark"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light text-brand-dark font-bold text-xl mb-6">
            {currentIndex + 1}
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-10 leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <button
              onClick={() => setSelectedOption(true)}
              className={`
                relative p-6 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 text-left
                ${selectedOption === true 
                  ? 'border-brand-dark bg-brand-light/30' 
                  : 'border-stone-100 bg-stone-50 hover:border-brand-primary/30'}
              `}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${selectedOption === true ? 'bg-brand-dark border-brand-dark text-white' : 'border-stone-300'}`}>
                {selectedOption === true && <Check size={16} />}
              </div>
              <span className="font-medium text-lg text-stone-700">Más de acuerdo (+)</span>
            </button>

            <button
              onClick={() => setSelectedOption(false)}
              className={`
                relative p-6 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 text-left
                ${selectedOption === false 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-stone-100 bg-stone-50 hover:border-red-200'}
              `}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${selectedOption === false ? 'bg-red-500 border-red-500 text-white' : 'border-stone-300'}`}>
                {selectedOption === false && <X size={16} />}
              </div>
              <span className="font-medium text-lg text-stone-700">Más en desacuerdo (-)</span>
            </button>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-stone-100">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 text-stone-500 hover:text-stone-800 font-medium transition-colors ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : ''}`}
            >
              <ChevronLeft size={20} />
              Anterior
            </button>
            
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`
                bg-brand-dark text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-brand-dark/20 flex items-center gap-2
                disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-primary transition-all
              `}
            >
              {currentIndex === QUESTIONS.length - 1 ? 'Ver Resultados' : 'Siguiente'}
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};