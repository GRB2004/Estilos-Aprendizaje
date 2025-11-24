import { Question, LearningStyleInfo, Technique } from './types';

// Simplified question set for demonstration (normally 80 questions)
// We map 4 questions per style for this demo to ensure quick testing.
export const QUESTIONS: Question[] = [
  // Activo
  { id: 1, text: "Me gusta la acción y la participación activa en los asuntos.", style: 'Activo' },
  { id: 2, text: "Me siento a gusto con personas espontáneas y divertidas.", style: 'Activo' },
  { id: 3, text: "Me aburro enseguida con el trabajo metódico y minucioso.", style: 'Activo' },
  { id: 4, text: "Me gusta probar cosas nuevas, aunque no sepa si funcionarán.", style: 'Activo' },
  
  // Reflexivo
  { id: 5, text: "Prefiero escuchar a los demás antes de expresar mi opinión.", style: 'Reflexivo' },
  { id: 6, text: "Soy prudente a la hora de sacar conclusiones.", style: 'Reflexivo' },
  { id: 7, text: "Me gusta analizar los datos con detenimiento antes de decidir.", style: 'Reflexivo' },
  { id: 8, text: "Disfruto observando cómo actúan los demás.", style: 'Reflexivo' },

  // Teórico
  { id: 9, text: "Me gusta que las cosas sigan un orden lógico y racional.", style: 'Teórico' },
  { id: 10, text: "Me molestan las personas que no tienen las ideas claras.", style: 'Teórico' },
  { id: 11, text: "Tiendo a ser perfeccionista en mis trabajos.", style: 'Teórico' },
  { id: 12, text: "Busco la objetividad en todos los asuntos.", style: 'Teórico' },

  // Pragmático
  { id: 13, text: "Me gusta experimentar y poner en práctica las nuevas ideas.", style: 'Pragmático' },
  { id: 14, text: "Me impaciento cuando me dan explicaciones teóricas.", style: 'Pragmático' },
  { id: 15, text: "Valoro más la práctica que la teoría.", style: 'Pragmático' },
  { id: 16, text: "Me gustan las soluciones prácticas a los problemas.", style: 'Pragmático' },
];

export const STYLES_INFO: Record<string, LearningStyleInfo> = {
  'Activo': {
    name: 'Activo',
    description: 'Las personas con predominancia en estilo Activo se implican plenamente y sin prejuicios en nuevas experiencias. Son de mente abierta, nada escépticos y acometen con entusiasmo las tareas nuevas. Sus días están llenos de actividad.',
    characteristics: ['Animador', 'Improvisador', 'Descubridor', 'Arriesgado', 'Espontáneo', 'Creativo']
  },
  'Reflexivo': {
    name: 'Reflexivo',
    description: 'A los Reflexivos les gusta considerar las experiencias y observarlas desde diferentes perspectivas. Recogen datos, analizándolos con detenimiento antes de llegar a alguna conclusión. Son prudentes y consideran todas las alternativas.',
    characteristics: ['Ponderado', 'Concienzudo', 'Receptivo', 'Analítico', 'Exhaustivo', 'Observador']
  },
  'Teórico': {
    name: 'Teórico',
    description: 'Los Teóricos adaptan e integran las observaciones dentro de teorías lógicas y complejas. Enfocan los problemas de forma vertical escalonada, por etapas lógicas. Tienden a ser perfeccionistas. Les gusta analizar y sintetizar.',
    characteristics: ['Metódico', 'Lógico', 'Objetivo', 'Crítico', 'Estructurado', 'Disciplinado']
  },
  'Pragmático': {
    name: 'Pragmático',
    description: 'El punto fuerte de los Pragmáticos es la aplicación práctica de las ideas. Descubren el aspecto positivo de las nuevas ideas y aprovechan la primera oportunidad para experimentarlas. Actúan rápidamente y con seguridad.',
    characteristics: ['Experimentador', 'Práctico', 'Directo', 'Eficaz', 'Realista', 'Rápido']
  }
};

export const TECHNIQUES: Technique[] = [
  // Activo
  {
    id: 101,
    style: 'Activo',
    title: 'Aprendizaje Basado en Proyectos',
    description: 'Aprende haciendo. Involúcrate en proyectos reales donde puedas aplicar conocimientos inmediatamente.',
    details: `
      <h3>¿En qué consiste?</h3>
      <p>El ABP te permite adquirir conocimientos y competencias clave a través de la elaboración de proyectos que dan respuesta a problemas de la vida real.</p>
      <h4>Pasos recomendados:</h4>
      <ul>
        <li>Elige un tema que te apasione.</li>
        <li>Plantea una pregunta guía.</li>
        <li>Investiga activamente, no solo leyendo.</li>
        <li>Crea un producto final tangible.</li>
      </ul>
    `,
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 102,
    style: 'Activo',
    title: 'Gamificación',
    description: 'Convierte el estudio en un juego. Usa recompensas y competencias para mantener el interés.',
    details: '<p>Utiliza plataformas como Kahoot o crea tus propios desafíos de tiempo para hacer el estudio emocionante.</p>',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  // Reflexivo
  {
    id: 201,
    style: 'Reflexivo',
    title: 'Diario de Aprendizaje',
    description: 'Registra tus pensamientos y analiza lo que has aprendido después de cada sesión.',
    details: `
      <h3>La técnica del Diario</h3>
      <p>Escribir ayuda a procesar la información. Dedica 10 minutos al final del día para responder:</p>
      <ul>
        <li>¿Qué he aprendido hoy?</li>
        <li>¿Cómo se conecta esto con lo que ya sabía?</li>
        <li>¿Qué dudas tengo todavía?</li>
      </ul>
    `,
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 202,
    style: 'Reflexivo',
    title: 'Lectura Profunda',
    description: 'Lee textos complejos, toma notas al margen y reflexiona sobre el significado antes de avanzar.',
    details: '<p>No tengas prisa. Detente en cada párrafo. Busca referencias cruzadas. Tu fortaleza es la profundidad, no la velocidad.</p>',
    imageUrl: 'https://picsum.photos/800/600?random=4'
  },
  // Teórico
  {
    id: 301,
    style: 'Teórico',
    title: 'Mapas Conceptuales Estructurados',
    description: 'Organiza la información jerárquicamente. Encuentra la lógica detrás de los conceptos.',
    details: `
      <h3>Estructura y Lógica</h3>
      <p>Para un teórico, si no tiene lógica, no se aprende. Usa herramientas como CmapTools o Lucidchart.</p>
      <h4>Claves:</h4>
      <ul>
        <li>Identifica los conceptos generales.</li>
        <li>Desglosa en conceptos específicos.</li>
        <li>Usa conectores lógicos (causa-efecto).</li>
      </ul>
    `,
    imageUrl: 'https://picsum.photos/800/600?random=5'
  },
  // Pragmático
  {
    id: 401,
    style: 'Pragmático',
    title: 'Estudio de Casos',
    description: 'Analiza situaciones reales y busca soluciones prácticas aplicables.',
    details: `
      <h3>Aplicación Real</h3>
      <p>No memorices teoría sin saber para qué sirve. Busca ejemplos reales de cómo se aplica ese conocimiento en la industria o la vida diaria.</p>
    `,
    imageUrl: 'https://picsum.photos/800/600?random=6'
  },
];