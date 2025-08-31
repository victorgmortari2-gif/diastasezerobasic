import { HeartPulse, Dumbbell, Anchor, LucideIcon } from 'lucide-react';
import { foodPlan } from './food-plan';
import { selfAssessment } from './self-assessment';
import { safeProgression } from './safe-progression';
import { commonErrors } from './common-errors';
import { longTermStrategies } from './long-term-strategies';
import { planningFuture } from './planning-future';

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
    slug: string;
    title: string;
    type: 'Vídeo Aula' | 'Exercício' | 'Material' | 'Avaliação';
    duration: string;
    description: string;
    videoUrl?: string;
    content?: any;
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
        { day: 1, slug: 'introducao-diastase', title: 'Introdução à Diástase Abdominal', type: 'Vídeo Aula', duration: '10 min', description: 'Entenda o que é a diástase, suas causas e como ela afeta seu corpo.', videoUrl: 'https://www.youtube.com/embed/rgfSmmOyJWU' },
        { day: 2, slug: 'respiracao-diafragmatica', title: 'Respiração Diafragmática Guiada', type: 'Exercício', duration: '14 min', description: 'Aprenda a técnica fundamental para ativação do core.', videoUrl: 'https://www.youtube.com/embed/71rJRIjbdEw' },
        { day: 3, slug: 'ativacao-transverso', title: 'Ativação do Transverso Abdominal', type: 'Vídeo Aula', duration: '17 min', description: 'Técnicas para ativar o músculo mais profundo do abdômen.', videoUrl: 'https://www.youtube.com/embed/emEoq-nfi3M' },
        { day: 4, slug: 'alongamentos-posturais', title: 'Alongamentos Posturais', type: 'Exercício', duration: '12 min', description: 'Sequência de alongamentos para melhorar a postura.', videoUrl: 'https://www.youtube.com/embed/hrZ_JTeEkyg' },
        { day: 5, slug: 'plano-alimentar', title: 'Mini Plano Alimentar Anti-inflamatório', type: 'Material', duration: '10 min', description: 'Guia prático com alimentos que auxiliam na recuperação.', content: foodPlan },
        { day: 6, slug: 'pratica-integrada-1', title: 'Prática Integrada - Semana 1', type: 'Exercício', duration: '12 min', description: 'Combinação de todos os exercícios aprendidos.', videoUrl: 'https://www.youtube.com/embed/rF7d-tnuRe4' },
        { day: 7, slug: 'autoavaliacao-1', title: 'Autoavaliação e Planejamento', type: 'Avaliação', duration: '10 min', description: 'Reflita sobre seu progresso e planeje a próxima semana.', content: selfAssessment },
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
        { day: 8, slug: 'progressao-segura', title: 'Progressão Segura de Exercícios', type: 'Material', duration: '18 min', description: 'Como evoluir nos exercícios sem prejudicar a recuperação', content: safeProgression },
        { day: 9, slug: 'ponte-basica', title: 'Ponte Básica e Variações', type: 'Exercício', duration: '9 min', description: 'Fortalecimento dos glúteos e estabilização pélvica', videoUrl: 'https://www.youtube.com/embed/DWY10gV95NY' },
        { day: 10, slug: 'dead-bug', title: 'Dead Bug - Técnica Perfeita', type: 'Vídeo Aula', duration: '2 min', description: 'Exercício fundamental para coordenação e estabilidade', videoUrl: 'https://www.youtube.com/embed/uQfzuKBMJeE' },
        { day: 11, slug: 'elevacao-quadril', title: 'Elevação de Quadril Controlada', type: 'Exercício', duration: '2 min', description: 'Fortalecimento específico para o core posterior', videoUrl: 'https://www.youtube.com/embed/p3Nf4e3ym7w' },
        { day: 12, slug: 'ergonomia', title: 'Ergonomia no Dia a Dia', type: 'Vídeo Aula', duration: '10 min', description: 'Como manter boa postura nas atividades cotidianas', videoUrl: 'https://www.youtube.com/embed/BNnCT6JcvD8' },
        { day: 13, slug: 'circuito-fortalecimento', title: 'Circuito de Fortalecimento', type: 'Exercício', duration: '9 min', description: 'Combinação dos exercícios da semana em sequência', videoUrl: 'https://www.youtube.com/embed/Ke9al-Aliyc' },
        { day: 14, slug: 'correcao-erros', title: 'Correção de Erros Comuns', type: 'Avaliação', duration: '15 min', description: 'Identifique e corrija os principais erros de execução', content: commonErrors },
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
        { day: 15, slug: 'estabilidade-avancados', title: 'Exercícios de Estabilidade Avançados', type: 'Vídeo Aula', duration: '5 min', description: 'Desafios progressivos para consolidar a recuperação', videoUrl: 'https://www.youtube.com/embed/foNekEfsnos' },
        { day: 16, slug: 'prancha-segura', title: 'Prancha e Variações Seguras', type: 'Exercício', duration: '9 min', description: 'Fortalecimento isométrico adaptado para diástase', videoUrl: 'https://www.youtube.com/embed/fV-ZPNOJx0U' },
        { day: 17, slug: 'resistencia-muscular', title: 'Construindo Resistência Muscular', type: 'Vídeo Aula', duration: '12 min', description: 'Estratégias para aumentar a resistência sem sobrecarga', videoUrl: 'https://www.youtube.com/embed/hHYXLiSUsCg' },
        { day: 18, slug: 'rotina-manutencao', title: 'Rotina Completa de Manutenção', type: 'Exercício', duration: '30 min', description: 'Sequência de exercícios para continuar após o programa', videoUrl: 'https://www.youtube.com/embed/fIRl19Hxl6I' },
        { day: 19, slug: 'estrategias-longo-prazo', title: 'Estratégias de Longo Prazo', type: 'Material', duration: '12 min', description: 'Como manter os resultados e continuar progredindo', content: longTermStrategies },
        { day: 20, slug: 'desafio-final', title: 'Desafio Final - Teste de Progresso', type: 'Exercício', duration: '25 min', description: 'Avalie sua evolução com exercícios progressivos' },
        { day: 21, slug: 'planejamento-futuro', title: 'Planejamento Futuro', type: 'Avaliação', duration: '15 min', description: 'Crie seu plano personalizado de manutenção', content: planningFuture },
    ]
  },
];
