import { HeartPulse, Dumbbell, Anchor, LucideIcon, BookText, GraduationCap } from 'lucide-react';

export interface Module {
  slug: string;
  title: string;
  days: string;
  icon: LucideIcon;
  shortPoints: string[];
  longDescription: string;
  objectives: string[];
  schedule: {
    day: number;
    title: string;
    type: 'Vídeo Aula' | 'Exercício' | 'Material' | 'Avaliação';
    duration: string;
    description: string;
  }[];
}

export const modules: Module[] = [
  {
    slug: 'reconexao',
    title: 'Módulo 1 – Reconexão',
    days: 'Dias 1 a 7',
    icon: HeartPulse,
    shortPoints: [
        'Introdução à diástase',
        'Respiração diafragmática guiada',
        'Ativação do transverso abdominal',
        'Alongamentos posturais',
        'Mini plano alimentar anti-inflamatório',
    ],
    longDescription: 'Neste primeiro módulo, você vai reaprender a se conectar com seu corpo. Focaremos na base da recuperação: a respiração correta e a ativação dos músculos profundos do abdômen, essenciais para reverter a diástase.',
    objectives: [
        'Entender o que é a diástase e como ela afeta seu corpo.',
        'Dominar a técnica de respiração diafragmática.',
        'Aprender a ativar corretamente o transverso abdominal (seu "espartilho natural").',
        'Melhorar a postura com alongamentos específicos.',
        'Iniciar uma alimentação que ajuda a desinflamar o corpo.',
    ],
    schedule: [
        { day: 1, title: 'Introdução à Diástase Abdominal', type: 'Vídeo Aula', duration: '15 min', description: 'Entenda o que é a diástase, suas causas e como ela afeta seu corpo.' },
        { day: 2, title: 'Respiração Diafragmática Guiada', type: 'Exercício', duration: '10 min', description: 'Aprenda a técnica fundamental para ativação do core.' },
        { day: 3, title: 'Ativação do Transverso Abdominal', type: 'Vídeo Aula', duration: '12 min', description: 'Técnicas para ativar o músculo mais profundo do abdômen.' },
        { day: 4, title: 'Alongamentos Posturais', type: 'Exercício', duration: '15 min', description: 'Sequência de alongamentos para melhorar a postura.' },
        { day: 5, title: 'Mini Plano Alimentar Anti-inflamatório', type: 'Material', duration: '5 min', description: 'Guia prático com alimentos que auxiliam na recuperação.' },
        { day: 6, title: 'Prática Integrada - Semana 1', type: 'Exercício', duration: '20 min', description: 'Combinação de todos os exercícios aprendidos.' },
        { day: 7, title: 'Autoavaliação e Planejamento', type: 'Avaliação', duration: '10 min', description: 'Reflita sobre seu progresso e planeje a próxima semana.' },
    ]
  },
  {
    slug: 'fortalecimento',
    title: 'Módulo 2 – Fortalecimento',
    days: 'Dias 8 a 14',
    icon: Dumbbell,
    shortPoints: [
        'Exercícios: Ponte, dead bug, elevação de quadril',
        'Dicas práticas de ergonomia no dia a dia',
        'Alimentos cicatrizantes para o abdômen',
        'Aula gravada: "Erros comuns da diástase"',
    ],
    longDescription: 'Com a base estabelecida, é hora de fortalecer. Neste módulo, introduzimos exercícios progressivos e seguros para tonificar seu abdômen, além de dicas para aplicar no seu dia a dia e acelerar os resultados.',
    objectives: [
        'Executar com perfeição os exercícios base para fechar a diástase.',
        'Aprender como proteger seu abdômen em tarefas cotidianas.',
        'Conhecer alimentos que auxiliam na cicatrização dos tecidos.',
        'Identificar e evitar os erros mais comuns que atrapalham a recuperação.',
        'Sentir o abdômen mais firme e a postura mais alinhada.',
    ],
     schedule: [
        { day: 8, title: 'Introdução aos Exercícios de Força', type: 'Vídeo Aula', duration: '8 min', description: 'Aprenda a forma correta dos novos movimentos.' },
        { day: 9, title: 'Prática: Ponte e Variações', type: 'Exercício', duration: '10 min', description: 'Fortaleça o core e os glúteos com segurança.' },
        { day: 10, title: 'Prática: Dead Bug e Controle', type: 'Exercício', duration: '10 min', description: 'Aprimore a estabilidade abdominal sem forçar a diástase.' },
        { day: 11, title: 'Ergonomia para Mães', type: 'Vídeo Aula', duration: '12 min', description: 'Dicas de postura para o dia a dia, ao pegar o bebê e amamentar.' },
        { day: 12, title: 'Alimentos que Curam', type: 'Material', duration: '7 min', description: 'Lista de alimentos que ajudam na produção de colágeno e cicatrização.' },
        { day: 13, title: 'Aula Especial: Erros Comuns', type: 'Vídeo Aula', duration: '15 min', description: 'Identifique e corrija os erros que podem piorar a diástase.' },
        { day: 14, title: 'Prática Completa da Semana 2', type: 'Exercício', duration: '15 min', description: 'Integre todos os exercícios de fortalecimento em uma rotina fluida.' },
    ]
  },
  {
    slug: 'estabilidade',
    title: 'Módulo 3 – Estabilidade',
    days: 'Dias 15 a 21',
    icon: Anchor,
    shortPoints: [
        'Treino diário com 5 exercícios evolutivos',
        'Rotina de sono e autocuidado para resultados',
        'Check-list de hábitos saudáveis',
        'Aula: "Como manter os resultados"',
    ],
    longDescription: 'Na reta final, o foco é a estabilidade. Você aprenderá a integrar a força e o controle adquiridos em uma rotina sólida, garantindo que os resultados não apenas apareçam, mas que sejam duradouros.',
    objectives: [
        'Realizar um treino diário rápido e eficiente para máxima estabilidade.',
        'Entender a importância do sono e do autocuidado na recuperação.',
        'Implementar um checklist de hábitos para manter a barriga firme.',
        'Criar um plano para continuar sua evolução após o desafio.',
        'Sentir-se confiante e no controle do seu corpo.',
    ],
    schedule: [
        { day: 15, title: 'A Importância da Estabilidade', type: 'Vídeo Aula', duration: '7 min', description: 'Entenda como um core estável protege sua coluna e melhora a aparência abdominal.' },
        { day: 16, title: 'Treino de Estabilidade - Dia 1', type: 'Exercício', duration: '15 min', description: 'Primeira sequência de exercícios focados em isometria e controle.' },
        { day: 17, title: 'Treino de Estabilidade - Dia 2', type: 'Exercício', duration: '15 min', description: 'Progressão dos exercícios, desafiando seu equilíbrio.' },
        { day: 18, title: 'O Ciclo do Sono e a Recuperação', type: 'Material', duration: '5 min', description: 'Dicas práticas para melhorar a qualidade do seu sono e acelerar os resultados.' },
        { day: 19, title: 'Treino de Estabilidade - Dia 3', type: 'Exercício', duration: '15 min', description: 'Sequência avançada para consolidar a força e o controle do seu core.' },
        { day: 20, title: 'Aula Final: Como Manter Seus Resultados', type: 'Vídeo Aula', duration: '18 min', description: 'Estratégias para incorporar os exercícios na sua rotina e evitar a regressão.' },
        { day: 21, title: 'Parabéns e Próximos Passos', type: 'Avaliação', duration: '5 min', description: 'Celebre sua conquista e receba orientações para o futuro.' },
    ]
  },
];