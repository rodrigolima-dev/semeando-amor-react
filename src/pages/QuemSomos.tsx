import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SecaoTitulo from "@/components/comum/SecaoTitulo";
import ShapesDecorativos from "@/components/comum/ShapesDecorativos";

/**
 * Página Quem Somos
 * Informações institucionais sobre a ONG
 */

// Timeline da história (placeholder)
const timeline = [
  {
    ano: "2009",
    titulo: "O Início",
    descricao: "Um grupo de amigos decidiu fazer a diferença em sua comunidade, dando início à Semeando Amor.",
  },
  {
    ano: "2012",
    titulo: "Primeira Sede",
    descricao: "Inauguramos nossa primeira sede, um espaço dedicado às atividades com crianças e famílias.",
  },
  {
    ano: "2016",
    titulo: "Expansão",
    descricao: "Ampliamos nossos projetos para atender mais comunidades na região metropolitana.",
  },
  {
    ano: "2020",
    titulo: "Resposta à Pandemia",
    descricao: "Mobilizamos recursos para ajudar famílias afetadas pela crise sanitária.",
  },
  {
    ano: "2024",
    titulo: "Novos Horizontes",
    descricao: "Celebramos 15 anos de história com novos projetos e parcerias estratégicas.",
  },
];

// Equipe (placeholder)
const equipe = [
  {
    nome: "Maria Silva",
    cargo: "Presidente",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    nome: "João Santos",
    cargo: "Diretor de Projetos",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    nome: "Ana Oliveira",
    cargo: "Coordenadora Social",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    nome: "Pedro Costa",
    cargo: "Coordenador de Voluntários",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
];

const PaginaQuemSomos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-gradiente-suave overflow-hidden">
        <ShapesDecorativos variante="hero" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-titulo text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Quem Somos
            </h1>
            <p className="font-corpo text-lg md:text-xl text-muted-foreground leading-relaxed">
              Conheça a história, missão e as pessoas que fazem a Semeando Amor acontecer todos os dias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <SecaoTitulo
                subtitulo="Nossa História"
                titulo="15 anos semeando esperança"
                alinhamento="left"
                className="mb-0"
              />
              
              <div className="space-y-4 font-corpo text-muted-foreground leading-relaxed">
                <p>
                  A Semeando Amor nasceu em 2009, quando um pequeno grupo de amigos decidiu 
                  transformar a indignação diante das desigualdades em ação concreta. O que 
                  começou como uma iniciativa modesta de distribuição de alimentos, rapidamente 
                  se transformou em um movimento de transformação social.
                </p>
                <p>
                  Ao longo dos anos, expandimos nossas atividades para incluir educação, 
                  capacitação profissional e apoio familiar. Hoje, somos uma referência em 
                  nossa comunidade, impactando positivamente milhares de vidas.
                </p>
                <p>
                  Nossa força vem das pessoas: voluntários dedicados, parceiros comprometidos 
                  e, principalmente, das famílias que confiam em nosso trabalho. Juntos, 
                  provamos que é possível construir um mundo mais justo e amoroso.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800"
                alt="Equipe Semeando Amor em ação"
                className="rounded-2xl shadow-elevada w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primaria text-primaria-foreground p-6 rounded-2xl shadow-lg">
                <div className="font-titulo text-4xl font-bold">15+</div>
                <div className="font-corpo text-sm">Anos de história</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-creme relative">
        <ShapesDecorativos variante="secao" />

        <div className="container mx-auto px-4 relative z-10">
          <SecaoTitulo
            subtitulo="Propósito"
            titulo="Missão, Visão e Valores"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-2xl shadow-card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primaria/10 text-primaria mb-6">
                <Target size={32} />
              </div>
              <h3 className="font-titulo text-2xl font-semibold text-foreground mb-4">
                Missão
              </h3>
              <p className="font-corpo text-muted-foreground leading-relaxed">
                Transformar vidas através de ações sociais que promovam educação, 
                dignidade e oportunidades para famílias em situação de vulnerabilidade.
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secundaria/10 text-secundaria mb-6">
                <Eye size={32} />
              </div>
              <h3 className="font-titulo text-2xl font-semibold text-foreground mb-4">
                Visão
              </h3>
              <p className="font-corpo text-muted-foreground leading-relaxed">
                Ser referência em transformação social, construindo comunidades mais 
                justas, onde todos tenham acesso a oportunidades de desenvolvimento.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primaria/10 text-primaria mb-6">
                <Heart size={32} />
              </div>
              <h3 className="font-titulo text-2xl font-semibold text-foreground mb-4">
                Valores
              </h3>
              <p className="font-corpo text-muted-foreground leading-relaxed">
                Amor, transparência, respeito à dignidade humana, compromisso social 
                e trabalho colaborativo guiam todas as nossas ações.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SecaoTitulo
            subtitulo="Trajetória"
            titulo="Nossa linha do tempo"
          />

          <div className="relative">
            {/* Linha central (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.ano}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Conteúdo */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-card inline-block">
                      <span className="inline-block px-3 py-1 bg-primaria/10 text-primaria rounded-full font-corpo font-semibold text-sm mb-3">
                        {item.ano}
                      </span>
                      <h3 className="font-titulo text-xl font-semibold text-foreground mb-2">
                        {item.titulo}
                      </h3>
                      <p className="font-corpo text-muted-foreground text-sm">
                        {item.descricao}
                      </p>
                    </div>
                  </div>

                  {/* Marcador central */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primaria rounded-full border-4 border-background shadow-sm" />

                  {/* Espaço do outro lado */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-creme relative">
        <ShapesDecorativos variante="simples" />

        <div className="container mx-auto px-4 relative z-10">
          <SecaoTitulo
            subtitulo="Nossa Equipe"
            titulo="Pessoas que fazem acontecer"
            descricao="Conheça os rostos por trás da transformação social que promovemos diariamente."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membro, index) => (
              <motion.div
                key={membro.nome}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={membro.foto}
                    alt={membro.nome}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primaria/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-titulo text-lg font-semibold text-foreground">
                  {membro.nome}
                </h3>
                <p className="font-corpo text-sm text-muted-foreground">
                  {membro.cargo}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaginaQuemSomos;
