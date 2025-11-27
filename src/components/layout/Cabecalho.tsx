import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoSemeando from "@/assets/logo-semeando.jfif";

/**
 * Componente Cabecalho
 * Header principal do site com navegação responsiva
 */

interface LinkNavegacao {
  nome: string;
  caminho: string;
}

const linksNavegacao: LinkNavegacao[] = [
  { nome: "Início", caminho: "/" },
  { nome: "Quem Somos", caminho: "/quem-somos" },
  { nome: "Projetos", caminho: "/projetos" },
  { nome: "Fale Conosco", caminho: "/contato" },
];

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  const estaAtivo = (caminho: string) => location.pathname === caminho;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={fecharMenu}>
            <motion.img
              src={logoSemeando}
              alt="Semeando Amor - Logo"
              className="h-12 w-12 rounded-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="font-titulo text-xl font-bold text-primaria hidden sm:block">
              Semeando Amor
            </span>
          </Link>

          {/* Navegação Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {linksNavegacao.map((link) => (
              <li key={link.caminho}>
                <Link
                  to={link.caminho}
                  className={`
                    font-corpo font-semibold text-sm uppercase tracking-wide
                    transition-colors duration-300 relative
                    ${estaAtivo(link.caminho) 
                      ? "text-primaria" 
                      : "text-foreground/70 hover:text-primaria"
                    }
                  `}
                >
                  {link.nome}
                  {estaAtivo(link.caminho) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primaria rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botão Doar - Desktop */}
          <Link
            to="/contato"
            className="hidden md:block btn-primario text-sm"
          >
            Doe Agora
          </Link>

          {/* Botão Menu Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primaria transition-colors"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            {menuAberto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <ul className="container mx-auto px-4 py-6 space-y-4">
              {linksNavegacao.map((link, index) => (
                <motion.li
                  key={link.caminho}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.caminho}
                    onClick={fecharMenu}
                    className={`
                      block py-2 font-corpo font-semibold text-lg
                      transition-colors duration-300
                      ${estaAtivo(link.caminho) 
                        ? "text-primaria" 
                        : "text-foreground/70 hover:text-primaria"
                      }
                    `}
                  >
                    {link.nome}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contato"
                  onClick={fecharMenu}
                  className="btn-primario inline-block mt-4"
                >
                  Doe Agora
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Cabecalho;
