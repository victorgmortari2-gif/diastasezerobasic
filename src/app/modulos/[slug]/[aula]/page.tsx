import { modules } from '@/lib/modules';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Check, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function LessonPage({ params }: { params: { slug: string; aula: string } }) {
  const module = modules.find((m) => m.slug === params.slug);
  const lesson = module?.schedule.find((l) => l.slug === params.aula);

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
          <div className="font-headline text-lg font-bold text-primary">Diástase Zero</div>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-8">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">{lesson.title}</h1>
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
            <FoodPlanContent />
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
                    Nesta aula, você aprenderá os pontos-chave sobre {lesson.title.toLowerCase()}. Abordaremos os conceitos fundamentais e as melhores práticas para garantir que você execute as técnicas corretamente e com segurança. Prepare-se para dar um passo importante na sua jornada de recuperação!
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
