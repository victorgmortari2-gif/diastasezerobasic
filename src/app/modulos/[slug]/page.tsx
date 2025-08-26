import { modules } from '@/lib/modules';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Video, BookText, Activity, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function ModulePage({ params }: { params: { slug: string } }) {
  const module = modules.find((m) => m.slug === params.slug);

  if (!module) {
    notFound();
  }

  const Icon = module.icon;

  const contentTypeIcon = (type: string) => {
    switch (type) {
        case 'Vídeo Aula': return <Video className="h-6 w-6 text-primary" />;
        case 'Exercício': return <Activity className="h-6 w-6 text-primary" />;
        case 'Material': return <BookText className="h-6 w-6 text-primary" />;
        case 'Avaliação': return <GraduationCap className="h-6 w-6 text-primary" />;
        default: return null;
    }
  }

  return (
    <div className="bg-background min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/#modulos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Módulos
            </Link>
          </Button>
           <Link href="/">
            <Image 
                src="https://i.imgur.com/VJtWx2S.png" 
                alt="Diástase Zero Logo" 
                width={70} 
                height={70}
                className='mx-auto'
            />
          </Link>
          <div className="font-headline text-lg font-bold text-primary">Diástase Zero</div>
        </div>
      </header>
      
      <main className="container px-4 md:px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Icon className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold">{module.title}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">{module.longDescription}</p>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content: Schedule */}
          <div className="lg:col-span-2">
            <h2 className="font-headline text-2xl font-bold mb-6">Conteúdo Programático da Semana</h2>
            <div className="space-y-4">
                {module.schedule.map(item => (
                  <Link key={item.day} href={`/modulos/${module.slug}/${item.slug}`} className="block group">
                    <Card className="transition-shadow duration-300 hover:shadow-lg bg-white">
                        <CardContent className="p-4 md:p-6 flex items-start gap-4 md:gap-6">
                           <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold text-lg">
                                    {item.day}
                                </div>
                           </div>
                           <div className="flex-grow">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        {contentTypeIcon(item.type)}
                                        <h3 className="font-bold text-base md:text-lg">{item.type}</h3>
                                    </div>
                                    <Badge variant="secondary" className="mt-2 sm:mt-0">{item.duration}</Badge>
                                </div>
                                <h4 className="font-headline text-lg md:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className="text-muted-foreground text-sm md:text-base">{item.description}</p>
                           </div>
                        </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
          
          {/* Sidebar: Objectives */}
          <aside>
            <div className="sticky top-24">
                <Card className="bg-slate-50">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Objetivos de Aprendizagem</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {module.objectives.map((objective, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{objective}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
          </aside>
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
