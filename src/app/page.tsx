import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Leaf, HeartPulse, Sparkles, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <main className="flex-1">
        <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Mulher se alongando em um ambiente natural"
            fill
            className="object-cover -z-10"
            data-ai-hint="woman stretching"
            priority
          />
          <div className="absolute inset-0 bg-black/60 -z-10" />
          <div className="container px-4 md:px-6">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Bem-vinda ao Diástase ZERO
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Recupere sua força e confiança com nosso programa de 21 dias, desenhado por especialistas para fechar a diástase abdominal de forma segura e eficaz.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="font-bold group">
                  <a href="#programa">
                    Conheça o Programa
                    <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="programa" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-semibold">
                O Programa
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Transformação em 21 Dias
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nosso método exclusivo combina exercícios específicos, orientação nutricional e suporte contínuo para garantir que você alcance os melhores resultados.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src="https://picsum.photos/600/600"
                width="600"
                height="600"
                alt="Transformação antes e depois"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-lg"
                data-ai-hint="fitness transformation"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                            <Leaf className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-headline">Exercícios Focados</h3>
                      </div>
                      <p className="text-muted-foreground ml-11">
                        Rotinas diárias de 15 minutos que você pode fazer em qualquer lugar, sem necessidade de equipamentos.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                            <HeartPulse className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-headline">Guia Nutricional</h3>
                      </div>
                      <p className="text-muted-foreground ml-11">
                        Planos alimentares simples e deliciosos que promovem a cura e o bem-estar de dentro para fora.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <Sparkles className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold font-headline">Resultados Visíveis</h3>
                        </div>
                      <p className="text-muted-foreground ml-11">
                        Junte-se a milhares de mulheres que transformaram seus corpos e recuperaram a autoestima.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-accent/20">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                        Pronta para começar sua jornada?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Dê o primeiro passo para um abdômen mais forte e uma vida mais saudável. Seu corpo merece esse cuidado.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Button size="lg" className="font-bold">
                        Quero Iniciar a Transformação
                    </Button>
                </div>
            </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Diástase ZERO. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Termos de Serviço
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Política de Privacidade
          </a>
        </nav>
      </footer>
    </div>
  );
}
