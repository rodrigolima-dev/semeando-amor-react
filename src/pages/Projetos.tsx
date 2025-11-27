import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SecaoTitulo from "@/components/comum/SecaoTitulo";
import CardProjeto from "@/components/comum/CardProjeto";
import ShapesDecorativos from "@/components/comum/ShapesDecorativos";
import { useTodosProjetos } from "@/hooks/useProjetos";

/**
 * Página de Projetos (Blog)
 * Lista todos os projetos/iniciativas da ONG
 */

const PaginaProjetos = () => {
  const { data: projetos, isLoading, error } = useTodosProjetos();

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
              Nossos Projetos
            </h1>
            <p className="font-corpo text-lg md:text-xl text-muted-foreground leading-relaxed">
              Conheça as iniciativas que desenvolvemos para transformar vidas e construir 
              um futuro mais justo para nossa comunidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lista de Projetos */}
      <section className="py-20 bg-background relative">
        <ShapesDecorativos variante="secao" />

        <div className="container mx-auto px-4 relative z-10">
          <SecaoTitulo
            subtitulo="Iniciativas"
            titulo="Sementes que estamos plantando"
            descricao="Cada projeto é uma oportunidade de transformação. Clique para conhecer mais sobre cada iniciativa."
          />

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-2xl h-96 animate-pulse" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="font-corpo text-muted-foreground">
                Erro ao carregar os projetos. Por favor, tente novamente.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projetos?.map((projeto, index) => (
                <CardProjeto key={projeto.id} projeto={projeto} indice={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA para participar */}
      <section className="py-20 bg-primaria relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,white_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-titulo text-3xl md:text-4xl font-bold text-primaria-foreground mb-4">
              Quer fazer parte de algum projeto?
            </h2>
            <p className="font-corpo text-lg text-primaria-foreground/90 mb-8">
              Entre em contato conosco e descubra como você pode contribuir 
              como voluntário, parceiro ou doador.
            </p>
            <a
              href="/contato"
              className="inline-block bg-background text-primaria px-8 py-4 rounded-lg font-corpo font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Entre em Contato
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PaginaProjetos;
