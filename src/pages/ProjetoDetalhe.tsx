import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ShapesDecorativos from "@/components/comum/ShapesDecorativos";
import Botao from "@/components/comum/Botao";
import { useProjeto } from "@/hooks/useProjetos";

/**
 * Página de Detalhe do Projeto
 * Exibe informações completas de um projeto específico
 */

const PaginaProjetoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const { data: projeto, isLoading, error } = useProjeto(id || "");

  // ⚠️ Todos os hooks precisam vir antes de qualquer return condicional
  // Lista de imagens (sempre pelo menos 0, para não quebrar)
  const imagens =
    projeto?.imagens && projeto.imagens.length > 0
      ? projeto.imagens
      : projeto?.imagem
      ? [projeto.imagem]
      : [];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    if (imagens.length === 0) return;
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    if (imagens.length === 0) return;
    setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  // Formata o conteúdo em parágrafos (evita erro se conteudo não existir ainda)
  const paragrafos = projeto?.conteudo
    ? projeto.conteudo.split("\n\n")
    : [];

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primaria border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="font-corpo text-muted-foreground">
              Carregando projeto...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !projeto) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-titulo text-2xl font-bold text-foreground mb-4">
              Projeto não encontrado
            </h2>
            <p className="font-corpo text-muted-foreground mb-6">
              O projeto que você está procurando não existe ou foi removido.
            </p>
            <Link to="/projetos">
              <Botao variante="primario">
                <ArrowLeft size={20} />
                Voltar aos Projetos
              </Botao>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const imagemHero = imagens[indiceAtual] ?? projeto.imagem;

  return (
    <Layout>
      {/* Hero com imagem (usando a imagem atual do carrossel, se existir) */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={imagemHero}
          alt={projeto.titulo}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 text-background/80 hover:text-background font-corpo font-semibold mb-4 transition-colors"
              >
                <ArrowLeft size={20} />
                Voltar aos Projetos
              </Link>

              <h1 className="font-titulo text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight">
                {projeto.titulo}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 bg-background relative">
        <ShapesDecorativos variante="simples" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border"
            >
              <span className="inline-flex items-center gap-2 text-muted-foreground font-corpo text-sm">
                <Calendar size={16} />
                Atualizado recentemente
              </span>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: projeto.titulo,
                      text: projeto.resumo,
                      url: window.location.href,
                    });
                  }
                }}
                className="inline-flex items-center gap-2 text-primaria hover:text-primaria-escura font-corpo font-semibold text-sm transition-colors ml-auto"
              >
                <Share2 size={16} />
                Compartilhar
              </button>
            </motion.div>

            {/* Resumo destacado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-verde-suave p-6 rounded-2xl mb-8"
            >
              <p className="font-corpo text-lg text-foreground leading-relaxed">
                {projeto.resumo}
              </p>
            </motion.div>

            {/* Galeria de imagens (carrossel) */}
            {imagens.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mb-10"
              >
                <h3 className="font-titulo text-xl font-semibold text-foreground mb-4">
                  Galeria deste projeto
                </h3>

                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <motion.img
                    key={imagens[indiceAtual]}
                    src={imagens[indiceAtual]}
                    alt={`${projeto.titulo} - imagem ${indiceAtual + 1}`}
                    className="w-full h-72 md:h-96 object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Botões de navegação */}
                  <button
                    type="button"
                    onClick={imagemAnterior}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background px-3 py-2 rounded-full shadow-md transition"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={proximaImagem}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background px-3 py-2 rounded-full shadow-md transition"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Dots de indicação */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {imagens.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setIndiceAtual(index)}
                        className={`w-2.5 h-2.5 rounded-full border border-background ${
                          index === indiceAtual
                            ? "bg-primaria"
                            : "bg-background/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Conteúdo principal */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              {paragrafos.map((paragrafo, index) => {
                if (paragrafo.includes("•")) {
                  const items = paragrafo
                    .split("•")
                    .filter((item) => item.trim());
                  return (
                    <ul key={index} className="space-y-2 mb-6">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 font-corpo text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-primaria rounded-full mt-2 flex-shrink-0" />
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p
                    key={index}
                    className="font-corpo text-muted-foreground leading-relaxed mb-6"
                  >
                    {paragrafo}
                  </p>
                );
              })}
            </motion.article>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 p-8 bg-card rounded-2xl shadow-card text-center"
            >
              <h3 className="font-titulo text-2xl font-semibold text-foreground mb-4">
                Quer participar deste projeto?
              </h3>
              <p className="font-corpo text-muted-foreground mb-6">
                Entre em contato conosco e descubra como você pode contribuir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Botao variante="primario">Quero Ajudar</Botao>
                </Link>
                <Link to="/projetos">
                  <Botao variante="outline">Ver Outros Projetos</Botao>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaginaProjetoDetalhe;
