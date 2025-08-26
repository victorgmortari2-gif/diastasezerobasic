import { HeartPulse, Dumbbell, Anchor, LucideIcon } from 'lucide-react';

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
    type: 'Vídeo' | 'Texto' | 'Exercício';
    duration: string;
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
        { day: 1, title: 'Boas-vindas e Introdução à Diástase', type: 'Vídeo', duration: '10 min' },
        { day: 2, title: 'Guia Completo da Respiração Diafragmática', type: 'Vídeo', duration: '15 min' },
        { day: 3, title: 'Exercício Prático: Ativando o Transverso', type: 'Exercício', duration: '5 min' },
        { day: 4, title: 'Alongamentos para uma Postura de Rainha', type: 'Exercício', duration: '10 min' },
        { day: 5, title: 'O Poder da Alimentação Anti-inflamatória', type: 'Texto', duration: 'Leitura de 5 min' },
        { day: 6, title: 'Prática Guiada: Respiração e Ativação', type: 'Exercício', duration: '10 min' },
        { day: 7, title: 'Recapitulando a Semana 1', type: 'Vídeo', duration: '5 min' },
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
        { day: 8, title: 'Introdução aos Exercícios de Força', type: 'Vídeo', duration: '8 min' },
        { day: 9, title: 'Exercício Prático: Ponte e Variações', type: 'Exercício', duration: '10 min' },
        { day: 10, title: 'Exercício Prático: Dead Bug e Controle', type: 'Exercício', duration: '10 min' },
        { day: 11, title: 'Ergonomia para Mães: Cuidando da Postura', type: 'Vídeo', duration: '12 min' },
        { day: 12, title: 'Alimentos que Curam: Nutrição e Diástase', type: 'Texto', duration: 'Leitura de 7 min' },
        { day: 13, title: 'Aula Especial: Erros Comuns da Diástase', type: 'Vídeo', duration: '15 min' },
        { day: 14, title: 'Prática Completa da Semana 2', type: 'Exercício', duration: '15 min' },
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
        { day: 15, title: 'A Importância da Estabilidade do Core', type: 'Vídeo', duration: '7 min' },
        { day: 16, title: 'Treino de Estabilidade - Dia 1', type: 'Exercício', duration: '15 min' },
        { day: 17, title: 'Treino de Estabilidade - Dia 2', type: 'Exercício', duration: '15 min' },
        { day: 18, title: 'O Ciclo do Sono e a Recuperação Abdominal', type: 'Texto', duration: 'Leitura de 5 min' },
        { day: 19, title: 'Treino de Estabilidade - Dia 3 (com desafio)', type: 'Exercício', duration: '15 min' },
        { day: 20, title: 'Aula Final: Como Manter Seus Resultados', type: 'Vídeo', duration: '18 min' },
        { day: 21, title: 'Parabéns! Seus Próximos Passos', type: 'Vídeo', duration: '5 min' },
    ]
  },
];

    