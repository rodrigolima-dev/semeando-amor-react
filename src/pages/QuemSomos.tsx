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
    ano: "Década de 1990 (estimado)",
    titulo: "As Ações de Dona Braulice Runco",
    descricao:
      "Antes da formalização do projeto, Dona Braulice Runco, mulher de condição financeira privilegiada, dedicou sua vida a ajudar famílias da comunidade. Construíu mais de 30 casas para moradores que viviam em barracos de madeira no Rio das Pedras, tornando-se a grande inspiração e base humana do que futuramente se tornaria o Semeando Amor.",
  },

  {
    ano: "2002",
    titulo: "Início do Projeto Comunitário",
    descricao:
      "O projeto Semeando Amor nasce oficialmente na comunidade Rio das Pedras, com o propósito de melhorar a vida dos moradores, inspirado no legado de solidariedade de Dona Braulice. A atuação começa com foco em alimentação saudável, combate à fome, assistência social e apoio às famílias mais vulneráveis.",
  },

  {
    ano: "2002–2019",
    titulo: "Expansão das Ações de Apoio Social",
    descricao:
      "O Semeando Amor fortalece suas iniciativas: distribuição de alimentos, cozinha sustentável, oficinas educativas, apoio a idosos, pessoas com deficiência e famílias em extrema vulnerabilidade.",
  },

  {
    ano: "2020",
    titulo: "Resposta à Pandemia",
    descricao:
      "Com o impacto da pandemia, o projeto cria turmas de reforço escolar e alfabetização para crianças prejudicadas no ensino remoto, oferecendo aulas semanais e lanches nutritivos preparados na própria instituição.",
  },

  {
    ano: "2020–2021",
    titulo: "Ações Comunitárias para Crianças",
    descricao:
      "O projeto organiza eventos como Dia das Crianças e Natal, com brincadeiras, caça ao tesouro, entrega de brinquedos e apadrinhamento de famílias — fortalecendo o vínculo entre comunidade e instituição.",
  },

  {
    ano: "2021",
    titulo: "Curso de Gastronomia Sustentável",
    descricao:
      "É criado um curso completo, com duração superior a um ano, ensinando técnicas de aproveitamento integral dos alimentos e preparando moradores para geração de renda. (PDF)",
  },

  {
    ano: "2021–2022",
    titulo: "Oficinas de Profissionalização",
    descricao:
      "O Semeando Amor inicia oficinas para capacitar mulheres da comunidade em manicure e pedicure, oferecendo treinamento prático e orientação para independência financeira. (PDF)",
  },

  {
    ano: "2022–2024",
    titulo: "Atuação por Direitos e Combate à Pobreza",
    descricao:
      "O projeto passa a integrar ações voltadas à promoção de direitos e defesa da renda básica universal, reforçando que erradicar a fome exige políticas de geração de emprego e dignidade. (PDF)",
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
                titulo="Mais de 23 anos semeando esperança"
                alinhamento="left"
                className="mb-0"
              />
              
              <div className="space-y-4 font-corpo text-muted-foreground leading-relaxed">
                <p>
                  A trajetória do Semeando Amor tem origem no trabalho dedicado de Dona Braulice Runco, a “Vózinha”, 
                  que por muitos anos ajudou famílias da comunidade de Rio das Pedras. Com enorme generosidade, 
                  ela construiu mais de 30 casas para moradores que viviam em barracos de madeira e se tornou 
                  referência de solidariedade e cuidado com o próximo. Seu exemplo inspirou a continuidade do trabalho 
                  social que, em 2002, passou a ser organizado sob o nome Semeando Amor.
                </p>

                <p>
                  Desde então, o projeto atua para melhorar a qualidade de vida dos moradores da região, 
                  especialmente na área mais vulnerável da comunidade. As iniciativas incluem combate à fome, 
                  educação alimentar sustentável, distribuição de alimentos, assistência social e apoio a famílias 
                  em extrema vulnerabilidade, com atenção especial a idosos, pessoas com deficiência e crianças.
                </p>

                <p>
                  Durante a pandemia, o Semeando Amor identificou prejuízos no aprendizado de crianças de baixa renda 
                  e criou turmas de reforço escolar com apoio de voluntários. As aulas semanais atendem grupos pequenos 
                  e oferecem lanches nutritivos preparados na própria cozinha do projeto.
                </p>

                <p>
                  O projeto também realiza ações que fortalecem o vínculo com a comunidade, como festas do Dia das 
                  Crianças e Natal, atividades educativas e oficinas que ensinam práticas de alimentação saudável. 
                  Cada iniciativa mantém vivo o legado de Dona Braulice, um compromisso permanente com a solidariedade, 
                  o acolhimento e o amor ao próximo.
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
                src="https://odnuwqoevzorskzfzcgv.supabase.co/storage/v1/object/public/semeandoamor/vobraulice.jpeg"
                alt="Equipe Semeando Amor em ação"
                className="rounded-2xl shadow-elevada w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primaria text-primaria-foreground p-6 rounded-2xl shadow-lg">
                <div className="font-titulo text-4xl font-bold">23+</div>
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
                Promover o direito à alimentação saudável, assim como o acesso a emprego e renda, atuando nas frentes de combate à fome, educação para alimentação sustentável, assistência social e empregabilidade.
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
                Melhorar a vida dos moradores da comunidade Rio das Pedras através de ações contínuas de apoio social, educação, alimentação e profissionalização desses moradores.
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
    </Layout>
  );
};

export default PaginaQuemSomos;
