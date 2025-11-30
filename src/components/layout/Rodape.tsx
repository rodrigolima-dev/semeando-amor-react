import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logoSemeando from "@/assets/logo-semeando.jfif";

/**
 * Componente Rodape
 * Footer do site com informações de contato e links
 */

const Rodape = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-primaria-escura text-primaria-foreground">
      {/* Seção Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1 - Sobre */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoSemeando}
                alt="Semeando Amor"
                className="h-12 w-12 rounded-full object-cover bg-background/10"
              />
              <span className="font-titulo text-xl font-bold">
                Semeando Amor
              </span>
            </div>
            <p className="font-corpo text-sm leading-relaxed opacity-90">
              Transformando vidas através do amor, educação e solidariedade. 
              Juntos, plantamos sementes de esperança para um futuro melhor.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/share/1LrV5zUpaF/?mibextid=wwXIfr"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/projetosocialsemeandoamor?igsh=MWt5MmVmY3MwMWZkbQ%3D%3D&utm_source=qr"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="space-y-4">
            <h4 className="font-titulo text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3 font-corpo text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 hover:underline transition-all">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="opacity-90 hover:opacity-100 hover:underline transition-all">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="opacity-90 hover:opacity-100 hover:underline transition-all">
                  Nossos Projetos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="opacity-90 hover:opacity-100 hover:underline transition-all">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="space-y-4">
            <h4 className="font-titulo text-lg font-semibold">Contato</h4>
            <ul className="space-y-3 font-corpo text-sm">
              <li className="flex items-center gap-3 opacity-90">
                <Mail size={18} />
                <span>projetosocialsemeandoamor@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <Phone size={18} />
                <span>(21) 96429-0818</span>
              </li>
              <li className="flex items-start gap-3 opacity-90">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>R. Espada de São Jorge, 405<br />Areal - Rio das Pedras - RJ</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div className="space-y-4">
            <h4 className="font-titulo text-lg font-semibold">Newsletter</h4>
            <p className="font-corpo text-sm opacity-90">
              Receba novidades e histórias inspiradoras diretamente no seu e-mail.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 
                         text-primaria-foreground placeholder:text-primaria-foreground/60
                         focus:outline-none focus:border-background/40 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-secundaria hover:bg-secundaria-clara text-secundaria-foreground 
                         px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-corpo opacity-80">
            <p>
              © {anoAtual} Semeando Amor. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Feito com <Heart size={16} className="text-secundaria fill-secundaria" /> para transformar vidas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
