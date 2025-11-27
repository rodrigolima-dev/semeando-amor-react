import { motion } from "framer-motion";

/**
 * Componente ShapesDecorativos
 * Formas geométricas animadas para decoração de seções
 */

interface ShapesDecorativosProps {
  variante?: "hero" | "secao" | "simples";
}

const ShapesDecorativos = ({ variante = "hero" }: ShapesDecorativosProps) => {
  if (variante === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shape grande verde */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primaria rounded-full blur-3xl"
        />
        
        {/* Shape laranja */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute top-1/3 -left-32 w-80 h-80 bg-secundaria rounded-full blur-3xl"
        />
        
        {/* Shape pequeno flutuante */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-primaria-clara/20 shape-blob"
        />
        
        {/* Shape médio flutuante */}
        <motion.div
          animate={{
            y: [10, -15, 10],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-secundaria-clara/15 shape-wave"
        />

        {/* Círculos decorativos */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primaria/30 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-32 right-40 w-6 h-6 bg-secundaria/30 rounded-full animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-primaria/40 rounded-full animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>
    );
  }

  if (variante === "secao") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primaria rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secundaria rounded-full blur-3xl"
        />
      </div>
    );
  }

  // Variante simples
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 right-10 w-20 h-20 bg-primaria/10 shape-blob" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-secundaria/10 shape-wave" />
    </div>
  );
};

export default ShapesDecorativos;
