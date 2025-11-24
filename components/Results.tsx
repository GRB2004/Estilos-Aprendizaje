import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '../context/AssessmentContext';
import { STYLES_INFO, TECHNIQUES } from '../data';
import { LearningStyle } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { BookOpen, RefreshCw, BarChart2 } from 'lucide-react';

export const Results = () => {
  const navigate = useNavigate();
  const { result, reset } = useAssessment();
  const [activeTab, setActiveTab] = useState<LearningStyle | null>(null);

  useEffect(() => {
    if (!result) {
      navigate('/');
    } else {
      setActiveTab(result.dominantStyle);
    }
  }, [result, navigate]);

  if (!result || !activeTab) return null;

  const chartData = Object.keys(result.scores).map((key) => ({
    subject: key,
    A: result.scores[key as LearningStyle],
    fullMark: 20, // Assuming 20 is max for normalization in chart
  }));

  const recommendedTechniques = TECHNIQUES.filter(t => t.style === activeTab);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <span className="text-brand-primary font-bold tracking-wider text-sm uppercase mb-2 block">Análisis Completado</span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4">
          Tu Estilo Predominante: <span className="underline decoration-brand-accent underline-offset-4">{activeTab}</span>
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Hemos analizado tus respuestas. A continuación encontrarás un desglose detallado de tu perfil de aprendizaje y técnicas personalizadas para potenciar tu estudio.
        </p>
      </motion.div>

      {/* Top Section: Chart & Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Chart Card */}
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="bg-white rounded-3xl shadow-xl border border-stone-100 p-6 flex flex-col items-center justify-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-dark to-brand-accent"></div>
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                  <PolarGrid gridType="polygon" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#4a5568', fontSize: 14, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 'auto']} tick={false} axisLine={false} />
                  <Radar
                    name="Puntaje"
                    dataKey="A"
                    stroke="#2d5016"
                    strokeWidth={3}
                    fill="#4a7c2c"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-4 mt-4">
                {Object.entries(result.percentages).map(([style, score]) => (
                    <div key={style} className="text-center">
                        <div className="text-xs font-bold text-stone-500 uppercase">{style}</div>
                        <div className="text-lg font-serif font-bold text-brand-dark">{score}%</div>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Description & Selection */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 flex flex-col"
        >
            <div className="flex flex-wrap gap-2 mb-8">
                {(Object.keys(STYLES_INFO) as LearningStyle[]).map((style) => (
                    <button
                        key={style}
                        onClick={() => setActiveTab(style)}
                        className={`
                            px-4 py-2 rounded-full text-sm font-semibold transition-all
                            ${activeTab === style 
                                ? 'bg-brand-dark text-white shadow-lg scale-105' 
                                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}
                        `}
                    >
                        {style}
                    </button>
                ))}
            </div>

            <h3 className="font-serif text-3xl text-stone-800 mb-4">{STYLES_INFO[activeTab].description}</h3>
            
            <div className="mb-6">
                <h4 className="font-bold text-sm text-stone-400 uppercase tracking-wider mb-3">Características Clave</h4>
                <div className="flex flex-wrap gap-2">
                    {STYLES_INFO[activeTab].characteristics.map((char) => (
                        <span key={char} className="px-3 py-1 bg-brand-light text-brand-dark rounded-md text-sm font-medium">
                            {char}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
      </div>

      {/* Techniques Grid */}
      <div className="mb-12">
        <h2 className="font-serif text-3xl font-bold text-stone-800 mb-8 flex items-center gap-3">
            <BookOpen className="text-brand-accent" />
            Técnicas Recomendadas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedTechniques.map((tech) => (
                <motion.div
                    key={tech.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-md border border-stone-100 overflow-hidden cursor-pointer group"
                    onClick={() => navigate(`/tecnica/${tech.id}`)}
                >
                    <div className="h-48 overflow-hidden">
                        <img 
                            src={tech.imageUrl || `https://picsum.photos/seed/${tech.id}/600/400`} 
                            alt={tech.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">{tech.title}</h3>
                        <p className="text-stone-600 text-sm line-clamp-3">{tech.description}</p>
                        <div className="mt-4 text-brand-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Leer más <ArrowRightIcon />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      <div className="flex justify-center pb-12">
        <button 
            onClick={() => { reset(); navigate('/'); }}
            className="flex items-center gap-2 text-stone-500 hover:text-brand-dark transition-colors font-medium px-6 py-3 rounded-full hover:bg-stone-100"
        >
            <RefreshCw size={18} />
            Realizar nueva evaluación
        </button>
      </div>
    </div>
  );
};

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);