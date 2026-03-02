import heroImage from "@/assets/hero-construction.webp";
import { ArrowRight, FileText, Calendar, Send } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Canteiro de obras com guindastes ao pôr do sol"
          className="w-full h-full object-cover"
          loading="eager" />
        
        <div className="absolute inset-0 bg-navy-radial opacity-85" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-secondary text-xs font-medium uppercase tracking-widest font-mono">
                Maranhão · Mato Grosso · Pará · Paraíba · Piauí       
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up lg:text-5xl font-sans">
            Engenharia com Governança, Precisão Técnica e Capacidade de Alto desempenho    
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Atuação estratégica em obras públicas, corporativas e industriais de médio e grande porte — com planejamento estruturado, controle rigoroso e conformidade normativa.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => scrollTo("#contato")}
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded font-semibold text-sm hover:bg-gold-dark transition-colors">
              
              <FileText size={18} />
              Solicitar Proposta Técnica
            </button>
            <button
              onClick={() => scrollTo("#contato")}
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded font-semibold text-sm hover:border-secondary hover:text-secondary transition-colors">
              
              <Calendar size={18} />
              Agendar Reunião Executiva
            </button>
            <button
              onClick={() => scrollTo("#contato")}
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors text-sm font-medium">
              
              <Send size={16} />
              Enviar Projeto para Análise
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Credibility strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 animate-fade-up" style={{ animationDelay: "0.45s" }}>
          {[
          "Planejamento Técnico Estruturado",
          "Gestão de Cronograma e Orçamento",
          "Conformidade Normativa",
          "Supervisão Especializada",
          "Capacidade Operacional Regional"].
          map((item) =>
          <div key={item} className="flex items-start gap-3">
              <div className="w-1 h-8 bg-secondary rounded-full shrink-0 mt-0.5" />
              <span className="text-primary-foreground/60 text-sm leading-snug">{item}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default HeroSection;