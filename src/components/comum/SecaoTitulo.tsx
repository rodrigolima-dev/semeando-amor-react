import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Componente SecaoTitulo
 * Título de seção com animação e estilo consistente
 */

interface SecaoTituloProps {
  subtitulo?: string;
  titulo: string;
  descricao?: string;
  alinhamento?: "left" | "center" | "right";
  className?: string;
}

const SecaoTitulo = ({
  subtitulo,
  titulo,
  descricao,
  alinhamento = "center",
  className,
}: SecaoTituloProps) => {
  const alinhamentoClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-2xl space-y-4 mb-12",
        alinhamentoClasses[alinhamento],
        className
      )}
    >
      {subtitulo && (
        <span className="inline-block font-corpo text-sm font-semibold uppercase tracking-wider text-secundaria">
          {subtitulo}
        </span>
      )}
      
      <h2 className="font-titulo text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        {titulo}
      </h2>

      {descricao && (
        <p className="font-corpo text-lg text-muted-foreground leading-relaxed">
          {descricao}
        </p>
      )}

      {/* Linha decorativa */}
      <div className={cn(
        "flex gap-1 pt-2",
        alinhamento === "center" && "justify-center",
        alinhamento === "right" && "justify-end"
      )}>
        <div className="w-12 h-1 bg-primaria rounded-full" />
        <div className="w-3 h-1 bg-secundaria rounded-full" />
      </div>
    </motion.div>
  );
};

export default SecaoTitulo;
