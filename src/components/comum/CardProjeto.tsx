import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Projeto } from "@/types/projeto";

/**
 * Componente CardProjeto
 * Card para exibição de projetos na listagem do blog
 */

interface CardProjetoProps {
  projeto: Projeto;
  indice?: number;
}

const CardProjeto = ({ projeto, indice = 0 }: CardProjetoProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: indice * 0.1 }}
      className="card-projeto group"
    >
      {/* Imagem */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={projeto.imagem}
          alt={projeto.titulo}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Conteúdo */}
      <div className="p-6 space-y-4">
        <h3 className="font-titulo text-xl font-semibold text-foreground line-clamp-2 group-hover:text-primaria transition-colors duration-300">
          {projeto.titulo}
        </h3>
        
        <p className="font-corpo text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {projeto.resumo}
        </p>

        <Link
          to={`/projetos/${projeto.id}`}
          className="inline-flex items-center gap-2 font-corpo font-semibold text-primaria hover:text-primaria-escura transition-colors group/link"
        >
          Saiba mais
          <ArrowRight
            size={18}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default CardProjeto;
