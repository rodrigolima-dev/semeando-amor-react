import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SecaoTitulo from "@/components/comum/SecaoTitulo";
import CardProjeto from "@/components/comum/CardProjeto";
import ShapesDecorativos from "@/components/comum/ShapesDecorativos";
import Botao from "@/components/comum/Botao";
import { useProjetosDestaque } from "@/hooks/useProjetos";

/**
 * Página Inicial (Home)
 * Landing page principal do site Semeando Amor
 */

// Dados dos pilares/valores
const pilares = [
  {
    icone: Heart,
    titulo: "Amor",
    descricao: "O amor é a semente que plantamos em cada ação, transformando vidas e comunidades.",
  },
  {
    icone: Users,
    titulo: "Comunidade",
    descricao: "Juntos somos mais fortes. Construímos pontes entre pessoas e oportunidades.",
  },
  {
    icone: BookOpen,
    titulo: "Educação",
    descricao: "Através do conhecimento, abrimos portas para um futuro cheio de possibilidades.",
  },
  {
    icone: Sparkles,
    titulo: "Esperança",
    descricao: "Acreditamos que cada pequena ação pode gerar grandes transformações.",
  },
];

// Estatísticas (placeholders)
const estatisticas = [
  { numero: "500+", label: "Famílias Atendidas" },
  { numero: "1.200+", label: "Crianças Beneficiadas" },
  { numero: "50+", label: "Voluntários Ativos" },
  { numero: "15", label: "Anos de História" },
];

const PaginaInicial = () => {
  const { data: projetosDestaque, isLoading } = useProjetosDestaque(3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradiente-suave">
        <ShapesDecorativos variante="hero" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primaria/10 text-primaria rounded-full font-corpo font-semibold text-sm"
            >
              🌱 Transformando vidas com amor
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-titulo text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
            >
              Plantamos{" "}
              <span className="text-gradient">sementes de amor</span>
              <br />
              para colher esperança
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-corpo text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Somos uma organização dedicada a transformar realidades através da educação, 
              solidariedade e muito amor. Juntos, construímos um futuro melhor para nossa comunidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link to="/projetos">
                <Botao variante="primario" tamanho="lg">
                  Conheça Nossos Projetos
                  <ArrowRight size={20} />
                </Botao>
              </Link>
              <Link to="/contato">
                <Botao variante="outline" tamanho="lg">
                  Quero Ajudar
                </Botao>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Wave decorativa */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Seção Pilares */}
      <section className="py-20 bg-background relative">
        <ShapesDecorativos variante="simples" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SecaoTitulo
            subtitulo="Nossos Valores"
            titulo="Os pilares que nos guiam"
            descricao="Cada ação da Semeando Amor é fundamentada em valores que acreditamos serem essenciais para transformar vidas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pilares.map((pilar, index) => (
              <motion.div
                key={pilar.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-card hover:bg-verde-suave transition-all duration-500 hover:shadow-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primaria/10 text-primaria mb-6 group-hover:bg-primaria group-hover:text-primaria-foreground transition-all duration-500">
                  <pilar.icone size={32} />
                </div>
                <h3 className="font-titulo text-xl font-semibold text-foreground mb-3">
                  {pilar.titulo}
                </h3>
                <p className="font-corpo text-muted-foreground text-sm leading-relaxed">
                  {pilar.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Estatísticas */}
      <section className="py-20 bg-primaria relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-titulo text-4xl md:text-5xl lg:text-6xl font-bold text-primaria-foreground mb-2">
                  {stat.numero}
                </div>
                <div className="font-corpo text-primaria-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Projetos em Destaque */}
      <section className="py-20 bg-creme relative">
        <ShapesDecorativos variante="secao" />

        <div className="container mx-auto px-4 relative z-10">
          <SecaoTitulo
            subtitulo="Nossos Projetos"
            titulo="Conheça nossas iniciativas"
            descricao="Cada projeto é uma semente plantada com carinho, dedicação e a esperança de um futuro melhor."
          />

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-2xl h-96 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projetosDestaque?.map((projeto, index) => (
                <CardProjeto key={projeto.id} projeto={projeto} indice={index} />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projetos">
              <Botao variante="primario">
                Ver Todos os Projetos
                <ArrowRight size={20} />
              </Botao>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-20 bg-background relative overflow-hidden">
        <ShapesDecorativos variante="hero" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-card p-12 rounded-3xl shadow-elevada"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secundaria/10 text-secundaria mb-6">
              <Heart size={40} className="fill-secundaria" />
            </div>
            
            <h2 className="font-titulo text-3xl md:text-4xl font-bold text-foreground mb-4">
              Faça parte dessa história
            </h2>
            
            <p className="font-corpo text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Sua contribuição pode transformar vidas. Seja um voluntário, faça uma doação 
              ou simplesmente compartilhe nossa causa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Botao variante="secundario" tamanho="lg">
                  Quero Ser Voluntário
                </Botao>
              </Link>
              <Link to="/contato">
                <Botao variante="outline" tamanho="lg">
                  Fazer uma Doação
                </Botao>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PaginaInicial;
