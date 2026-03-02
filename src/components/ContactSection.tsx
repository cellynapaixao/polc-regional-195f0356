import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Contato Institucional</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
              Fale com Nossa Equipe Técnica
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed mb-6">
              Nosso canal de atendimento é direcionado a diretores, gestores públicos, engenheiros responsáveis e compradores corporativos que buscam uma parceria técnica estruturada.
            </p>
            <p className="text-primary-foreground/60 leading-relaxed mb-10">
              Estamos disponíveis para reuniões técnicas, envio de documentação institucional, análise preliminar de projetos e elaboração de propostas estruturadas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Atuação Regional</p>
                  <p className="text-xs text-primary-foreground/50">Maranhão · Pará · Piauí</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center">
                  <Phone size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">(98) 9 85158012</p>
                  <p className="text-xs text-primary-foreground/50">Seg. a Sex. — 08h às 18h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center">
                  <Mail size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">contato@polcengenharia.com.br</p>
                  <p className="text-xs text-primary-foreground/50">Respondemos em até 24h úteis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8">
            <h3 className="font-serif text-xl font-bold mb-6">Solicitar Contato</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-primary-foreground/70 mb-1.5 block uppercase tracking-wider">Nome</label>
                  <input
                    type="text"
                    className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-primary-foreground/70 mb-1.5 block uppercase tracking-wider">Empresa</label>
                  <input
                    type="text"
                    className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Nome da empresa ou órgão"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-primary-foreground/70 mb-1.5 block uppercase tracking-wider">E-mail</label>
                  <input
                    type="email"
                    className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="email@empresa.com.br"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-primary-foreground/70 mb-1.5 block uppercase tracking-wider">Telefone</label>
                  <input
                    type="tel"
                    className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-primary-foreground/70 mb-1.5 block uppercase tracking-wider">Assunto</label>
                <select className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:border-secondary transition-colors">
                  <option>Solicitar Proposta Técnica</option>
                  <option>Agendar Reunião Executiva</option>
                  <option>Enviar Projeto para Análise</option>
                  <option>Informações sobre Licitações</option>
                  <option>Outro Assunto</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-primary-foreground/70 mb-1.5 block uppercase tracking-wider">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Descreva brevemente sua demanda ou projeto..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-3.5 rounded font-semibold text-sm hover:bg-gold-dark transition-colors inline-flex items-center justify-center gap-2"
              >
                Enviar Solicitação
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
