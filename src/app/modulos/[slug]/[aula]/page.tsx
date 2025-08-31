import { modules } from '@/lib/modules';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Check, AlertTriangle, ArrowRight, Target, BrainCircuit, Heart, ShieldCheck, Siren, TrendingUp, Goal, Milestone, FileWarning, Lightbulb, Zap, Anchor as AnchorIcon, RefreshCw, Star, Shield, Clock, BookCheck, ClipboardList, ThumbsUp, Crown, Sparkles, CircleCheckBig, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export async function generateStaticParams() {
  const params = modules.flatMap((module) =>
    module.schedule.map((lesson) => ({
      slug: module.slug,
      aula: lesson.slug,
    }))
  );
  return params;
}

export default function LessonPage({ params }: { params: { slug: string; aula: string } }) {
  const module = modules.find((m) => m.slug === params.slug);
  const lesson = module?.schedule.find((l) => l.slug === params.aula);
  const currentModuleIndex = modules.findIndex(m => m.slug === params.slug);
  const nextModule = currentModuleIndex !== -1 && currentModuleIndex < modules.length - 1 ? modules[currentModuleIndex + 1] : null;
  const commonErrorsModule = modules.find(m => m.slug === 'fortalecimento');


  if (!module || !lesson) {
    notFound();
  }

  const FoodPlanContent = () => {
    if (!lesson.content) return null;
    const plan = lesson.content;

    return (
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="font-headline text-2xl font-bold mb-2 text-primary">{plan.titulo_introducao}</h2>
          <p className="text-muted-foreground">{plan.texto_introducao}</p>
        </section>

        {/* Principles */}
        <section>
           <Card className="bg-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">{plan.titulo_principios}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.lista_principios.map((principle: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-primary/90">{principle}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Weekly Menu */}
        <section>
          <h2 className="font-headline text-2xl font-bold mb-4">{plan.titulo_cardapio}</h2>
          <Accordion type="single" collapsible className="w-full">
            {plan.dias.map((dia: any) => (
              <AccordionItem value={dia.dia_semana} key={dia.dia_semana}>
                <AccordionTrigger className="font-bold text-lg hover:no-underline">{dia.dia_semana}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-4 bg-white rounded-md">
                    <div>
                      <h4 className="font-semibold">Café da Manhã:</h4>
                      <p className="text-muted-foreground">{dia.refeicoes.cafe_da_manha}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Almoço:</h4>
                      <p className="text-muted-foreground">{dia.refeicoes.almoco}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lanche da Tarde:</h4>
                      <p className="text-muted-foreground">{dia.refeicoes.lanche_tarde}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Jantar:</h4>
                      <p className="text-muted-foreground">{dia.refeicoes.jantar}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Key Foods */}
        <section>
          <h2 className="font-headline text-2xl font-bold mb-4">{plan.titulo_alimentos}</h2>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Categoria</TableHead>
                  <TableHead className="font-bold">Alimentos</TableHead>
                  <TableHead className="font-bold">Benefícios</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plan.tabela_alimentos.map((item: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.categoria}</TableCell>
                    <TableCell>{item.alimentos}</TableCell>
                    <TableCell>{item.beneficios}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>
        
        {/* Foods to Avoid */}
         <section>
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-red-800">{plan.titulo_evitar}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.lista_evitar.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-red-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>


        {/* Final Note */}
        <section className="text-center mt-8">
            <h3 className="font-headline text-lg font-bold">{plan.titulo_nota}</h3>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{plan.texto_nota}</p>
        </section>
      </div>
    );
  };
  
  const SelfAssessmentContent = () => {
    if (!lesson.content) return null;
    const assessment = lesson.content;

    return (
      <div className="space-y-12">
        {/* Introduction */}
        <section className="text-center">
          <Heart className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
          <h2 className="font-headline text-3xl font-bold text-primary">{assessment.titulo_introducao}</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto text-lg">{assessment.texto_introducao}</p>
        </section>

        {/* Self-Assessment Section */}
        <section>
          <Card>
            <CardHeader>
              <div className='flex items-center gap-3'>
                <BrainCircuit className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">{assessment.titulo_autoavaliacao}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {assessment.perguntas_reflexao.map((question: string, index: number) => (
                  <li key={index} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold mt-1">?</div>
                    <span className="text-muted-foreground">{question}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
        
        {/* Planning Section */}
        <section>
          <Card>
            <CardHeader>
              <div className='flex items-center gap-3'>
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">{assessment.titulo_planejamento}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{assessment.orientacoes_planejamento}</p>
              <ul className="space-y-3">
                {assessment.lista_planejamento.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/10 p-8 rounded-xl">
          <h2 className="font-headline text-2xl font-bold">{assessment.titulo_cta}</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">{assessment.texto_cta}</p>
          {nextModule && (
            <Button size="lg" className="mt-6 font-bold text-lg animate-pulse-scale" asChild>
              <Link href={`/modulos/${nextModule.slug}`}>
                {assessment.texto_botao_cta} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </section>
      </div>
    );
  };
  
  const SafeProgressionContent = () => {
    if (!lesson.content) return null;
    const content = lesson.content;

    return (
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <p className="mt-2 text-muted-foreground max-w-3xl text-lg">{content.texto_introducao}</p>
        </section>

        {/* Golden Rule */}
        <section>
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
                <CardTitle className="font-headline text-xl text-amber-800 flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6"/>
                    {content.titulo_regra_de_ouro}
                </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700">{content.texto_regra_de_ouro}</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Warning Signs */}
        <section>
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
                <CardTitle className="font-headline text-xl text-red-800 flex items-center gap-3">
                    <Siren className="h-6 w-6"/>
                    {content.titulo_sinais_alerta}
                </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {content.lista_sinais.map((item: any, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-red-700">{item.sinal}</h4>
                        <p className="text-red-700/90">{item.descricao}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* 3 Pillars */}
        <section>
          <h2 className="font-headline text-2xl font-bold text-center mb-6">{content.titulo_pilares}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.lista_pilares.map((pilar: any) => (
              <Card key={pilar.pilar_numero} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-xl">
                    {pilar.pilar_numero === 1 && <TrendingUp className="h-6 w-6 text-primary" />}
                    {pilar.pilar_numero === 2 && <Goal className="h-6 w-6 text-primary" />}
                    {pilar.pilar_numero === 3 && <Milestone className="h-6 w-6 text-primary" />}
                    {pilar.titulo_pilar}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <p className="text-muted-foreground">{pilar.descricao_pilar}</p>
                  <div className="text-sm p-3 bg-slate-50 rounded-md">
                    <p><span className='font-bold'>Exemplo:</span> {pilar.exemplo_pilar}</p>
                  </div>
                   <div className="text-sm p-3 bg-green-50 rounded-md border border-green-200">
                    <p><span className='font-bold'>Quando aplicar:</span> {pilar.quando_aplicar}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center bg-primary/10 p-8 rounded-xl mt-8">
          <h2 className="font-headline text-2xl font-bold">{content.titulo_conclusao}</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">{content.texto_conclusao}</p>
        </section>
      </div>
    );
  };
  
  const CommonErrorsContent = () => {
    if (!lesson.content) return null;
    const content = lesson.content;
    const module3 = modules.find(m => m.slug === 'estabilidade');

    return (
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <p className="mt-2 text-muted-foreground max-w-3xl text-lg">{content.texto_introducao}</p>
        </section>

        {/* Common Errors */}
        <section>
          <h3 className="font-headline text-2xl font-bold mb-6">{content.titulo_erros_comuns}</h3>
          <div className="space-y-6">
            {content.lista_erros.map((erro: any, index: number) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-red-50 p-4">
                  <CardTitle className="font-headline text-lg text-red-800 flex items-center gap-3">
                    <FileWarning className="h-6 w-6" />
                    {erro.titulo_erro}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <p className="text-muted-foreground">{erro.descricao_erro}</p>
                  <div className="p-3 bg-green-50 rounded-md border border-green-200 text-green-800 flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 mt-1 flex-shrink-0"/>
                    <div>
                        <h4 className="font-bold">Correção:</h4>
                        <p>{erro.correcao}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center mt-8">
          <h3 className="font-headline text-xl font-bold">{content.titulo_conclusao}</h3>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{content.texto_conclusao}</p>
        </section>
        
        {/* CTA */}
        <section className="text-center bg-primary/10 p-8 rounded-xl">
          <h2 className="font-headline text-2xl font-bold">{content.titulo_cta}</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">{content.texto_cta}</p>
          {module3 && (
            <Button size="lg" className="mt-6 font-bold text-lg animate-pulse-scale" asChild>
              <Link href={`/modulos/${module3.slug}`}>
                 Ir para o Módulo 3 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </section>
      </div>
    );
  };
  
  const LongTermStrategiesContent = () => {
    if (!lesson.content) return null;
    const content = lesson.content;
    const icons = [<RefreshCw className="h-6 w-6 text-primary" />, <Star className="h-6 w-6 text-primary" />, <Zap className="h-6 w-6 text-primary" />, <Shield className="h-6 w-6 text-primary" />];

    return (
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <p className="mt-2 text-muted-foreground max-w-3xl text-lg">{content.texto_introducao}</p>
        </section>

        {/* Pillars */}
        <section>
          <h2 className="font-headline text-2xl font-bold text-center mb-8">{content.titulo_pilares}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.lista_pilares.map((pilar: any, index: number) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-xl">
                    {icons[index]}
                    {pilar.titulo_pilar}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground">{pilar.descricao_pilar}</p>
                  <ul className="space-y-2">
                    {pilar.pontos_chave.map((ponto: string, pIndex: number) => (
                        <li key={pIndex} className="flex items-start gap-3">
                            <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{ponto}</span>
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center bg-primary/10 p-8 rounded-xl mt-8">
          <h2 className="font-headline text-2xl font-bold">{content.titulo_conclusao}</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{content.texto_conclusao}</p>
        </section>
      </div>
    );
  };
  
    const PlanningFutureContent = () => {
    if (!lesson.content) return null;
    const content = lesson.content;

    return (
      <div className="space-y-12">
        {/* Introduction */}
        <section className="text-center">
          <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-3xl font-bold text-primary">{content.titulo_aula}</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto text-lg">{content.texto_introducao}</p>
        </section>
        
        {/* Recap */}
        <section>
          <Card className='bg-slate-50'>
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                    <ThumbsUp className="h-8 w-8 text-primary" />
                    {content.titulo_recapitulacao}
                </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{content.texto_recapitulacao}</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Maintenance Plan */}
        <section>
          <h2 className="font-headline text-2xl font-bold text-center mb-6">{content.titulo_plano_personalizado}</h2>
          <div className="space-y-6">
            {content.instrucoes_plano.map((step: any, index: number) => (
              <Card key={index} className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">{index + 1}</div>
                  <div>
                    <h3 className="font-headline font-bold text-lg">{step.titulo_passo}</h3>
                    <p className="text-muted-foreground">{step.texto_passo}</p>
                  </div>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Premium Upgrade Section */}
        <section className="mt-12 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">
              Sua Jornada Acaba de Começar. Que tal Ir Além?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl mb-8">
              Você tem todas as ferramentas para continuar por conta própria. Mas se você quer levar seus resultados a um novo nível, ter novos desafios, e se aprofundar ainda mais, preparei algo especial para você.
            </p>
            <Card className="bg-primary text-primary-foreground border-2 border-accent shadow-xl text-left">
              <CardContent className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      POR APENAS R$ 12,90
                    </div>
                    <h3 className="font-headline text-3xl font-bold mt-4">Upgrade para o Desafio Premium</h3>
                    <p className="mt-2 text-primary-foreground/90">
                      Está gostando do Desafio Básico? Então aproveite esta oferta única e desbloqueie acesso imediato ao Desafio Premium com todos os módulos avançados e bônus exclusivos.
                    </p>
                    <div className="mt-8 text-center bg-background/20 p-6 rounded-lg">
                       <p className="font-headline text-2xl font-bold text-accent" style={{ textShadow: '0 0 5px black' }}>🔥 OFERTA ESPECIAL</p>
                       <p className="text-5xl font-bold mt-2">R$ 12,90</p>
                       <p className="text-lg line-through opacity-80">de R$ 79,90</p>
                       <p className="text-sm font-bold bg-accent text-accent-foreground rounded-full px-3 py-1 inline-block mt-2">85% OFF</p>
                       <Button size="lg" className="mt-6 w-full font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-scale">
                          👉 SIM, QUERO O PREMIUM!
                       </Button>
                       <p className="text-xs mt-4 flex items-center justify-center gap-4">
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Oferta por tempo limitado</span>
                          <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Pagamento 100% seguro</span>
                        </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-4">O que você recebe no Premium:</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-3"><CircleCheckBig className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span><span className="font-bold">Diagnóstico e Respiração Avançada:</span> Autoteste, hipopressiva, ativação do core profundo e cardápio detox.</span></li>
                      <li className="flex gap-3"><CircleCheckBig className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span><span className="font-bold">Treino Intensivo e Estabilidade:</span> Progressão, workshop "Zere sua diástase" e suplementação.</span></li>
                      <li className="flex gap-3"><CircleCheckBig className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span><span className="font-bold">Remodelagem Corporal:</span> Protocolo avançado, mentoria e plano de 60 dias pós-desafio.</span></li>
                      <li className="flex gap-3"><CircleCheckBig className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span><span className="font-bold">Estética e Postura Feminina:</span> Exercícios para afinar cintura e alinhar postura.</span></li>
                      <li className="flex gap-3"><CircleCheckBig className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span><span className="font-bold">Vida Real, Corpo Forte:</span> Guia de alimentação para mães e rotina de 20 minutos.</span></li>
                    </ul>
                    <h4 className="font-headline text-xl font-bold mt-6 mb-4">Super Bônus do Premium</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <li className="flex items-center gap-2">✨ Todo conteúdo do Desafio Básico</li>
                        <li className="flex items-center gap-2">📚 E-book "Diástase Zero o Ano Todo"</li>
                        <li className="flex items-center gap-2">🧘 Meditação guiada</li>
                        <li className="flex items-center gap-2">💬 Grupo EXCLUSIVO no WhatsApp</li>
                        <li className="flex items-center gap-2">🏆 Certificado digital de conclusão</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
        </section>
        
        {/* Farewell */}
        <section className="text-center mt-12">
            <h3 className="font-headline text-2xl font-bold">{content.titulo_despedida}</h3>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{content.texto_despedida}</p>
        </section>
      </div>
    );
  };


  return (
    <div className="bg-background min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href={`/modulos/${module.slug}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Módulo
            </Link>
          </Button>
          <Link href="/">
            <Image 
                src="https://i.imgur.com/VJtWx2S.png" 
                alt="Diástase Zero Logo" 
                width={90} 
                height={90}
                className='mx-auto'
            />
          </Link>
          <div className="font-headline text-lg font-bold text-primary hidden sm:block">Diástase Zero</div>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-8">
            <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{lesson.title}</h1>
            <p className="mt-2 text-muted-foreground md:text-lg">{lesson.description}</p>
          </section>

          {lesson.videoUrl ? (
            <Card>
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full rounded-lg"
                    style={{ aspectRatio: '16/9' }}
                    src={lesson.videoUrl}
                    title={lesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ) : lesson.content ? (
              lesson.content.titulo_cardapio ? <FoodPlanContent /> 
            : lesson.content.titulo_autoavaliacao ? <SelfAssessmentContent /> 
            : lesson.content.titulo_pilares && lesson.content.lista_pilares[0].exemplo_pilar ? <SafeProgressionContent />
            : lesson.content.titulo_erros_comuns ? <CommonErrorsContent />
            : lesson.content.titulo_pilares && lesson.content.lista_pilares[0].pontos_chave ? <LongTermStrategiesContent />
            : lesson.content.titulo_plano_personalizado ? <PlanningFutureContent />
            : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">O conteúdo desta aula estará disponível em breve.</p>
                </CardContent>
              </Card>
            )
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">O conteúdo desta aula estará disponível em breve.</p>
              </CardContent>
            </Card>
          )}

          {lesson.videoUrl && (
            <section className="mt-8">
                <h2 className="font-headline text-2xl font-bold mb-4">Resumo da Aula</h2>
                <Card>
                <CardContent className="p-6">
                    <p className="text-muted-foreground">
                      {lesson.slug === 'desafio-final' 
                        ? 'Este é o seu momento! Use esta aula para ver o quanto você evoluiu. Compare sua força, controle e consciência corporal com o primeiro dia. Sinta orgulho da sua jornada e do corpo forte que você está construindo. Você é incrível!'
                        : `Nesta aula, você aprenderá os pontos-chave sobre ${lesson.title.toLowerCase()}. Abordaremos os conceitos fundamentais e as melhores práticas para garantir que você execute as técnicas corretamente e com segurança. Prepare-se para dar um passo importante na sua jornada de recuperação!`}
                    </p>
                </CardContent>
                </Card>
            </section>
          )}
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-12">
        <p className="text-xs text-muted-foreground">&copy; 2024 Diástase ZERO. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Política de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
