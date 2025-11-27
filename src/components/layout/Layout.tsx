import { ReactNode } from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

/**
 * Componente Layout
 * Estrutura base de todas as páginas com header e footer
 */

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Cabecalho />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Rodape />
    </div>
  );
};

export default Layout;
