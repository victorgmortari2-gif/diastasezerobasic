import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, BookOpen, Gift, Zap, Users, Lock, Clock, ArrowRight, Star, Heart, TrendingUp, Monitor, Zap as ZapIcon, CircleCheckBig, HeartPulse, Dumbbell, Anchor } from "lucide-react";
import { modules } from "@/lib/modules";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-12 md:py-20 text-center">
            <div className="container px-4 md:px-6">
                <div className="flex justify-center mb-6">
                    <Image 
                        src="https://i.imgur.com/MR1cyee.png"
                        alt="Diástase Zero Logo" 
                        width={250} 
                        height={62.5}
                        className='mx-auto'
                    />
                </div>
                <h1 className="font-headline text-3xl md:text-5xl font-bold text-foreground">
                    Bem-vinda ao Desafio <span className="text-blue-600">Básico</span> do <span className="text-primary">Diástase Zero</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                    Transforme sua barriga e recupere sua autoestima com exercícios simples, rápidos e eficientes.
                </p>
                <Button size="lg" className="mt-6 font-bold text-lg p-8 transition-transform duration-300 hover:scale-105" asChild>
                    <Link href="#modulos">ACESSAR MÓDULOS <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
        </section>
        
        {/* Journey Section */}
        <section className="bg-white py-16 px-4 sm:py-24">
          <div className="container px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Sua Jornada de Transformação</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
              Durante 21 dias, você terá acesso a módulos exclusivos que vão te guiar passo a passo para acabar com a diástase e conquistar um abdômen firme e saudável.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <TrendingUp className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-bold text-xl font-headline">Progressivo</h3>
                <p className="mt-2 text-muted-foreground">Cada módulo evolui com você</p>
              </div>
              <div className="flex flex-col items-center">
                <Monitor className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-bold text-xl font-headline">Acessível</h3>
                <p className="mt-2 text-muted-foreground">Em qualquer dispositivo</p>
              </div>
              <div className="flex flex-col items-center">
                <ZapIcon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-bold text-xl font-headline">Prático</h3>
                <p className="mt-2 text-muted-foreground">Exercícios rápidos e eficientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section id="modulos" className="py-12 md:py-24 bg-[#F9F5F2]">
            <div className="container px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">
                        Conheça os Módulos do Desafio
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                        Um guia completo para você fortalecer seu abdômen e recuperar a confiança.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {modules.map((module) => {
                      const Icon = module.icon;
                      return (
                        <Link href={`/modulos/${module.slug}`} key={module.slug} className="group">
                          <Card className="flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full bg-white">
                              <CardHeader>
                                  <CardTitle className="font-headline flex items-center gap-3">
                                      <Icon className="h-8 w-8 text-primary" />
                                      {module.title}
                                  </CardTitle>
                                  <CardDescription>{module.days}</CardDescription>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                  <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                                      {module.shortPoints.map((point, i) => (
                                        <li key={i}>{point}</li>
                                      ))}
                                  </ul>
                              </CardContent>
                              <div className="p-6 pt-0 mt-4">
                                  <span className="font-bold text-primary flex items-center gap-2">
                                      Acessar módulo
                                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                                  </span>
                              </div>
                          </Card>
                        </Link>
                      )
                    })}
                </div>
            </div>
        </section>
        
        {/* Premium Upgrade Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Preparada para acelerar a transformação da sua barriga e conquistar bônus exclusivos?
              </h2>
            </div>
            <Card className="mt-10 bg-primary text-primary-foreground border-2 border-accent shadow-xl">
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
                       <Button size="lg" className="mt-6 w-full font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-scale" asChild>
                          <Link href="https://go.tribopay.com.br/cdw8hurwyj" target="_blank" rel="noopener noreferrer">
                            👉 SIM, QUERO O PREMIUM!
                          </Link>
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
          </div>
        </section>

        {/* Exclusive Offers Section */}
        <section className="py-12 md:py-24 bg-accent/20">
            <div className="container px-4 md:px-6">
                <div className="text-center">
                    <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-4">Ofertas Exclusivas para Você</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">Potencialize sua jornada com ferramentas e guias que vão acelerar seus resultados.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader className="items-center">
                            <Gift className="h-10 w-10 text-primary" />
                            <CardTitle className="text-center font-headline text-xl">Plano Alimentar (Secreto) para Desinchar</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col text-center">
                            <p className="text-muted-foreground text-sm flex-grow">Descubra o poder do Plano Alimentar Secreto, seu guia de 30 dias para uma vida sem inchaço e inflamação, com lista de compras e substituições..</p>
                            <p className="text-sm line-through text-muted-foreground mt-4">De R$ 27,90</p>
                            <p className="text-2xl font-bold text-primary">por apenas R$ 14,90</p>
                            <Button className="mt-4 w-full transition-transform duration-300 hover:scale-105" asChild>
                              <Link href="https://go.tribopay.com.br/xxzyjsqss3" target="_blank" rel="noopener noreferrer">
                                Adicionar ao meu acesso
                              </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader className="items-center">
                            <BookOpen className="h-10 w-10 text-primary" />
                            <CardTitle className="text-center font-headline text-xl">Guia Definitivo Para Vestir o que Você Ama</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col text-center">
                            <p className="text-muted-foreground text-sm flex-grow">Técnicas de Automassagem para um corpo leve, os segredos de postura que alongam a silhueta, e dicas de looks que te fazem sentir imparável. Sua confiança é o melhor acessório.</p>
                            <p className="text-sm line-through text-muted-foreground mt-4">De R$ 27,90</p>
                            <p className="text-2xl font-bold text-primary">por apenas R$ 14,90</p>
                            <Button className="mt-4 w-full transition-transform duration-300 hover:scale-105" asChild>
                              <Link href="https://go.tribopay.com.br/b0qxhlcuaf" target="_blank" rel="noopener noreferrer">
                                Quero este guia
                              </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader className="items-center">
                            <Award className="h-10 w-10 text-primary" />
                            <CardTitle className="text-center font-headline text-xl">Protocolo Zero Celulite</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col text-center">
                            <p className="text-muted-foreground text-sm flex-grow">Chegou o momento de encerrar o ciclo das inseguranças. O PROTOCOLO ZERO CELULITE oferece o caminho mais rápido e eficaz para conquistar a pele que você sempre desejou.</p>
                            <p className="text-sm line-through text-muted-foreground mt-4">De R$ 27,90</p>
                            <p className="text-2xl font-bold text-primary">por apenas R$ 14,90</p>
                            <Button className="mt-4 w-full transition-transform duration-300 hover:scale-105" asChild>
                              <Link href="https://go.tribopay.com.br/nasud6qmbv" target="_blank" rel="noopener noreferrer">
                                Continuar minha evolução
                              </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader className="items-center text-center">
                            <div className="flex justify-center">
                                <Zap className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-xl">Inner Journey – Meditações Guiadas</CardTitle>
                            <CardDescription>(Mente em Foco, Corpo em Harmonia)</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col text-center">
                            <p className="text-muted-foreground text-sm flex-grow">Sua transformação começa de dentro. Áudios de 10-25 min para construir disciplina inabalável e blindar sua autoestima. É o equilíbrio emocional que garante sua constância e os seus resultados.</p>
                            <p className="text-sm line-through text-muted-foreground mt-4">De R$ 27,90</p>
                            <p className="text-2xl font-bold text-primary">por apenas R$ 14,90</p>
                            <Button className="mt-4 w-full transition-transform duration-300 hover:scale-105" asChild>
                                <Link href="https://go.tribopay.com.br/prbluqfcdj" target="_blank" rel="noopener noreferrer">
                                    Adicionar meditações
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-10 text-center">
                    <Button size="lg" className="font-bold text-base md:text-xl p-6 md:p-8 animate-pulse-scale" asChild>
                      <Link href="https://go.tribopay.com.br/bvyaujeoan" target="_blank" rel="noopener noreferrer">
                        Adquira todas as ofertas por apenas R$ 39,90
                      </Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
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
