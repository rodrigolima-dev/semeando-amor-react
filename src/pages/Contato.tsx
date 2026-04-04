import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import Layout from "@/components/layout/Layout";
import SecaoTitulo from "@/components/comum/SecaoTitulo";
import ShapesDecorativos from "@/components/comum/ShapesDecorativos";
import Botao from "@/components/comum/Botao";

/**
 * Página Fale Conosco
 * Informações de contato
 */

const PaginaContato = () => {
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
              Fale Conosco
            </h1>
            <p className="font-corpo text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tem alguma dúvida, sugestão ou quer fazer parte da nossa causa?
              Estamos aqui para ouvir você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-20 bg-background relative">
        <ShapesDecorativos variante="simples" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <SecaoTitulo
              subtitulo="Informações"
              titulo="Entre em contato"
              alinhamento="left"
            />

            {/* Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primaria/10 text-primaria">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-titulo text-lg font-semibold text-foreground mb-1">
                    E-mail
                  </h4>
                  <a
                    href="mailto:projetosocialsemeandoamor@gmail.com"
                    className="font-corpo text-muted-foreground hover:text-primaria transition-colors"
                  >
                    projetosocialsemeandoamor@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-secundaria/10 text-secundaria">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-titulo text-lg font-semibold text-foreground mb-1">
                    Telefone
                  </h4>
                  <a
                    href="tel:+5521964290818"
                    className="font-corpo text-muted-foreground hover:text-primaria transition-colors"
                  >
                    (21) 97925-3568
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-card">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primaria/10 text-primaria">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-titulo text-lg font-semibold text-foreground mb-1">
                    Endereço
                  </h4>
                  <p className="font-corpo text-muted-foreground">
                    R. Espada de São Jorge, 405<br />
                    Areal - Rio das Pedras<br />
                    Rio de Janeiro - RJ, 22641-512
                  </p>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="p-6 bg-verde-suave rounded-2xl">
              <h4 className="font-titulo text-lg font-semibold text-foreground mb-3">
                Horário de Atendimento
              </h4>
              <div className="font-corpo text-muted-foreground space-y-1">
                <p>Segunda a Sexta: 9h às 17h</p>
                <p>Sábado: Fechado</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PaginaContato;
