import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${isHome ? 'bg-transparent py-6' : 'bg-white/90 backdrop-blur-md shadow-sm py-4'}
      `}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-dark p-2 rounded-lg text-white group-hover:bg-brand-primary transition-colors">
              <BrainCircuit size={28} />
            </div>
            <span className={`font-serif text-xl font-bold tracking-tight ${isHome ? 'text-brand-dark' : 'text-stone-800'}`}>
              Mente Libre
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
             {!isHome && (
               <Link to="/" className="text-stone-600 hover:text-brand-dark transition-colors font-medium">
                 Inicio
               </Link>
             )}
          </nav>
        </div>
      </header>
      
      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-stone-100 py-8 border-t border-stone-200 mt-auto">
        <div className="container mx-auto px-6 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} Mente Libre. Facultad de Computación.</p>
        </div>
      </footer>
    </div>
  );
};