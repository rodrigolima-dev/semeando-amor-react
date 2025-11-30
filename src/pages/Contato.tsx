import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import SecaoTitulo from "@/components/comum/SecaoTitulo";
import ShapesDecorativos from "@/components/comum/ShapesDecorativos";
import Botao from "@/components/comum/Botao";

/**
 * Página Fale Conosco
 * Formulário de contato e informações
 */

interface FormularioContato {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const estadoInicial: FormularioContato = {
  nome: "",
  email: "",
  assunto: "",
  mensagem: "",
};

const PaginaContato = () => {
  const [formulario, setFormulario] = useState<FormularioContato>(estadoInicial);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formulario.nome || !formulario.email || !formulario.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setEnviando(true);

    // Simula envio (substituir por chamada de API real)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setEnviando(false);
    setEnviado(true);
    setFormulario(estadoInicial);

    toast({
      title: "Mensagem enviada!",
      description: "Recebemos sua mensagem e entraremos em contato em breve.",
    });

    // Reset do estado de sucesso após 5 segundos
    setTimeout(() => setEnviado(false), 5000);
  };

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

      {/* Formulário e Informações */}
      <section className="py-20 bg-background relative">
        <ShapesDecorativos variante="simples" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SecaoTitulo
                subtitulo="Entre em Contato"
                titulo="Envie sua mensagem"
                alinhamento="left"
              />

              {enviado ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-verde-suave p-8 rounded-2xl text-center"
                >
                  <CheckCircle size={48} className="text-primaria mx-auto mb-4" />
                  <h3 className="font-titulo text-xl font-semibold text-foreground mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="font-corpo text-muted-foreground">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block font-corpo font-semibold text-foreground mb-2"
                      >
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formulario.nome}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background
                                 font-corpo text-foreground placeholder:text-muted-foreground
                                 focus:outline-none focus:ring-2 focus:ring-primaria/50 focus:border-primaria
                                 transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-corpo font-semibold text-foreground mb-2"
                      >
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formulario.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background
                                 font-corpo text-foreground placeholder:text-muted-foreground
                                 focus:outline-none focus:ring-2 focus:ring-primaria/50 focus:border-primaria
                                 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="assunto"
                      className="block font-corpo font-semibold text-foreground mb-2"
                    >
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formulario.assunto}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background
                               font-corpo text-foreground
                               focus:outline-none focus:ring-2 focus:ring-primaria/50 focus:border-primaria
                               transition-all duration-300"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="voluntariado">Quero ser voluntário</option>
                      <option value="doacao">Fazer uma doação</option>
                      <option value="parceria">Proposta de parceria</option>
                      <option value="informacoes">Informações gerais</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block font-corpo font-semibold text-foreground mb-2"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formulario.mensagem}
                      onChange={handleChange}
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background
                               font-corpo text-foreground placeholder:text-muted-foreground
                               focus:outline-none focus:ring-2 focus:ring-primaria/50 focus:border-primaria
                               transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  <Botao
                    type="submit"
                    variante="primario"
                    tamanho="lg"
                    carregando={enviando}
                    className="w-full sm:w-auto"
                  >
                    <Send size={20} />
                    Enviar Mensagem
                  </Botao>
                </form>
              )}
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <SecaoTitulo
                subtitulo="Informações"
                titulo="Outras formas de contato"
                alinhamento="left"
              />

              {/* Cards de contato */}
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
                      (21) 96429-0818
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

              {/* Horário de funcionamento */}
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
        </div>
      </section>

    </Layout>
  );
};

export default PaginaContato;
