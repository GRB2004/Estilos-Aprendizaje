import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AssessmentProvider } from './context/AssessmentContext';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Questionnaire } from './components/Questionnaire';
import { Results } from './components/Results';
import { TechniqueDetail } from './components/TechniqueDetail';
import { AnimatePresence } from 'framer-motion';

// Wrapper to enable route transition animations
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuestionario" element={<Questionnaire />} />
                <Route path="/resultados" element={<Results />} />
                <Route path="/tecnica/:id" element={<TechniqueDetail />} />
            </Routes>
        </AnimatePresence>
    );
};

const App = () => {
  return (
    <AssessmentProvider>
        <Router>
            <Layout>
                <AnimatedRoutes />
            </Layout>
        </Router>
    </AssessmentProvider>
  );
};

export default App;