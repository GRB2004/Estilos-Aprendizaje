import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TECHNIQUES } from '../data';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const TechniqueDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const technique = TECHNIQUES.find(t => t.id === Number(id));

  if (!technique) return <div className="p-10 text-center">Técnica no encontrada</div>;

  return (
    <div className="bg-white min-h-screen">
       <div className="relative h-[40vh]">
         <img 
           src={technique.imageUrl || `https://picsum.photos/seed/${technique.id}/1200/600`}
           alt={technique.title}
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
         <div className="absolute inset-0 flex items-center justify-center container mx-auto px-6">
            <div className="text-center text-white max-w-3xl">
                <span className="bg-brand-accent/90 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">
                    Estilo {technique.style}
                </span>
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">{technique.title}</h1>
            </div>
         </div>
         <button 
            onClick={() => navigate('/resultados')}
            className="absolute top-8 left-8 text-white flex items-center gap-2 bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-md transition-all"
         >
            <ArrowLeft size={20} />
            Volver
         </button>
       </div>

       <div className="container mx-auto px-6 -mt-20 relative z-10 pb-20">
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 max-w-4xl mx-auto"
         >
            <div className="prose prose-lg prose-stone max-w-none font-sans">
                {/* Intro */}
                <p className="lead text-xl text-stone-600 font-medium mb-8 border-l-4 border-brand-primary pl-6 italic">
                    {technique.description}
                </p>
                
                {/* HTML Content */}
                <div 
                    dangerouslySetInnerHTML={{ __html: technique.details }} 
                    className="
                        prose-headings:font-serif prose-headings:text-brand-dark
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-h4:text-brand-primary prose-h4:uppercase prose-h4:tracking-wide prose-h4:text-sm prose-h4:mt-6
                        prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2
                        prose-p:text-stone-700 prose-p:leading-relaxed
                    "
                />
            </div>

            <div className="mt-12 pt-12 border-t border-stone-100 flex justify-between items-center">
                <div className="text-stone-500 text-sm">
                    Recomendado para perfiles <strong>{technique.style}</strong>
                </div>
                <button 
                    onClick={() => navigate('/resultados')}
                    className="text-brand-dark font-semibold hover:underline"
                >
                    Ver otras técnicas
                </button>
            </div>
         </motion.div>
       </div>
    </div>
  );
};